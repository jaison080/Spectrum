import React,{useState} from 'react';
import './NewArticleForm.css';

const NewArticleForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredArticle, setEnteredArticle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const articleChangeHandler = (event) => {
        setEnteredArticle(event.target.value);
    }
    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const articleSubmitHandler = (event) => {
        event.preventDefault();

        const articleData={
            title: enteredTitle,
            article: enteredArticle,
            author: enteredAuthor,
            date: new Date(enteredDate),
        }

        props.onSaveArticleData(articleData);
        setEnteredTitle('');
        setEnteredArticle('');
        setEnteredAuthor('');
        setEnteredDate('');
    }

  return (
    <div>
      <form onSubmit={articleSubmitHandler}>
        <div className='newFormControls'>
            <div className='newFormControl'>
                <label>Title: </label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle} ></input>
            </div>
            <div className='newFormControl'>
                <label>Article:</label>
                <textarea type='text' onChange={articleChangeHandler} value={enteredArticle}></textarea>
            </div>
            <div className='newFormControl'>
                <label>Author:</label>
                <input type='text' onChange={authorChangeHandler} value={enteredAuthor} ></input>
            </div>
            <div className='newFormControl'>
                <label>Date:</label>
                <input type='date' onChange={dateChangeHandler} value={enteredDate} ></input>
            </div>
            <div className='article_submission'>
                <button type='submit'>Submit</button>
            </div>
            
        </div>
      </form>
    </div>
  )
}

export default NewArticleForm
