import { FC } from 'react'
import cn from 'clsx'

import { menuItems } from '../../../assets/data/menu.data'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

import styles from './BurgerMenu.module.scss'

type PropsType = {
  isScrolled: boolean
  isVisible: boolean
}

export const BurgerMenu: FC<PropsType> = ({ isScrolled, isVisible }) => {
  return (
    <div
      className={cn(styles.root, {
        [styles.root__visible]: isVisible,
        [styles.root__scroll]: isScrolled,
      })}
    >
      <Scrollspy
        className={styles.menu_nav}
        currentClassName={styles.current_item}
        items={menuItems}
        offset={-200}
      >
        {menuItems.map((item) => (
          <li key={item}>
            <AnchorLink href={`#${item}`}>{item}</AnchorLink>
          </li>
        ))}
      </Scrollspy>
    </div>
  )
}
