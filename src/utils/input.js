import { compose, equals, prop } from 'ramda';

export const getTargetValue = compose(prop('value'), prop('target'));
export const getRefValue = (inputRef) => prop('value', inputRef.current);
export const setRefValue = (inputRef, value) => {
  // eslint-disable-next-line no-param-reassign
  inputRef.current.value = value;
};
export const isEnterKey = (event) => equals(prop('keyCode', event), 13);
