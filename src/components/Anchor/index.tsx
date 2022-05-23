import React, { FC, MouseEventHandler, useCallback } from 'react';
interface Props {
  children: string | JSX.Element | JSX.Element[];
  href: string;
  onClick?(): void;
}

const Anchor: FC<Props> = ({ children, href, onClick }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    const element: HTMLElement | null = document.querySelector(href);
    if (element) {
      element.tabIndex = -1;
      element.focus();
      setTimeout(() => element.removeAttribute('tabindex'), 1000);
    }
    onClick?.();
  }, [href, onClick]);
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Anchor;
