import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { MENU_ICON_COLOR } from '@/constants/colors';
import Link from 'next/link';
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
      <Link href="/">
        <LogoLink>
          <Logo src="/logo.png" alt="logo" />
        </LogoLink>
      </Link>
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
        <NotFinishedItem href="/bestiary">Бестиарий</NotFinishedItem>
        <NotFinishedItem href="/characters" finished>
          Персонажи
        </NotFinishedItem>
        <ReadLink href="/chapters/1" finished>
          Читать
        </ReadLink>
        <NotFinishedItem href="/lore">История</NotFinishedItem>
        <NotFinishedItem href="/locations">Локации</NotFinishedItem>
      </MainBlock>
      <div />
    </Container>
  );
};

export function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    if (document) {
      const header = document.querySelector('#main-header');
      setHeaderHeight(header?.clientHeight ?? 0);
    }
  }, []);
  return headerHeight;
}

export default Header;
