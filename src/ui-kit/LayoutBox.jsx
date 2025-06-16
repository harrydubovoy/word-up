import { styled, css } from './theme';

const applySxStyles = (sx, theme) => {
  if (!sx) return null;

  if (typeof sx === 'function') {
    return css(sx(theme));
  }

  const styles = {};
  for (const key in sx) {
    const value = sx[key];
    // Обробка пропсів, які можуть бути функціями або об'єктами (для брейкпойнтів)
    if (typeof value === 'function') {
      styles[key] = value(theme);
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      // Обробка адаптивних стилів або вкладених об'єктів
      styles[key] = applySxStyles(value, theme);
    } else {
      // Приклад для інтервалів: 'p' (padding), 'm' (margin)
      if (['p', 'm', 'pt', 'pb', 'pl', 'pr', 'mt', 'mb', 'ml', 'mr'].includes(key) && typeof value === 'number') {
        styles[key] = theme.spacing(value);
      } else {
        styles[key] = value;
      }
    }
  }
  return css(styles);
};

export const LayoutBox = styled.div(
  ({ sx, theme }) => css`${applySxStyles(sx, theme)}`,
);
