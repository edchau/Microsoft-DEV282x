import { TOGGLE_TABLE } from "../constants/constants.js";

var initialTableStatusData = new Array(16).fill(false);

const tableStatusData = (state = initialTableStatusData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

export default tableStatusData;
