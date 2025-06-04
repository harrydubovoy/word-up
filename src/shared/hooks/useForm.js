import { useReducer } from 'react';

import { getTargetValue } from '../utils/input';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.id]: action.value,
      };
    case 'RESET':
      return { ...action.payload };
    default:
      return state;
  }
};

export const useForm = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = (id) => ({
    value: state[id] || '',
    onChange: (e) => {
      dispatch({ type: 'CHANGE', id, value: getTargetValue(e) });
    },
    id,
  });

  const reset = (newState = initialState) => {
    dispatch({ type: 'RESET', payload: newState });
  };

  return { state, register, reset };
};
