import { FC } from 'react'
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  MyGitHub,
  Projects,
  Skills,
} from './components'

import styles from './App.module.scss'

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.root}>
        <Header />
        <Home />
        <Projects />
        <Skills />
        <About />
        <MyGitHub />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
