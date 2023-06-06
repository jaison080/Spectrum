import React, {useState, useEffect} from 'react';
import './Qns.css';

const Qns = (props) => {

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [reported, setReported] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComments] = useState([]);
const [showComments, setShowComments] = useState(false);

const handleAddComment = (comment) => {
  setComments([...comments, comment]);
};

const handleShowComments = () => {
  setShowComments(true);
};

const handleHideComments = () => {
  setShowComments(false);
}

  const token = localStorage.getItem('token');
  
  const handleLike = async() => {
    try {
      const response = await fetch(`http://localhost:5000/api/qna/likeQuestion/${props.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ likes: liked ? likes - 1 : likes + 1,id:props.id }),
      });
      if (response.ok) {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
      } else {
        console.error('Error updating likes');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/comment/${props.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        }
      });
      const data = await response.json();  
      setLoadComments(data); 
    } catch (error) {
      console.error(error);   
    }
  }
  
  useEffect(() => {
    fetchComments();
  }, []);
  
  const commentSubmitHandler = async(event)=> { 
    event.preventDefault(); 
    const comment = event.target.comment.value;
    const content = comment;
    try {
      const response = await fetch(`http://localhost:5000/api/qna/answer/${props.answer_id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
  
        },
        body: JSON.stringify({ content, id:props.id }),
      });
  
      if (response.ok) {
        // Comment added successfully
        setComments([...comments, comment]);
        console.log('Comment added successfully');
      } else {
        // Handle error case
        console.error('Error adding comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  }
  
  const handleReport = (e) => {
    e.preventDefault();
    setReported(true);
  };

  return (
    <div>
          <div>
            <div className='qn_wrapper' id={props.id}>
              {/* <div><img src={props.image} alt='profile' className='answer_img' /></div> */}
              <div className='solver_identity'> 
                  <div className='solver'>{props.solver}</div>
                  {/* <div className='solver_designation'>{props.designation}</div> */}
              </div>
              <div className='qn_title'>{props.title} </div>
              <div className='qn_answering' >{props.qn}? </div>
              <div className='topics'>{props.topics} </div>
              <div className='answer'>{props.answer} </div>
              <div className='qn_likes'>{props.likes} </div>
              <div className='likes'>Likes: {likes}
                <button className='likebutton' onClick={handleLike}>
                  {liked ? 'Dislike' : 'Like'}
                </button>
              </div>
              <div className='comments'>
                    {!showComments && (
                      <button className='viewcommentsbutton' onClick={handleShowComments}>
                        View Comments
                      </button>
                    )}
                    {showComments && ( <>
                      <button className='viewcommentsbutton' onClick={handleHideComments}>
                      Hide Comments
                    </button> 
                      {loadComments.map((commentGroup) => (
                        <div key={commentGroup._id}>
                          {commentGroup.comments.map((comment) => (
                            <div key={comment._id}>
                              <div>Content: {comment.content}</div>
                              <div>Created At: {comment.createdAt}</div>
                              <div>Commenter: {comment.commenter}</div>
                            </div>
                          ))}
                        </div>
                      ))}
                      </>
                    )}
              </div>
              {/* {comments.map((comment, index) => ( <div key={index}>{comment}</div> ))} */}
              <form className='addComment' onSubmit={commentSubmitHandler}>
                <input type='text' name='comment' placeholder='Add a comment'></input>
                <button type='submit'>Comment</button>
              </form>
              <div className='report_qn_details'>
                <form onSubmit={handleReport}>
                    <input name='report-message' className='report_qn' placeholder='Report Message' value={reportMessage} onChange={(e) => setReportMessage(e.target.value)}></input>
                    <button type='submit'>Report</button>
                </form>
              </div>
              {reported && (
                <div className='reported'>
                  This {props.type} has been reported with the following message: {reportMessage}
                </div>
              )}
            </div>
          </div>
    </div>
  )
}

export default Qns
