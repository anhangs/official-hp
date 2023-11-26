type UpdateCallback = () => Promise<any> | void

declare global {
  export interface ViewTransition {
    readonly updateCallbackDone: Promise<undefined>
    readonly ready: Promise<undefined>
    readonly finished: Promise<undefined>
    skipTransition(): void
  }

  export interface Document {
    startViewTransition?: (updateCallback?: UpdateCallback) => ViewTransition
  }
}