const initialState = {
  isOnline: navigator.onLine,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ONLINE_STATUS":
      return {
        ...state,
        isOnline: action.payload.isOnline,
      };
    default:
      return state;
  }
};

export default appReducer;
