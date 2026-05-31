import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// Load .env without requiring dotenv
try {
  const raw = readFileSync(resolve(process.cwd(), '.env'), 'utf-8')
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const val = trimmed.slice(eq + 1).trim()
    if (!process.env[key]) process.env[key] = val
  }
} catch {}

const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env

if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
  console.log('ℹ️  Skipping review fetch — GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set')
  console.log('   Copy .env.example to .env and fill in the values to enable live reviews.')
  process.exit(0)
}

const url =
  `https://maps.googleapis.com/maps/api/place/details/json` +
  `?place_id=${GOOGLE_PLACE_ID}` +
  `&fields=rating,user_ratings_total,reviews` +
  `&language=ro` +
  `&key=${GOOGLE_PLACES_API_KEY}`

try {
  const res = await fetch(url)
  const data = await res.json()

  if (data.status !== 'OK') {
    console.error('Google Places API error:', data.status, data.error_message || '')
    process.exit(1)
  }

  const out = {
    rating: data.result.rating,
    total: data.result.user_ratings_total,
    placeUrl: `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`,
    reviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
    reviews: (data.result.reviews || []).map(r => ({
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      relative_time_description: r.relative_time_description,
    })),
  }

  writeFileSync(
    resolve(process.cwd(), 'src/data/reviews.json'),
    JSON.stringify(out, null, 2)
  )

  console.log(`✓ Fetched ${out.reviews.length} reviews (${out.rating}★ · ${out.total} total)`)
} catch (err) {
  console.error('Failed to fetch reviews:', err.message)
  process.exit(1)
}
