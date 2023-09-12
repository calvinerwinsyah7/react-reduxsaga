import { useCallback, useMemo } from "react"
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux"
import { Dispatch } from "redux"

import { RootState } from "state/root/reducer"
import { RootAction } from "state/root/type"

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export type DispatchFunction = Dispatch<RootAction>

export const useRedux = <SelectedState>(
  selector: (state: RootState) => SelectedState,
  equalityFn?: (left: SelectedState, right: SelectedState) => boolean
): [SelectedState, DispatchFunction] => {
  const state = useSelector(useCallback(selector, []), equalityFn)
  const dispatch = useDispatch<DispatchFunction>()

  return useMemo(() => [state, dispatch], [state, dispatch])
}
