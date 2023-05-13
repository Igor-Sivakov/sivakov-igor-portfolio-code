import { FC } from 'react'
import cn from 'clsx'

import styles from './BurgerButton.module.scss'

type PropsType = {
  isOpenMenu: boolean
}

export const BurgerButton: FC<PropsType> = ({ isOpenMenu }) => {
  return (
    <button
      className={cn(styles.nav_toggle, {
        [styles.nav_toggle__active]: isOpenMenu,
      })}
    >
      <span className={styles.nav_toggle__item}>Menu</span>
    </button>
  )
}
