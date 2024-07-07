export enum visibilityTypes {
  PRIVATE = 'private',
  WORKSPACE = 'workspace',
  PUBLIC = 'public'
}

export interface Board {
  id: string
  title: string
  background: string
  visibility: visibilityTypes
}
