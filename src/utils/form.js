import { compose, equals, filter, or, prop, reduce, and } from 'ramda';

import { normalizeValue } from './string';
import { WORD_PAIR_KEYS } from '../constants/word';
import { NODE_NAMES } from '../constants/nodes';

export const isInputNode = (node) => equals(node.nodeName, NODE_NAMES.INPUT);
export const isTextareaNode = (node) => equals(node.nodeName, NODE_NAMES.TEXTAREA);
export const isTextboxElement = (field) => or(isInputNode(field), isTextareaNode(field));

export const isRequiredFieldsIsNotEmpty = (fields) => (
  and(prop(WORD_PAIR_KEYS.FOREIGN, fields), prop(WORD_PAIR_KEYS.NATIVE, fields))
);

export const mapFieldsToValue = (acc, field) => {
  const fieldId = prop('id', field);
  const fieldValue = prop('value', field);

  acc[fieldId] = isTextareaNode(field) ? fieldValue : normalizeValue(prop('value', field));

  return acc;
};

export const getFields = compose(
  reduce(mapFieldsToValue, {}),
  filter(isTextboxElement),
);
