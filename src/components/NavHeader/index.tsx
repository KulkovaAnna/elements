import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentsItem } from 'layouts/ContentsLayout';
import React, { FC, HTMLAttributes } from 'react';
import { Container, Link } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  links: ContentsItem[];
}

const NavHeader: FC<Props> = ({ links, ...rest }) => {
  return (
    <Container {...rest}>
      <Link to="/">
        <FontAwesomeIcon icon={solid('home')} />
      </Link>
      {links.map((link, index) => (
        <p key={index}>
          &nbsp;&#10141;&nbsp;<Link to={link.to}>{link.title}</Link>
        </p>
      ))}
    </Container>
  );
};

export default NavHeader;
