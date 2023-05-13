import { FC } from 'react'
import styles from './Description.module.scss'

type PropsType = {
  technologies: string
  title: string
  description: string
  login?: { e: string; p: string }
}

export const Description: FC<PropsType> = ({
  technologies,
  login,
  title,
  description,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.technologies}>{technologies}</div>

      <div className={styles.description}>
        <h5>{title}</h5>
        <p>{description}</p>

        {login && (
          <div className={styles.login_info}>
            <span>LOGIN:</span>
            <span>{login.e}</span>
            <span>PASSWORD:</span>
            <span>{login.p}</span>
          </div>
        )}
      </div>
    </div>
  )
}
