import { useArchive, useDictionary } from '../../entities';

export const useArchiveCardController = (id) => {
	const { createOne } = useDictionary();

	const { removeOneById, selectEntityById } = useArchive();

	const handleRestore = () => {
		const data = selectEntityById(id);
		removeOneById({ id });
		createOne({ id, data });
	};

	const handleRemove = () => {
		removeOneById({ id });
	};

	return {
		handleRestore,
		handleRemove,
	};
};
