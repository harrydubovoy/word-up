import { CardFooter } from '../../ui/Card';

const WordPairCardFooter = ({ children }) => (
  <CardFooter className="p-0">
    <div className="flex justify-end gap-2">
      {children}
    </div>
  </CardFooter>
);

export default WordPairCardFooter;
