import { addIndex, map } from 'ramda';

const Map = ({ array, children }) => addIndex(map)(children)(array);

const List = Object.create(null);

List.Map = Map;

export { List };
