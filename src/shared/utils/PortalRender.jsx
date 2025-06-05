import { createPortal } from 'react-dom';

export function PortalRender({ children, nodeId }) {
  const node = document.getElementById(nodeId);

  if (!node) {
    return null;
  }

  return (
    createPortal(
      children,
      node,
    )
  );
}
