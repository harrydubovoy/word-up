import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Alphabet } from './Alphabet';

export function SuggestedDictionaryAside({ onClick }) {
  return (
    <Card>
      <CardContent>
        <Alphabet onClick={onClick} />
      </CardContent>
    </Card>
  );
}
