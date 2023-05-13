import { FC } from 'react'

import { projectsData } from '../../assets/data/projects.data'

//@ts-ignore
import Fade from 'react-reveal/Fade'
import { Title } from '../common/title/Title'
import { ProjectItem } from './project-item/ProjectItem'

import styles from './Projects.module.scss'

export const Projects: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Fade bottom>
        <section id='projects' className={styles.root}>
          <Title
            h3={'projects'}
            span={'portfolio'}
            className={styles.title}
            children={<div />}
          />

          <div className={styles.projects_container}>
            {projectsData.map((item) => (
              <ProjectItem key={item.title} {...item} />
            ))}
          </div>
        </section>
      </Fade>
    </div>
  )
}
