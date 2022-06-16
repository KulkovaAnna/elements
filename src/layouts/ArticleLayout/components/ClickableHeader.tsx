import React from 'react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import useDimension from '@/hooks/useDimension';
import { FC, useState, useCallback, useEffect } from 'react';
import { TitleWrapper, Title, ChevronIcon } from '../styles';

type HeaderProps = {
  children: string[];
  node: {
    position: {
      start: {
        offset: number;
      };
    };
  };
};

const ClickableHeader: FC<HeaderProps> = ({ children, node }) => {
  const { isTablet } = useDimension();
  const [chevronOpened, setChevronOpened] = useState(!isTablet);
  const [siblings, setSiblings] = useState<NodeListOf<HTMLElement>>();

  const id = node.position.start.offset.toString();
  const chevron = chevronOpened ? solid('chevron-down') : solid('chevron-up');

  useEffect(() => {
    if (document) {
      setSiblings(document.querySelectorAll<HTMLElement>(`#header-${id} ~ *`));
    }
  }, []);

  const changeParagraphsDisplay = useCallback(
    (val: 'none' | 'block') => {
      for (const elem of Array.from(siblings ?? [])) {
        if (elem.nodeName === 'P') {
          elem.style.display = val;
        } else {
          break;
        }
      }
    },
    [siblings]
  );

  useEffect(() => {
    if (!isTablet) {
      changeParagraphsDisplay('block');
    } else {
      changeParagraphsDisplay(chevronOpened ? 'block' : 'none');
    }
  }, [changeParagraphsDisplay, chevronOpened, isTablet]);

  const handleClick = useCallback(() => {
    changeParagraphsDisplay(chevronOpened ? 'block' : 'none');
    setChevronOpened(!chevronOpened);
  }, [changeParagraphsDisplay, chevronOpened]);

  return (
    <TitleWrapper
      onClick={isTablet ? handleClick : undefined}
      id={`header-${id}`}
      className="article-header"
    >
      <Title>{children}</Title>
      <ChevronIcon icon={chevron} style={{ marginLeft: 10 }} />
    </TitleWrapper>
  );
};

export default ClickableHeader;
