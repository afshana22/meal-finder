import { combineReducers } from "redux";

const detailsDataReducer = (
  state = {
    meal: [],
  },

  action
) => {
  switch (action.type) {
    case "SEARCH_MEAL": {
      let newState = {
        ...state,

        meal: action.payload.meals,
      };

      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  detailsData: detailsDataReducer,
});
