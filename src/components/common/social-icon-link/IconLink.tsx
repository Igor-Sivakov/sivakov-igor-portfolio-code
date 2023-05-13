import { FC } from 'react'
import { IconType } from 'react-icons'

import styles from './IconLink.module.scss'

type PropsType = {
  Icon: IconType
  url: string
}

export const IconLink: FC<PropsType> = ({ Icon, url }) => {
  return (
    <a className={styles.link} href={url}>
      <Icon />
    </a>
  )
}
