import { Chip } from '../../ui-kit/Chip';
import { Box } from '../../ui-kit/Box';

export function PartOfSpeechBadge({ children, className }) {
	return (
		<Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
			<Chip
				size="small"
				variant="filled"
				className={className}
				label={children}
			/>
		</Box>
	);
}
