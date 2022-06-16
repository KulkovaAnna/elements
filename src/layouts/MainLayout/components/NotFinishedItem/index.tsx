import Link from 'next/link';
import React, { FC } from 'react';
import { InProgress, LinkItem } from './styles';

interface Props extends React.RefAttributes<HTMLAnchorElement> {
  children?: string | string[] | JSX.Element | JSX.Element[];
  href: string;
  finished?: boolean;
}

const NotFinishedItem: FC<Props> = ({ children, href, finished, ...rest }) => {
  return (
    <Link href={href} passHref>
      <LinkItem {...rest} inProgress={!finished}>
        {!finished && <InProgress>В разработке</InProgress>}
        {children}
      </LinkItem>
    </Link>
  );
};

export default NotFinishedItem;
