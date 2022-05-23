import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Container, Link } from './styles';

interface Props {
  links: {
    title: string;
    to: string;
  }[];
}

const NavHeader: FC<Props> = ({ links }) => {
  return (
    <Container>
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
