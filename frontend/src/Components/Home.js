import React, {useState} from 'react';
import Navbar from './Navbar';
import './Home.css';
import JobItems from './Jobs/JobItems';
import Articles from './Articles/Articles';
import Apartments from './Apartments/Apartments';
import NewArticle from './Articles/NewArticle';

const dummy_articles = [
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

const dummy_jobs =[
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

  
  
  

  const[articles, setArticles] = useState(dummy_articles);
  const[enteredJobs, setEnteredJobs] = useState(dummy_jobs);


  const addArticleHandler = articles => {
    setArticles((prevArticles)=>{
      return [articles, ...prevArticles];
    })
  }

  return (
    <div>
      <Navbar />
      <div className='left_bar'>
          <h3>Trending Jobs</h3>
          {enteredJobs.map((job)=>(
            <JobItems
            title={job.title} company={job.company} rating={job.rating} mode={job.mode} location = {job.location}
            amount = {job.amount} timing={job.timing} skills={job.skills} date ={job.date} />
          ))}
      </div>


      <div className='middle_bar'>
          <h3>ARTICLES</h3>
          <NewArticle onAddArticle={addArticleHandler} className='new_article_button'/>
          {articles.map((article)=>(
            <Articles
            title ={article.title} image={article.image} article={article.article} author={article.author} date={article.date} />
          ))}
          
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
