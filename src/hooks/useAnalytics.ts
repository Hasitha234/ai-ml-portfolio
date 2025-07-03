import { useCallback } from 'react'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ action, category, label, value }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }, [])

  const trackButtonClick = useCallback((buttonName: string, section?: string) => {
    trackEvent({
      action: 'button_click',
      category: 'engagement',
      label: section ? `${section}_${buttonName}` : buttonName,
    })
  }, [trackEvent])

  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    trackEvent({
      action: 'form_submission',
      category: 'forms',
      label: `${formName}_${success ? 'success' : 'failure'}`,
    })
  }, [trackEvent])

  const trackYouTubeClick = useCallback((videoTitle: string, youtubeUrl: string) => {
    trackEvent({
      action: 'youtube_video_click',
      category: 'engagement',
      label: `${videoTitle}_${youtubeUrl}`,
    })
  }, [trackEvent])

  const trackProjectView = useCallback((projectName: string) => {
    trackEvent({
      action: 'project_view',
      category: 'portfolio',
      label: projectName,
    })
  }, [trackEvent])

  const trackExternalLink = useCallback((url: string, context: string) => {
    trackEvent({
      action: 'external_link',
      category: 'navigation',
      label: `${context}_${url}`,
    })
  }, [trackEvent])

  const trackSearch = useCallback((query: string, resultsCount: number) => {
    trackEvent({
      action: 'search',
      category: 'interaction',
      label: query,
      value: resultsCount,
    })
  }, [trackEvent])

  const trackError = useCallback((errorMessage: string, errorCode?: string) => {
    trackEvent({
      action: 'error',
      category: 'error',
      label: errorCode ? `${errorCode}_${errorMessage}` : errorMessage,
    })
  }, [trackEvent])

  const trackFeatureUsage = useCallback((featureName: string, details?: string) => {
    trackEvent({
      action: 'feature_use',
      category: 'features',
      label: details ? `${featureName}_${details}` : featureName,
    })
  }, [trackEvent])

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackYouTubeClick,
    trackProjectView,
    trackExternalLink,
    trackSearch,
    trackError,
    trackFeatureUsage,
  }
} 