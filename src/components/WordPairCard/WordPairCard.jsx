import { Card } from '../../ui/Card';

function WordPairCard({ children }) {
  return (
    <Card className="w-full p-3.5">
      {children}
    </Card>
  );
}

export default WordPairCard;
