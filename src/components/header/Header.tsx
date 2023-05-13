import { FC, useEffect, useState } from 'react'
import cn from 'clsx'

import { GiD4 } from 'react-icons/gi'

import { menuItems } from '../../assets/data/menu.data'
import { socialData } from '../../assets/data/social.data'

import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IconLink } from '../common/social-icon-link/IconLink'
import { BurgerMenu } from './burger-menu/BurgerMenu'
import { BurgerButton } from './burger-button/BurgerButton'

import styles from './Header.module.scss'

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 1)
    })
  }, [])

  return (
    <header className={cn(styles.root, { [styles.root__sticky]: isScrolled })}>
      <div
        className={cn(styles.wrapper, { [styles.wrapper__sticky]: isScrolled })}
      >
        <div className={styles.menu_container}>
          <GiD4 />

          <nav className={styles.menu}>
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
          </nav>
        </div>

        <div className={styles.social_container}>
          {socialData.map((obj, i) => (
            <IconLink key={i} Icon={obj.logo} url={obj.url} />
          ))}
        </div>

        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={styles.burger_menu}
        >
          <BurgerButton isOpenMenu={isOpenMenu} />
        </div>

        <BurgerMenu isScrolled={isScrolled} isVisible={isOpenMenu} />
      </div>
    </header>
  )
}
