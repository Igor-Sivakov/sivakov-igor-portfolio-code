import { FC } from 'react'
import cn from 'clsx'

import styles from './ResponsePopUp.module.scss'

type PropsType = {
  status: string | null
  title: string
  message: string
  icon: string
}

export const ResponsePopUp: FC<PropsType> = ({
  icon,
  title,
  message,
  status,
}) => {
  return (
    <div className={cn(styles.root, { [styles.root__shown]: status })}>
      <div className={styles.icon}>
        <img src={icon} alt='icon' />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.message}>{message}</div>
    </div>
  )
}
