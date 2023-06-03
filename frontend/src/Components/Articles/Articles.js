import React, { useState } from 'react';
import './Articles.css';
import JobDate from '../Jobs/JobDate';

const Articles = (props) => {
const [showFullText, setShowFullText] = useState(false);
const [likes, setLikes] = useState(0);
const [liked, setLiked] = useState(false);
const [comments, setComments] = useState([]);
const [reported, setReported] = useState(false);
const [reportMessage, setReportMessage] = useState('');

const handleAddComment = (comment) => {
  setComments([...comments, comment]);
};

const handleLike = () => {
  if (liked) {
    setLiked(false);
    setLikes(likes - 1);
  } else {
    setLiked(true);
    setLikes(likes + 1);
  }
};

const maxWordsToShow = 40; // or whatever maximum number of words you want to show initially
// const words = props.article.split(' ');
// const truncatedText = words.slice(0, maxWordsToShow).join(' ');

const handleShowMoreClick = () => {
  setShowFullText(true);
  document.body.style.overflow = 'hidden';
};

const handleCloseModal = () => {
  setShowFullText(false);
  document.body.style.overflow = 'initial';
};

const handleReport = (e) => {
  e.preventDefault();
  setReported(true);
};

return (
  <div className='article'>
    <div className='image'>
      <img src={props.image} alt='hi' className='img'></img>
    </div>
    <div className='a_description'>
      <div className='a_title'>{props.title}</div>
      <div className='blog'>
          {/* <p>{truncatedText}</p> */}
          {!showFullText && (
              <button className='showmorebutton' onClick={handleShowMoreClick}>
              Show more
              </button>
          )}
          {showFullText && (
              <div className='modal'>
                <div className='modal_content'>
                  <span className='close' onClick={handleCloseModal}>
                    ×
                  </span>
                  <img src={props.image} alt='hi' className='modal_img'></img>
                  <div className='a_title'>{props.title}</div>
                  <p className='modal_blog'>{props.article}</p>
                  <div className='author'>{props.author} </div>
                  <div className='likes'>Likes: {likes}</div>
                  <button className='likebutton' onClick={handleLike}>
                    {liked ? 'Dislike' : 'Like'}
                  </button>
                  <div className='comments'>
                    {comments.map((comment, index) => (
                      <div key={index}>{comment}</div>
                    ))}
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); handleAddComment(e.target.comment.value); }}>
                    <input type='text' name='comment' placeholder='Add a comment'></input>
                    <button type='submit'>Comment</button>
                  </form>
                  <form onSubmit={handleReport}>
                    <div>
                      <input name='report-message' placeholder='Report Message' value={reportMessage} onChange={(e) => setReportMessage(e.target.value)}></input>
                      <button type='submit'>Report</button>
                    </div>
                    
                  </form>
                  {reported && (
                    <div className='reported'>
                      This article has been reported with the following message: {reportMessage}
                    </div>
                  )}
                </div>
              </div>
          )}
</div>


      <div className='author'>{props.author} </div>
      <div className='a_date'>
          <JobDate date={props.date} />{' '}
      </div>
    </div>
  </div>
);
};

export default Articles;