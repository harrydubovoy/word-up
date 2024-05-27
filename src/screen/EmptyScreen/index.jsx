import EmptyScreenFactory from './EmptyScreenFactory';

function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <div className="flex flex-col items-center gap-4 justify-center mt-28">
        <EmptyScreenFactory type={type} />
      </div>
    );
  }

  return children;
}

export default EmptyScreen;
