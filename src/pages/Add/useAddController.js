import { useDictionary } from '../../entities';

export const useAddController = () => {
  const { createOne } = useDictionary();

  const handleCreateOneEntity = ({ data }) => {
    createOne({ data });
  };

  return { handleCreateOneEntity };
};
