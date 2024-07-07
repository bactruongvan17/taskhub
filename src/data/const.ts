import { visibilityTypes } from '@/types/board'

export const VISIBILITY_TEXT = {
  [visibilityTypes.PUBLIC]: {
    label: 'Public',
    desc: 'Anyone on the Internet can see this board. Only board members can edit.'
  },
  [visibilityTypes.PRIVATE]: {
    label: 'Private',
    desc: 'Only board members can see this board. Workspace admins can close the board or remove members.'
  },
  [visibilityTypes.WORKSPACE]: {
    label: 'Workspace',
    desc: 'All members of this board can see and edit this board.'
  }
}
