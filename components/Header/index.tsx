import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  HeaderElem,
  Item,
  List,
  Nav
} from './styles';

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Reading', path: '/reading' },
  { title: 'Listening', path: '/listening' },
]

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <HeaderElem>
        <Nav>
          <List>
            {menu.map((item, index) => (
            <Item key={index}>
              <Link href={item.path}>
                <a className={router.pathname == item.path ? "active" : ""}>{item.title}</a>
              </Link>
            </Item>
            ))}
          </List>
        </Nav>
      </HeaderElem>
    </>
  )
}
