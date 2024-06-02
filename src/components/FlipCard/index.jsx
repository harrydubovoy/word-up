import classNames from 'classnames';

function FlipCard({ className, isToggled, renderFront, renderBack }) {
  return (
    <div className={classNames('group relative w-full perspective-1000', className)}>
      <div className={classNames('relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d', {
        'rotate-y-180': isToggled,
      })}
      >
        {renderFront({ frontClassName: 'absolute w-full h-full backface-hidden' })}
        {renderBack({ backClassName: 'absolute w-full h-full text-white transform rotate-y-180 backface-hidden' })}
      </div>
    </div>
  );
}

export { FlipCard };
