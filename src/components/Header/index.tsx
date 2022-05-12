import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className="header">
      <Link className="header_link" to="#">
        Бестиарий
      </Link>
      <Link className="header_link" to="/character-list">
        Персонажи
      </Link>
      <Link to="/contents" className="header_link header_link__main">
        Читать
      </Link>
      <Link className="header_link" to="#">
        История
      </Link>
      <Link className="header_link" to="#">
        Локации
      </Link>
    </div>
  );
};

export default Header;
