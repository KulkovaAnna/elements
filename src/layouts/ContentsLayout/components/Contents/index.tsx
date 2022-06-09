import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OFFSET_SMALL } from 'constants/offsets';
import React, { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
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
}) => {
  const [_opened, _setIsOpened] = useState(defaultIsOpened);

  const opened = isOpen !== undefined ? isOpen : _opened;

  const handleButtonClick = useCallback(() => {
    _setIsOpened(!opened);
    onCloseButtonClick?.();
  }, [opened]);

  return (
    <Navigation opened={opened}>
      {showHomeButton && (
        <HomeBlock>
          <HomeBlockLeft to="/">
            <FontAwesomeIcon
              icon={solid('chevron-left')}
              size="1x"
              style={{ marginRight: OFFSET_SMALL }}
            />
            <ListItem style={{ padding: 0 }}>На главную</ListItem>
          </HomeBlockLeft>
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
                  <Link style={{ display: 'flex' }} to={header.to}>
                    {header.title}
                  </Link>
                </ListItem>
              );
            })
        )}
      </MainList>
      <BottomList>
        <ListItem>Скачать как PDF</ListItem>
        <ListItem>Версия для печати</ListItem>
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
