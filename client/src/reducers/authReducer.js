import { FETCH_USER } from '../actions/types';

export default (state = null, action) => {
  // Initial state = null: Means not sure if user is logged in or not - don't want anything to appear for UI (no rapid content switching on frontend)
  //  Request complete = user is logged in. False: we are confident user is not logged in (for purposes of rendering specific content)
  switch (action.type) {
    case FETCH_USER:
      // Acion.payload will return as either user model or an empty string.
      // Empty string is considered falsey, thus '' || false will return false
      return action.payload || false;
    default:
      return state;
  }
};
