import { FC } from 'react'
//@ts-ignore
import Fade from 'react-reveal/Fade'

import styles from './MyGitHub.module.scss'

export const MyGitHub: FC = () => {
  return (
    <section className={styles.root}>
      <Fade bottom>
        <div className={styles.link_container}>
          <h2>Link to my GitHub</h2>

          <a href='https://github.com/Igor-Sivakov' type='button'>
            view github
          </a>
        </div>
      </Fade>
    </section>
  )
}
