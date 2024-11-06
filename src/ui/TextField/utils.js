export const isTextareaFieldType = (type) => type === 'textarea';

export const addContentSizing = (type) => (isTextareaFieldType(type) ? 'sizing-content' : '');
