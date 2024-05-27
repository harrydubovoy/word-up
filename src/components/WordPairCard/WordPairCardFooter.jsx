import { CardFooter } from '../../ui/Card';

function WordPairCardFooter({ children }) {
  return (
    <CardFooter className="p-0">
      <div className="flex justify-end gap-2">
        {children}
      </div>
    </CardFooter>
  );
}

export default WordPairCardFooter;
