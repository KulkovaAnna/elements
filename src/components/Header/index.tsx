import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = Record<string, never>;

const Header: FC<Props> = () => {
  return (
    <ul className="header">
      <li className="header_link">
        <Link to="#">Бестиарий</Link>
      </li>
      <li className="header_link">
        <Link to="/characters">Персонажи</Link>
      </li>
      <li className="header_link header_link__main">
        <Link to="/contents">Читать</Link>
      </li>
      <li className="header_link">
        <Link to="#">История</Link>
      </li>
      <li className="header_link">
        <Link to="#">Локации</Link>
      </li>
    </ul>
  );
};

export default Header;
