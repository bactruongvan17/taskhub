import { VisibilityTypes } from '@/types/board'

export const VISIBILITY_TEXT = {
  [VisibilityTypes.PUBLIC]: {
    label: 'Public',
    desc: 'Anyone on the Internet can see this board. Only board members can edit.'
  },
  [VisibilityTypes.PRIVATE]: {
    label: 'Private',
    desc: 'Only board members can see this board. Workspace admins can close the board or remove members.'
  },
  [VisibilityTypes.WORKSPACE]: {
    label: 'Workspace',
    desc: 'All members of this board can see and edit this board.'
  }
}
