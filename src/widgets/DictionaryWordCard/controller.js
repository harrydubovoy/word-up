import { useArchive, useDictionary, useTestPlan } from '../../entities';
import { useAsideContentPortalContext } from '../../shared/contextes/AsideContentPortal';

export const useDictionaryCardController = (id) => {
  const { selectEntityById, removeOneById } = useDictionary();

  const { createOne: createArchiveEntity } = useArchive();

  const {
    createOne: createTestPlanEntity,
    removeOneById: removeTestPlanEntity,
    selectEntityById: selectTestPlanEntityById,
  } = useTestPlan();

  const { addRenderComponent } = useAsideContentPortalContext();

  const isExistAtTestPlan = Boolean(selectTestPlanEntityById(id));

  const handleRenderDescription = (component) => () => {
    addRenderComponent(component);
  };

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
  };

  return {
    isExistAtTestPlan,

    handleMoveToArchive,
    handleToggleTestPlan,
    handleRenderDescription,
  };
};
