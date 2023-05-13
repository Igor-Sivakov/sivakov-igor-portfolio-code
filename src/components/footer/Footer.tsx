import { FC } from 'react'

import globe from '../../assets/img/globe.gif'

import { socialData } from '../../assets/data/social.data'

import { IconLink } from '../common/social-icon-link/IconLink'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.social_container}>
        {socialData.map((obj, i) => (
          <IconLink key={i} Icon={obj.logo} url={obj.url} />
        ))}
      </div>

      <p className={styles.copyright}>© 2023 created by Igor Sivakov</p>

      <div className={styles.logo}>
        <img src={globe} alt='globe' />
      </div>
    </section>
  )
}
