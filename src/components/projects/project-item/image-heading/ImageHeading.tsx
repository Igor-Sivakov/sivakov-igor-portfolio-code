import { FC } from 'react'
import styles from './ImageHeading.module.scss'

type PropsType = {
  technologies: string
}

export const ImageHeading: FC<PropsType> = ({ technologies }) => {
  return (
    <div className={styles.root}>
      <div className={styles.technologies}>{technologies}</div>
    </div>
  )
}
