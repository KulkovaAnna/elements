import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BottomList,
  CloseButton,
  HomeBlock,
  ListItem,
  MainList,
  Navigation,
} from './styles';

export type ContentsItem = { title: string; to: string };

export type ContentsProps = {
  defaultIsOpened?: boolean;
  data: ContentsItem[];
  showCloseButton?: boolean;
  selectedIndex?: number;
  showHomeButton?: boolean;
  renderItem?(text: ContentsItem, index: number): JSX.Element;
};

const Contents: FC<ContentsProps> = ({
  data,
  showCloseButton = false,
  renderItem,
  selectedIndex,
  defaultIsOpened = true,
  showHomeButton = false,
}) => {
  const [opened, setIsOpened] = useState(defaultIsOpened);

  const handleButtonClick = useCallback(() => {
    setIsOpened(!opened);
  }, [opened]);

  return (
    <Navigation opened={opened}>
      {showHomeButton && (
        <HomeBlock to="/">
          <FontAwesomeIcon
            icon={solid('chevron-left')}
            size="1x"
            style={{ marginRight: 10 }}
          />
          <ListItem style={{ padding: 0 }}>На главную</ListItem>
        </HomeBlock>
      )}
      <MainList>
        {data?.map(
          renderItem ??
            ((header, index) => {
              return (
                <ListItem key={index} selected={index === selectedIndex}>
                  <Link to={header.to}>{header.title}</Link>
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
