import React from 'react'
import './portfolio.css'
import IMGA from '../../assests/BackgroundRM.png'
import IMGB from '../../assests/WebBlog.png'
import IMGC from '../../assests/Firbasechatapp.png'
import IMGD from '../../assests/lulusnativekitchen.png'
import IMGE from '../../assests/ecommercestore.png'
import IMGF from '../../assests/Google map api Distance and time calculator.png'
import IMGG from '../../assests/Simplecalculator.png'
import IMGH from '../../assests/oldporfolio.png'
//import IMGE from '../../assests/Proactive validation form.png'

const data = [
  {
    id:1,
    image: IMGA,
    title: 'Backgroung Remover1',
    demo: 'https://anya-background-remover.vercel.app/'
  },
  {
    id:2,
    image: IMGB,
    title: 'Blog Web Application',
    demo: 'https://anya-blog.vercel.app/'
  },
  {
    id:3,
    image: IMGC,
    title: 'Firebase Chat App',
    demo: 'https://chuxs.github.io/Chatting Programm JavaScript/index.html'
  },
  {
    id:4,
    image: IMGD,
    title: 'Food Ordering Service',
    demo: 'http://lulusnativekitchen.com/'
  },
  {
    id:5,
    image: IMGE,
    title: 'Simple Shopping Site',
    demo: 'https://chuxs.github.io/ChuxLiveStore/index.html'
  },
  {
    id:6,
    image: IMGF,
    title: 'Google Map API Distance and Time Calculator',
    demo: 'https://chuxs.github.io/JavaScript Google Map Api Project/index.html'
  },
  {
    id:7,
    image: IMGG,
    title: 'Simple Calculator',
    demo: 'https://chuxs.github.io/Calculator/index.html'
  },
  {
    id:8,
    image: IMGH,
    title: 'Previous Portfolio',
    demo: 'https://chuxs.github.io/'
  },

    // {
  //   id:6,
  //   image: IMGE,
  //   title: 'Proactive Validation Form',
  //   demo: 'https://chuxs.github.io/JavaScript Form Validation/index.html'
  // },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4>{title}</h4>
                <div className="portfolio_item-cta"> 
                 <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'> 
                 Demo </a> 
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio