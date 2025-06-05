export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        values: {
          ...state.values,
          [action.id]: action.value,
        },
      };
    case 'RESET':
      return {
        values: { ...action.payload },
        errors: {},
      };
    case 'SET':
      return {
        ...state,
        values: {
          ...state.values,
          [action.id]: action.value,
        },
      };
    case 'REMOVE':
			// eslint-disable-next-line no-case-declarations
      const newValues = { ...state.values };
      delete newValues[action.id];
      return {
        ...state,
        values: newValues,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.payload,
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};
