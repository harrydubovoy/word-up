import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Typography } from '../../ui-kit/Typography';
import { styled } from '../../ui-kit/theme';
import { Box } from '../../ui-kit/Box';
import { Button } from '../../ui-kit/Button';

import { useAsideContentPortalContext } from '../../shared/contextes/AsideContentPortal';

const Card = styled(MuiCard)({
  position: 'relative',
  borderRadius: '12px',
});

const CardFooter = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  gap: '4px',
  padding: '0 16px 16px',
});

export function DescriptionWordCard({ children }) {
  const { removeRenderComponent } = useAsideContentPortalContext();

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" fontWeight="400">
          {children}
        </Typography>
      </CardContent>
      <CardFooter>
        <Button variant="contained" onClick={removeRenderComponent}>Close</Button>
      </CardFooter>
    </Card>
  );
}
