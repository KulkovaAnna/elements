import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { MENU_ICON_COLOR } from 'constants/colors';
import React, { FC, useEffect, useState } from 'react';
import Contents from '../Contents';
import NotFinishedItem from '../NotFinishedItem';
import {
  Container,
  Logo,
  LogoLink,
  MainBlock,
  MenuIcon,
  ReadLink,
} from './styles';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Header: FC<Props> = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [startTouch, setStartTouch] = useState<number>(0);

  const changeMenuState = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  return (
    <Container {...props} id="main-header">
      <MenuIcon
        icon={solid('bars')}
        size="2x"
        color={MENU_ICON_COLOR}
        onClick={changeMenuState}
      />
      <LogoLink to="/">
        <Logo src={require('../../../../assets/logo.png')} alt="logo" />
      </LogoLink>
      <Contents
        isOpen={menuIsOpened}
        onCloseClick={changeMenuState}
        onTouchStart={(event) => setStartTouch(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => {
          if (startTouch - event.changedTouches[0].clientX > 100) {
            setMenuIsOpened(false);
          }
        }}
      />
      <MainBlock>
        <NotFinishedItem to="#">Бестиарий</NotFinishedItem>
        <NotFinishedItem to="/characters" finished>
          Персонажи
        </NotFinishedItem>
        <ReadLink to="/contents" finished>
          Читать
        </ReadLink>
        <NotFinishedItem to="#">История</NotFinishedItem>
        <NotFinishedItem to="#">Локации</NotFinishedItem>
      </MainBlock>
      <div />
    </Container>
  );
};

export function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector('#main-header');
    setHeaderHeight(header?.clientHeight ?? 0);
  }, []);
  return headerHeight;
}

export default Header;
