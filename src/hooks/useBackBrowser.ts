import { useEffect } from "react"

type BackButtonCallback = () => boolean

const useBackButton = (callback: BackButtonCallback) => {
  useEffect(() => {
    const handleBackButtonClick = (event: PopStateEvent) => {
      if (typeof callback === "function") {
        const allowBackNavigation = callback()

        if (!allowBackNavigation) {
          event.preventDefault()
        }
      }
    }

    window.addEventListener("popstate", handleBackButtonClick)

    return () => {
      window.removeEventListener("popstate", handleBackButtonClick)
    }
  }, [callback])
}

export default useBackButton
