'use client'

import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

interface ExtendedPerformanceEntry extends PerformanceEntry {
  initiatorType?: string
  renderBlockingStatus?: string
  domComplete?: number
  domInteractive?: number
  loadEventEnd?: number
}

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTI: { good: 3800, poor: 7300 }, // Time to Interactive
  TBT: { good: 200, poor: 600 },   // Total Blocking Time
}

interface PerformanceEvent {
  action: string
  category: string
  label?: string
  data?: Record<string, number>
}

export function usePerformanceMonitoring() {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance || !window.performance.getEntriesByType) {
      return
    }

    // Report Core Web Vitals
    const reportWebVitals = () => {
      const entries = window.performance.getEntriesByType('navigation')[0] as ExtendedPerformanceEntry
      const paint = window.performance.getEntriesByType('paint')
      const resources = window.performance.getEntriesByType('resource') as ExtendedPerformanceEntry[]

      // Navigation Timing
      if (entries) {
        // Track each navigation timing metric separately
        trackEvent({
          action: 'dom_complete',
          category: 'Performance',
          value: Math.round(entries.domComplete || 0)
        })
        
        trackEvent({
          action: 'dom_interactive',
          category: 'Performance',
          value: Math.round(entries.domInteractive || 0)
        })
        
        trackEvent({
          action: 'load_complete',
          category: 'Performance',
          value: Math.round(entries.loadEventEnd || 0)
        })
      }

      // Paint Timing
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')
      if (fcp) {
        trackEvent({
          action: 'first_contentful_paint',
          category: 'Performance',
          value: Math.round(fcp.startTime)
        })
      }

      // Resource Timing
      const resourceStats = resources.reduce((acc, resource) => {
        const type = resource.initiatorType || 'other'
        const blocking = resource.renderBlockingStatus || 'non-blocking'
        
        acc[type] = (acc[type] || 0) + 1
        acc[`${type}_blocking`] = (acc[`${type}_blocking`] || 0) + (blocking === 'blocking' ? 1 : 0)
        
        return acc
      }, {} as Record<string, number>)

      // Track total number of resources
      trackEvent({
        action: 'total_resources',
        category: 'Performance',
        value: resources.length
      })

      // Track blocking resources
      const blockingResources = resources.filter(r => r.renderBlockingStatus === 'blocking').length
      trackEvent({
        action: 'blocking_resources',
        category: 'Performance',
        value: blockingResources
      })
    }

    // Report after load
    if (document.readyState === 'complete') {
      reportWebVitals()
    } else {
      window.addEventListener('load', reportWebVitals)
      return () => window.removeEventListener('load', reportWebVitals)
    }
  }, [trackEvent])
}

// Helper function to get current performance metrics
export function getCurrentPerformanceMetrics(): PerformanceMetric[] {
  if (typeof window === 'undefined') return []

  const metrics: PerformanceMetric[] = []
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

  if (navigation) {
    // DOM Content Loaded
    metrics.push({
      name: 'DCL',
      value: navigation.domContentLoadedEventEnd - navigation.startTime,
      rating: 'good', // Simplified rating for example
    })

    // Load Time
    metrics.push({
      name: 'Load',
      value: navigation.loadEventEnd - navigation.startTime,
      rating: 'good',
    })
  }

  return metrics
} 