import { FC } from 'react'

import aboutPhoto from '../../assets/img/about.png'

//@ts-ignore
import Fade from 'react-reveal/Fade'
import { Title } from '../common/title/Title'

import styles from './About.module.scss'

export const About: FC = () => {
  return (
    <section id='about' className={styles.root}>
      <Fade bottom>
        <div className={styles.wrapper}>
          <div className={styles.info_container}>
            <Title
              h3={'Igor Sivakov'}
              span={'about'}
              className={styles.title}
              children={<p>Front-End Developer</p>}
            />

            <div className={styles.info_text}>
              <p>
                {
                  'Hi, my name is Igor and I have been doing front-end development for over two years. Programming, like riding a motorcycle, is my strong passion and true love! To be honest, I never thought that I would do this and find myself in it, programming entered my life unexpectedly and completely by accident, and changed it forever, now I know for sure that this is my calling and talent.  '
                }
              </p>
              <p>
                {
                  'I can describe myself as a communicable, inquisitive, purposeful, hardworking and result-oriented person. At the moment I have experience in cross-browser, adaptive, responsive development, building SPA using React(JS/TS) / Scss / Next.js / Redux-toolkit / REST API / React-query / Tailwind and other technologies listed below. I also have some experience in writing a backend on Express.js / Nest.js frameworks and Postgresql / Mongo DB databases.'
                }
              </p>
              <p>
                {
                  'In the near future, I plan to grow as a front-end developer, I want to try React Native, Vue.js and Angular. But in the future, I also want to learn the backend. I would like to find a full-time project work in a company with a modern approach to development and a collaborative team.'
                }
              </p>
            </div>
          </div>

          <div className={styles.photo}>
            <img src={aboutPhoto} alt='about' />
          </div>
        </div>
      </Fade>
    </section>
  )
}
