'use client'

import { useEffect } from 'react'

export default function RedictToXurrent() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://wmclinics-ext.xurrent.com/login'
    }, 5000)
  }, [])
  return null
}
