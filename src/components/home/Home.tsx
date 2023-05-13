import { FC } from 'react'
//@ts-ignore
import Fade from 'react-reveal/Fade'

import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <section id='home' className={styles.root}>
      <Fade bottom>
        <div className={styles.main_container}>
          <div className={styles.photo}></div>

          <div className={styles.title_inner}>
            <h1 className={styles.first_name}>Igor</h1>
            <h1 className={styles.last_name}>Sivakov</h1>
            <p>Front-End Developer</p>
          </div>
        </div>
      </Fade>
    </section>
  )
}
