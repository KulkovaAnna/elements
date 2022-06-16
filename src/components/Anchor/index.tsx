import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
interface Props {
  children: string | JSX.Element | JSX.Element[];
  href: string;
  onClick?(): void;
}

const Anchor: FC<Props> = ({ children, href, onClick }) => {
  const [element, setElement] = useState<HTMLAnchorElement | null>(null);
  useEffect(() => {
    if (document) {
      setElement(document?.querySelector<HTMLAnchorElement>(href));
    }
  }, []);
  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
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
