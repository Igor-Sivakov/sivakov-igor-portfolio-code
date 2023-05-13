import socialNetwork from '../img/projects-screenshots/social-network.png'
import vapeShop from '../img/projects-screenshots/vape.png'
import todoList from '../img/projects-screenshots/todo-list.png'
import blogMERN from '../img/projects-screenshots/blog-mern.png'
import pickingColors from '../img/projects-screenshots/picking-colors.png'
import fewWorks from '../img/projects-screenshots/few-works.png'
import mogo from '../img/projects-screenshots/mogo.png'
import bootstrapLanding from '../img/projects-screenshots/landing-bootstrap.png'
import ecommerceProject from '../img/projects-screenshots/ecommerce-project.png'



export const projectsData = [
  {
    screenshot: socialNetwork,
    technologies: 'REACT / REDUX-TOOLKIT / TYPESCRIPT / WEB-SOCKET / FORMIK',
    title: 'Social network',
    description:
      'Developers social network, this is online platform where you can create an account, interact with other developers,find peoples, make friends and share thoughts and ideas by writing a post, leave comments, chatting in general chat. Many features still in progress, but all basic functions on board:). Please don`t forget to log out after the session, it is important.',
    login: { e: 'sivakovigor.ui@gmail.com', p: 'yygelrun' },
    app: 'https://igor-sivakov.github.io/my-social-network/',
    front: 'https://github.com/Igor-Sivakov/my-social-network-code',
  },
  {
    screenshot: ecommerceProject,
    technologies:
      'NEXT /REDUX-TOOLKIT /TYPESCRIPT / TAILWIND / HOOK-FORM / NEST / POSTGRESQL',
    title: 'Ecommerce store',
    description:
      'This project is a store with glorious design, that has in its functionality search, sorting, shopping cart, personal account, registration with a double JWT token and payment by card. For now backend on heroku is disabled, application work on mock data only for presentation. For full functional please download backend by link.Use test login or you can make your personal account.',
    login: { e: 'test@gmail.com', p: '112233' },
    app: 'https://ecommerce-store-front-next.vercel.app/',
    front: 'https://github.com/Igor-Sivakov/ecommerce-store-front-next',
    back: 'https://github.com/Igor-Sivakov/ecommerce-store-back-nest',
  },
  {
    screenshot: blogMERN,
    technologies:
      'REACT / REDUX-TOOLKIT / TYPESCRIPT / HOOK-FORM / EXPRESS / MONGO DB',
    title: 'Blog MERN',
    description:
      'This application is a Blog written on MERN.In all its functionality, it has the creation and editing of a post, search by tags, comments, adding and deleting them, registration by JWT token. For now backend on heroku is disabled, application work on mock data only for presentation. For full functional please download backend by link. Use test login.',
    login: { e: 'sinatra@gmail.com ', p: '123456' },
    app: 'https://igor-sivakov.github.io/Blog-MERN-frontend/',
    front: 'https://github.com/Igor-Sivakov/Blog-MERN-frontend-code',
    back: 'https://github.com/Igor-Sivakov/Blog-MERN-backend',
  },
  {
    screenshot: vapeShop,
    technologies: 'REACT / REDUX-TOOLKIT / TYPESCRIPT',
    title: 'Vape shop',
    description:
      'This is a small single page application.A store that has categories of goods, sorting them, pagination, searching, adding and removing from the basket, calculating the total cost.',
    app: 'https://igor-sivakov.github.io/shop-react/',
    front: 'https://github.com/Igor-Sivakov/shop-react-code',
  },
  {
    screenshot: mogo,
    technologies: 'HTML / CSS / JS',
    title: 'Mogo landing',
    description:
      'This is a simple static landing page with a nice design and animation. Layout work written in pure HTML, CSS and JS.',
    app: 'https://igor-sivakov.github.io/landing-page/',
    front: 'https://github.com/Igor-Sivakov/landing-page',
  },
  {
    screenshot: todoList,
    technologies: 'REACT / REDUX-TOOLKIT / TYPESCRIPT',
    title: 'Todo list',
    description:
      'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, priorities tasks, manage tasks effectively and improve time management.',
    app: 'https://igor-sivakov.github.io/ToDo-list/',
    front: 'https://github.com/Igor-Sivakov/ToDo-list-code',
  },
  {
    screenshot: pickingColors,
    technologies: 'HTML / CSS / JS',
    title: 'Picking colors app',
    description:
      'This is a color matching app written in pure js. It can be used for quick selection of colors. Selected colors can be sent as a link, which is saved in the URL address, or one color can be saved by simply pressing a button and pasted to your app.',
    app: 'https://igor-sivakov.github.io/picking-colors-app/',
    front: 'https://github.com/Igor-Sivakov/picking-colors-app',
  },
  {
    screenshot: fewWorks,
    technologies: 'REACT / REDUX-TOOLKIT / TYPESCRIPT',
    title: 'A few works in one',
    description:
      'This work is several small works in one.In this work you can find a small questionnaire with answer options, checking them and issuing the result, an application where you can find, mark and send out invitations for friends somewhere, a currency converter and a small photo gallery with sorting, searching and pagination.',
    app: 'https://igor-sivakov.github.io/a-few-works/',
    front: 'https://github.com/Igor-Sivakov/a-few-works-code',
  },

  {
    screenshot: bootstrapLanding,
    technologies: 'HTML / CSS / JS / BOOTSTRAP',
    title: 'Landing on bootstrap',
    description:
      'This is one of my first works. Also work on layout, static landing page, written in pure HTML, CSS and JS with using the Bootstrap library.',
    app: 'https://igor-sivakov.github.io/bootstrap-landing/',
    front: 'https://github.com/Igor-Sivakov/bootstrap-landing',
  },
]
