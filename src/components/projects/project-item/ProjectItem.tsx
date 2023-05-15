import { FC, useState } from 'react'

import { Links } from './links/Links'
import { ImageHeading } from './image-heading/ImageHeading'

import styles from './ProjectItem.module.scss'
import { Description } from './description/Description'

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
    <div className={styles.root}>
      <div
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
        className={styles.image}
        style={{
          background: `center 0% / 100% 100% no-repeat url(${screenshot})`,
        }}
      >
        <div className={styles.image_overlay}>
          {isSelected ? (
            <Links app={app} front={front} back={back} />
          ) : (
            <ImageHeading technologies={technologies} />
          )}
        </div>
      </div>

      <Description title={title} description={description} login={login} />
    </div>
  )
}
