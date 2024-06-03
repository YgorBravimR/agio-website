"use client"
import { useState, useEffect } from "react"

// sm: "480px"
// md: "768px"
// lg: "1280px"
// xl: "1920px"

const useScreenSize = () => {
  const isClient = typeof window === "object"

  const [screenSize, setScreenSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (!isClient) {
      setScreenSize({
        width: 0,
        height: 0,
      })
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
