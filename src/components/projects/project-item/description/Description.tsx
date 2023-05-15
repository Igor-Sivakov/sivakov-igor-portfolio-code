import { FC } from 'react'
import styles from './Description.module.scss'

type PropsType = {
  title: string
  description: string
  login?: {
    e: string
    p: string
  }
}

export const Description: FC<PropsType> = ({ title, description, login }) => {
  return (
    <div className={styles.root}>
      <h5>{title}</h5>
      <p>{description}</p>

      {login && (
        <div className={styles.login_info}>
          <div>
            <span>LOGIN:</span>
            <span>{login.e}</span>
          </div>
          <div>
            <span>PASSWORD:</span>
            <span>{login.p}</span>
          </div>
        </div>
      )}
    </div>
  )
}
