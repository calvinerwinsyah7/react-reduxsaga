import { combineReducers } from "redux"
import { type StateType } from "typesafe-actions"

export const rootReducer = combineReducers({
  // ...add reducers here
})

export type RootState = StateType<typeof rootReducer>;
