import React, { FC } from 'react';
import { InProgress, LinkItem } from './styles';

interface Props extends React.RefAttributes<HTMLAnchorElement> {
  children?: string | string[] | JSX.Element | JSX.Element[];
  to: string;
  finished?: boolean;
}

const NotFinishedItem: FC<Props> = ({ children, to, finished, ...rest }) => {
  return (
    <LinkItem to={to} {...rest} inProgress={!finished}>
      {!finished && <InProgress>В разработке</InProgress>}
      {children}
    </LinkItem>
  );
};

export default NotFinishedItem;
