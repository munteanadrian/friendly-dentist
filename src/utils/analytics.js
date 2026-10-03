// Replace these IDs before going live
const GA4_IDS = ['G-0260YG6EV8', 'G-JNJ9G321SV']
const CLARITY_ID = 'wpluxr6zkz'

export const trackEvent = (name, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

export const grantConsent = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
    GA4_IDS.forEach((id) => window.gtag('config', id))
  }
  if (typeof window.fbq === 'function') {
    window.fbq('consent', 'grant')
  }
  loadClarity()
}

const loadClarity = () => {
  if (window._clarityLoaded) return
  window._clarityLoaded = true
  // prettier-ignore
  ;(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script',CLARITY_ID)
}
