import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeaderHeight } from '@/layouts';
import { OFFSET_SMALL } from '@/constants/offsets';
import React, { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import {
  BottomList,
  CloseButton,
  HomeBlock,
  HomeBlockLeft,
  ListItem,
  MainList,
  Navigation,
} from './styles';

export type ContentsItem = { title: string; to: string };

export type ContentsProps = {
  isOpen?: boolean;
  defaultIsOpened?: boolean;
  data: ContentsItem[];
  showCloseButton?: boolean;
  selectedIndex?: number;
  showHomeButton?: boolean;
  renderItem?(text: ContentsItem, index: number): JSX.Element;
  onCloseButtonClick?(): void;
  onItemClick?(): void;
  includeHeaderHeight?: boolean;
};

const Contents: FC<ContentsProps> = ({
  isOpen,
  data,
  showCloseButton = false,
  renderItem,
  selectedIndex,
  defaultIsOpened = true,
  showHomeButton = false,
  onCloseButtonClick,
  onItemClick,
  includeHeaderHeight,
}) => {
  const [_opened, _setIsOpened] = useState(defaultIsOpened);
  const [startTouch, setStartTouch] = useState<number>(0);
  const opened = isOpen !== undefined ? isOpen : _opened;

  const handleButtonClick = useCallback(() => {
    _setIsOpened(!opened);
    onCloseButtonClick?.();
  }, [opened]);
  const headerHeight = useHeaderHeight();
  return (
    <Navigation
      onTouchStart={(event) => setStartTouch(event.changedTouches[0].clientX)}
      onTouchEnd={(event) => {
        if (startTouch - event.changedTouches[0].clientX > 100) {
          handleButtonClick();
        }
      }}
      opened={opened}
      style={
        includeHeaderHeight
          ? { top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }
          : {}
      }
    >
      {showHomeButton && (
        <HomeBlock>
          <Link href="/">
            <HomeBlockLeft>
              <FontAwesomeIcon
                icon={solid('chevron-left')}
                size="1x"
                style={{ marginRight: OFFSET_SMALL }}
              />
              <ListItem style={{ padding: 0 }}>???? ??????????????</ListItem>
            </HomeBlockLeft>
          </Link>

          <FontAwesomeIcon
            icon={solid('close')}
            size="1x"
            onClick={handleButtonClick}
          />
        </HomeBlock>
      )}
      <MainList>
        {data?.map(
          renderItem ??
            ((header, index) => {
              return (
                <ListItem
                  key={index}
                  selected={index === selectedIndex}
                  onClick={onItemClick}
                >
                  <Link style={{ display: 'flex' }} href={header.to}>
                    {header.title}
                  </Link>
                </ListItem>
              );
            })
        )}
      </MainList>
      <BottomList>
        <ListItem>?????????????? ?????? PDF</ListItem>
        <ListItem>???????????? ?????? ????????????</ListItem>
      </BottomList>
      {showCloseButton && (
        <CloseButton onClick={handleButtonClick} opened={opened}>
          <FontAwesomeIcon
            icon={opened ? solid('chevron-left') : solid('chevron-right')}
          />
        </CloseButton>
      )}
    </Navigation>
  );
};

export default Contents;
