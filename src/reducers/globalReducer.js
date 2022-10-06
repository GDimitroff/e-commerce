import { TOGGLE_SIDEBAR } from '../actions';

const globalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default globalReducer;
