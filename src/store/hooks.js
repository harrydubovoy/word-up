import { useSelector, useDispatch } from 'react-redux';

export const useAppSelector = (selector, ...params) => (
  useSelector((state) => selector(state, ...params))
);
export const useAppDispatch = useDispatch;
