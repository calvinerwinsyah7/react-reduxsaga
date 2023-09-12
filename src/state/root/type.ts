export type RootAction = any

declare module "typesafe-actions" {
  interface Types {
    RootAction: RootAction
  }
}
