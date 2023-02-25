import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
{
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur earum hic, impedit nesciunt quo libero nemo at est perferendis natus obcaecati atque, debitis iusto vitae dignissimos, maiores vero? Voluptatum, repudiandae rem!'
},
{
  avatar: AVTR2,
  name: 'Tina Snow',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur earum hic, impedit nesciunt quo libero nemo at est perferendis natus obcaecati atque, debitis iusto vitae dignissimos, maiores vero? Voluptatum, repudiandae rem!'
},
{
  avatar: AVTR3,
  name: 'Tina Snow',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur earum hic, impedit nesciunt quo libero nemo at est perferendis natus obcaecati atque, debitis iusto vitae dignissimos, maiores vero? Voluptatum, repudiandae rem!'
},
{
  avatar: AVTR4,
  name: 'Tina Snow',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur earum hic, impedit nesciunt quo libero nemo at est perferendis natus obcaecati atque, debitis iusto vitae dignissimos, maiores vero? Voluptatum, repudiandae rem!'
}
]

const testimonials = () => {
  return(
      <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials__container">
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <article key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar}/>
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </article>
              )
              })
          }
        </div>
      </section>
  )
}





/*
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='AVATAR ONE' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Libero reprehenderit sunt fugit voluptates? Obcaecati aspernatur, soluta itaque 
          qui amet quod iure, quisquam nostrum dolor nihil dolore voluptate velit quis vero.
          </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='AVATAR ONE' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Libero reprehenderit sunt fugit voluptates? Obcaecati aspernatur, soluta itaque 
          qui amet quod iure, quisquam nostrum dolor nihil dolore voluptate velit quis vero.
          </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='AVATAR ONE' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Libero reprehenderit sunt fugit voluptates? Obcaecati aspernatur, soluta itaque 
          qui amet quod iure, quisquam nostrum dolor nihil dolore voluptate velit quis vero.
          </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='AVATAR ONE' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Libero reprehenderit sunt fugit voluptates? Obcaecati aspernatur, soluta itaque 
          qui amet quod iure, quisquam nostrum dolor nihil dolore voluptate velit quis vero.
          </small>
        </article>
      </div>
    </section>
  )
}
*/


export default testimonials