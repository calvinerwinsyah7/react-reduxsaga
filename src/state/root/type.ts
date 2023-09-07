export type RootActions = any

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootActions
  }
}
