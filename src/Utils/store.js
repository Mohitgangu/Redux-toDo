import { createStore } from "redux";

// 1. Correct variable naming consistency
const ADD_ITEM = "ADD_ITEM";

// Action Creator
export function addItem(q) {
  return {
    type: ADD_ITEM,
    payload: q
  };
}

const initialState = {
  data: []
};

// Reducer
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state, // preserves any other properties in state if present
        data: [...state.data, action.payload] // 2. Correctly spread state.data array
      };
    default:
      return state;
  }
};

// Store creation
export const Store = createStore(listReducer);