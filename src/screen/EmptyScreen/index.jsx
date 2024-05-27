import EmptyScreenFactory, { EMPTY_SCREEN_TYPE } from './EmptyScreenFactory';

export {
  EMPTY_SCREEN_TYPE,
}

const EmptyScreen = ({ children, type }) => {
  if (type) {
    return (
      <div className="flex flex-col items-center gap-4 justify-center grow">
        <EmptyScreenFactory type={type} />
      </div>
    );
  }

  return <>{children}</>
}

export default EmptyScreen;
