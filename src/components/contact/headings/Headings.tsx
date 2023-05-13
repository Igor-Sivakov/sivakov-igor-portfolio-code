import { FC } from 'react'
import styles from './Headings.module.scss'

export const Headings: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>message me</div>

      <div className={styles.decor}>
        <div className={styles.line}></div>
        <div className={styles.or}>OR</div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.name}>my contacts</div>
    </div>
  )
}
