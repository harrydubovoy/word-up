import EmptyScreenFactory from './EmptyScreenFactory';

function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <div className="flex flex-col items-center gap-4 justify-center my-auto">
        <EmptyScreenFactory type={type} />
      </div>
    );
  }

  return children;
}

export default EmptyScreen;
