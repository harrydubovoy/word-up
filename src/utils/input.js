import { compose, equals, prop } from "ramda";

const getTargetValue = compose(prop('value'), prop('target'));
const isEnterKey = (event) => equals(prop('keyCode', event), 13);

export {
  getTargetValue,
  isEnterKey,
}
