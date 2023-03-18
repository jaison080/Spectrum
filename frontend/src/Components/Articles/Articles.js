import React,{useState} from 'react';
import './Articles.css';
import JobDate from '../Jobs/JobDate';
import Button from '../UI/Button';
// import Overlay from '../UI/Overlay';


const Articles = (props) => {
  const [readMore, setReadMore] = useState('');
  const readMoreHandler = () => {
    setReadMore()
  }
  return (
    <div className='article_wrapper'> 
        <div className='article'>
            {/* <Overlay /> */}
            <div className='image'><img src={props.image} alt='hi' className='img'></img> </div>
            <div className='a_description'>
                <div className='a_title'>{props.title}</div>
                <div className='blog'>{props.article} 
                      <button className='blog_btn' type='submit' onClick={readMoreHandler} >Read More..</button>
                </div>
                <div className='author'>{props.author} </div>
                <div className='a_date'><JobDate date={props.date} /> </div>
            </div>
            
        </div>
    </div>
  )
}

export default Articles;
