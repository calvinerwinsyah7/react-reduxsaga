import { useEffect, useState } from "react"

export type DeviceType = "mobile" | "tablet" | "desktop"

function useDevice() {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)
  const [screenResolution, setScreenResolution] = useState<string | null>(null)

  useEffect(() => {
    const determineDeviceType = () => {
      if (window.innerWidth < 768) {
        return "mobile"
      } else if (window.innerWidth < 1024) {
        return "tablet"
      } else {
        return "desktop"
      }
    }

    setDeviceType(determineDeviceType())

    function handleResize() {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [window.innerHeight, window.innerWidth])

  useEffect(() => {
    // Calculate and set the screen resolution
    const resolution =
      window.innerWidth * window.devicePixelRatio +
      "x" +
      window.innerHeight * window.devicePixelRatio
    setScreenResolution(resolution)
  }, [screenWidth, screenHeight])

  return {
    deviceType,
    screenHeight,
    screenResolution,
    screenWidth,
  }
}

export default useDevice
