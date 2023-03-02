import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import JobItems from './Jobs/JobItems';
import Articles from './Articles/Articles';
import Apartments from './Apartments/Apartments';
import NewArticle from './Articles/NewArticle';

const Home = () => {

  const apartments = [
    {
      id: 'e1',
      image:'/images/home1.jpg',
      title:'Kayappatta House',
      location: 'Lose Angeles, New York, NY 10012',
      rent: '$350 per month',
      facility: '1-3 Beds',
      details: '1 Month Free Cat Friendly Fitness Center Pool Dishwasher Refrigerator Kitchen In Unit Washer & Dryer Walk-In Closets....',
      date: new Date(2020, 12, 8),
    },
    {
      id: 'e1',
      image:'/images/home1.jpg',
      title:'Kayappatta House',
      location: 'Lose Angeles, New York, NY 10012',
      rent: '$350 per month',
      facility: '1-3 Beds',
      details: '1 Month Free Cat Friendly Fitness Center Pool Dishwasher Refrigerator Kitchen In Unit Washer & Dryer Walk-In Closets....',
      date: new Date(2020, 12, 8),
    },
    
  ]

  const articles = [
    {
      id: 'e1',
      image:'/images/article1.jpg',
      title: 'Love Is Love',
      article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,......',
      author: 'Dr.Fayaz AP',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      image:'/images/article1.jpg',
      title: 'Love Is Love',
      article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam......',
      author: 'Dr.Fayaz AP',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      image:'/images/article1.jpg',
      title: 'Love Is Love',
      article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam......',
      author: 'Dr.Fayaz AP',
      date: new Date(2020, 9, 14),
    },
  ]
  
  const jobs =[
    {
    id: 'e1',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e3',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
]

  const addArticleHandler = articles => {
    console.log(articles);
  }

  return (
    <div>
      <Navbar />
      <div className='left_bar'>
          <h3>Trending Jobes</h3>
          <JobItems title={jobs[0].title} company={jobs[0].company} rating={jobs[0].rating} mode={jobs[0].mode} location = {jobs[0].location}
          amount = {jobs[0].amount} timing={jobs[0].timing} skills={jobs[0].skills} date ={jobs[0].date} />
          <JobItems title={jobs[1].title} company={jobs[1].company} rating={jobs[1].rating} mode={jobs[1].mode} location = {jobs[1].location}
          amount = {jobs[1].amount} timing={jobs[1].timing} skills={jobs[1].skills} date ={jobs[1].date} />
          <JobItems title={jobs[2].title} company={jobs[2].company} rating={jobs[2].rating} mode={jobs[2].mode} location = {jobs[2].location}
          amount = {jobs[2].amount} timing={jobs[2].timing} skills={jobs[2].skills} date ={jobs[2].date} />
      </div>

      <div className='middle_bar'>
          <h3>ARTICLES</h3>
          <NewArticle onAddArticle={addArticleHandler} />
          <Articles title ={articles[0].title} image={articles[0].image} article={articles[0].article} author={articles[0].author} date={articles[0].date} />
          <Articles title ={articles[1].title} image={articles[1].image} article={articles[1].article} author={articles[1].author} date={articles[1].date} />
          <Articles title ={articles[2].title} image={articles[2].image} article={articles[2].article} author={articles[2].author} date={articles[2].date} />
      </div>

      <div className='right_bar'>
          <h3>Apartments Nearby</h3>
          <Apartments image={apartments[0].image} title={apartments[0].title} location={apartments[0].location}
          rent={apartments[0].rent} facility ={apartments[0].facility} details={apartments[0].details} date={apartments[0].date} />
          <Apartments image={apartments[0].image} title={apartments[0].title} location={apartments[0].location}
          rent={apartments[0].rent} facility ={apartments[0].facility} details={apartments[0].details} date={apartments[0].date} />
      </div>


    </div>
  )
}

export default Home;
