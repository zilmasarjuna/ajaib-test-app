// Memoizing redux
import { createSelector } from 'reselect'

export const selectListUser = createSelector(
  state => state.user,
  list => list,
)
