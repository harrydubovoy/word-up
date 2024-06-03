import { Container } from '../../ui/Container';
import { Hr } from '../../ui/Hr';

function ScreenHeader({ children }) {
  return (
    <>
      <div className="py-5">
        <Container>
          {children}
        </Container>
      </div>
      <Hr />
    </>
  );
}

export default ScreenHeader;
