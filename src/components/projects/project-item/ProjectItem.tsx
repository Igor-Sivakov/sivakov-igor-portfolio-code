import { FC, useState } from 'react'

import { Links } from './links/Links'
import { Description } from './description/Description'

import styles from './ProjectItem.module.scss'

type PropsType = {
  technologies: string
  title: string
  description: string
  login?: { e: string; p: string }
  app: string
  front: string
  back?: string
  screenshot: string
}

export const ProjectItem: FC<PropsType> = ({
  technologies,
  login,
  title,
  description,
  app,
  front,
  back,
  screenshot,
}) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
      className={styles.root}
      style={{
        background: `center 0% / 100% 100% no-repeat url(${screenshot})`,
      }}
    >
      <div className={styles.overlay}>
        {isSelected ? (
          <Links app={app} front={front} back={back} />
        ) : (
          <Description
            technologies={technologies}
            login={login}
            title={title}
            description={description}
          />
        )}
      </div>
    </div>
  )
}
