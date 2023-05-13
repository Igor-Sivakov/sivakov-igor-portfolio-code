import { FC } from 'react'

import { contacts } from '../../assets/data/contacts.data'

//@ts-ignore
import Fade from 'react-reveal/Fade'
import { Title } from '../common/title/Title'
import { EmailForm } from './email-form/EmailForm'
import { Headings } from './headings/Headings'

import styles from './Contact.module.scss'

export const Contact: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Fade bottom>
        <section id='contacts' className={styles.root}>
          <Title
            h3={'get in touch'}
            span={'contact'}
            className={styles.title}
            children={<div />}
          />

          <Headings />

          <div className={styles.main_container}>
            <EmailForm />

            <div className={styles.contacts_inner}>
              {contacts.map((item) => (
                <div key={item.contact} className={styles.contact}>
                  <span>{item.contact}</span>
                  <span>{item.type}</span>
                  {<item.Icon />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fade>
    </div>
  )
}
