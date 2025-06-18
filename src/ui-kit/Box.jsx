import { LayoutBox } from './LayoutBox';
import { styled } from './theme';

import { If } from '../shared/utils/If';

const BoxCaption = styled(LayoutBox)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const getShear = (captionTop, captionBottom) => {
  if (captionTop) {
    return 'top';
  }

  if (captionBottom) {
    return 'bottom';
  }

  if (captionTop && captionBottom) {
    return 'both';
  }

  return 'none';
};

export function Box({ children, htmlTag, type, captionTop, captionBottom, className, ...props }) {
  const HtmlTag = htmlTag || 'div';
  return (
    <HtmlTag
      {...props}
      shear-={getShear(captionTop, captionBottom)}
      box-={type ?? 'round'}
      className={className}
    >
      <If condition={captionTop}>
        <BoxCaption>
          <If condition={captionTop?.[0]}>
            <span>{captionTop?.[0]}</span>
          </If>
          <If condition={captionTop?.[1]}>
            <span>{captionTop?.[1]}</span>
          </If>
        </BoxCaption>
      </If>
      {children}
      <If condition={captionBottom}>
        <BoxCaption>
          <If condition={captionBottom?.[0]}>
            <span>{captionBottom?.[0]}</span>
          </If>
          <If condition={captionBottom?.[1]}>
            <span>{captionBottom?.[1]}</span>
          </If>
        </BoxCaption>
      </If>
    </HtmlTag>
  );
}
