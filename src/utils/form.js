import { compose, equals, filter, or, prop, reduce, values } from 'ramda';

import { normalizeValue } from './string';
import { every } from './list';
import { NODE_NAMES } from '../constants/nodes';

const getNodeName = (node) => prop('nodeName', node);

export const isInputNode = (node) => equals(getNodeName(node), NODE_NAMES.INPUT);

export const isTextareaNode = (node) => equals(getNodeName(node), NODE_NAMES.TEXTAREA);

export const isTextboxElement = (field) => or(isInputNode(field), isTextareaNode(field));

const hasRequiredAttribute = (field) => field.hasAttribute('required');

export const getFields = filter(isTextboxElement);

export const getRequiredFields = compose(
  filter(hasRequiredAttribute),
  filter(isTextboxElement),
);

const getFieldId = (field) => prop('id', field);

const getFieldValue = (field) => prop('value', field);

export const mapFieldsToValue = (acc, field) => {
  const fieldValue = getFieldValue(field);

  acc[getFieldId(field)] = isTextareaNode(field) ? fieldValue : normalizeValue(fieldValue);

  return acc;
};

export const getFieldValuesAsMap = (initial) => reduce(mapFieldsToValue, initial);

export const getFieldsData = compose(
  getFieldValuesAsMap({}),
  getFields,
);

export const isRequiredFieldsFilled = compose(
  every(Boolean),
  values,
  getFieldValuesAsMap({}),
  getRequiredFields,
);
