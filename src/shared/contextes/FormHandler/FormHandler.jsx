import {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from 'react';

import { reducer } from './reducer';

const FormHandlerContext = createContext(undefined);

export function FormHandlerProvider({
  initialState = {},
  children,
  validateFn,
}) {
  const [state, dispatch] = useReducer(reducer, {
    values: initialState,
    errors: {},
  });

  const validate = useCallback(() => {
    if (!validateFn) return true;
    const errors = validateFn(state.values);
    dispatch({ type: 'SET_ERRORS', payload: errors });
    return Object.keys(errors).length === 0;
  }, [state.values, validateFn]);

  const register = (id) => ({
    value: state.values[id] || '',
    onChange: (e) => {
      dispatch({ type: 'CHANGE', id, value: e.target.value });
    },
    error: state.errors[id],
  });

  const reset = (newState = initialState) => {
    dispatch({ type: 'RESET', payload: newState });
  };

  const setValue = (id, value) => {
    dispatch({ type: 'SET', id, value });
  };

  const removeValue = (id) => {
    dispatch({ type: 'REMOVE', id });
  };

  return (
    <FormHandlerContext.Provider
      value={{
			  values: state.values,
			  errors: state.errors,
			  register,
			  reset,
			  setValue,
			  removeValue,
			  validate,
      }}
    >
      {children}
    </FormHandlerContext.Provider>
  );
}

export const useFormHandlerContext = () => {
  const context = useContext(FormHandlerContext);
  if (!context) {
    throw new Error('useFormHandlerContext must be used within a FormHandlerProvider');
  }

  return context;
};
