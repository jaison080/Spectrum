import React,{useState} from 'react';
import './Articles.css';
import JobDate from '../Jobs/JobDate';




const Articles = (props) => {
  const [showFullText, setShowFullText] = useState(false);

  const maxWordsToShow = 40; // or whatever maximum number of words you want to show initially
  const words = props.article.split(' ');
  const truncatedText = words.slice(0, maxWordsToShow).join(' ');

  
  const handleShowMoreClick = () => {
    setShowFullText(true);
  };

  if(!showFullText) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='article_wrapper'> 
        <div className='article'>
            
            <div className='image'><img src={props.image} alt='hi' className='img'></img></div>
            <div className='a_description'>
                <div className='a_title'>{props.title}</div>
                <div className='blog'> 
                <p>{truncatedText}</p>
                  {!showFullText && (
                    <button className='showmorebutton' onClick={handleShowMoreClick}>Show more</button>
                  )}
                  {showFullText && (<div className='.modal-overlay'>
                        <div><img src={props.image} alt='hi' className='modal_img'></img></div>
                        <div className='modal'>
                            <div className='a_title'>{props.title}</div>
                            <p>{props.article}</p>
                            <div className='author'>{props.author} </div>
                            <div className='a_date'><JobDate date={props.date} /> </div>
                        </div>
                  </div>
                  
                  )}
                  </div>
                  <div className='author'>{props.author} </div>
                  <div className='a_date'><JobDate date={props.date} /> </div>
                
                
            </div>
            
        </div>
    </div>
  )
}

export default Articles;
