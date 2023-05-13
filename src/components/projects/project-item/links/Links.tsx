import { FC } from 'react'

import { SiCreatereactapp } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineCode } from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'

import styles from './Links.module.scss'

type PropsType = {
  app: string
  front: string
  back?: string
}

export const Links: FC<PropsType> = ({ app, front, back }) => {
  return (
    <div className={styles.root}>
      <a href={app}>
        <BsArrowRight />
        <span>|</span>
        <span>view application</span>
        <SiCreatereactapp />
      </a>

      <a href={front}>
        <BsArrowRight />
        <span>|</span>
        <span>view front-end code</span>
        <FaLaptopCode />
      </a>

      {back && (
        <a href={back}>
          <BsArrowRight />
          <span>|</span>
          <span>view back-end code</span>
          <AiOutlineCode />
        </a>
      )}
    </div>
  )
}
