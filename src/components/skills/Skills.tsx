import { FC } from 'react'

import { otherSkillsIcons, skillsIcons } from '../../assets/data/skills.data'

//@ts-ignore
import Fade from 'react-reveal/Fade'
import { Title } from '../common/title/Title'

import styles from './Skills.module.scss'

export const Skills: FC = () => {
  return (
    <section id='skills' className={styles.root}>
      <Fade bottom>
        <div className={styles.wrapper}>
          <Title
            h3={'skills'}
            span={'technologies'}
            className={styles.title}
            children={
              <>
                <div className={styles.line_1}></div>
                <div className={styles.line_2}></div>
              </>
            }
          />

          <div className={styles.main_skills}>
            {skillsIcons.map((icon) => (
              <div key={icon} className={styles.main_skills_icon}>
                <img src={icon} alt='icon' />
              </div>
            ))}
          </div>

          <div className={styles.other_skills}>
            {otherSkillsIcons.map((icon) => (
              <div key={icon.title} className={styles.other_skills_icon}>
                <img src={icon.url} alt='icon' />
                <span>{icon.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  )
}
