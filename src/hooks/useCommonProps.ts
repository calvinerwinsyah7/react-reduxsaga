import { useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const useCommonProps = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  return useMemo(
    () => ({
      location,
      // For convenience add push(), replace(), pathname at top level
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      navigate,
      params,
      pathname: location.pathname,
      search: location.search,
      state: location.state as any,
    }),
    [params, location, history]
  )
}
