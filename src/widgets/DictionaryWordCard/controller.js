import { useArchive, useDictionary, useTestPlan } from '../../entities';

export const useDictionaryCardController = (id) => {
  const { selectEntityById, removeOneById } = useDictionary();

  const { createOne: createArchiveEntity } = useArchive();

  const {
    createOne: createTestPlanEntity,
    removeOneById: removeTestPlanEntity,
    selectEntityById: selectTestPlanEntityById,
  } = useTestPlan();

  const isExistAtTestPlan = Boolean(selectTestPlanEntityById(id));

  const handleToggleTestPlan = () => {
    if (isExistAtTestPlan) {
      removeTestPlanEntity({ id });
    } else {
      createTestPlanEntity({ id });
    }
  };

  const handleMoveToArchive = () => {
    const dictionaryEntity = selectEntityById(id);
    createArchiveEntity({ id, data: dictionaryEntity });
    removeOneById({ id });
    removeTestPlanEntity({ id });
  };

  return {
    isExistAtTestPlan,

    handleMoveToArchive,
    handleToggleTestPlan,
  };
};
