const initState = {
  jwt: localStorage.getItem("access_token"),
  users: [],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_JWT":
      return {
        ...state,
        jwt: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "RESET":
      return {
        ...initState,
      };
    default:
      return state;
  }
};
