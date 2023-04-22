import React,{useState} from 'react';
import './NewArticleForm.css';

const NewArticleForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredArticle, setEnteredArticle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [imageFile, setImageFile] = useState(null);


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

    const imageChangeHandler = (event) => {
        setImageFile(event.target.files[0])
    }

    const articleSubmitHandler = (event) => {
        event.preventDefault();

        const articleData={
            title: enteredTitle,
            article: enteredArticle,
            author: enteredAuthor,
            date: new Date(enteredDate),
            image: URL.createObjectURL(imageFile),
        }

        props.onSaveArticleData(articleData);
        setEnteredTitle('');
        setEnteredArticle('');
        setEnteredAuthor('');
        setEnteredDate('');
    }

  return (
    <div>
      <form onSubmit={articleSubmitHandler} className='new_article_form'>
        <div className='newFormControls'>
            <div>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle} placeholder='Title' className='newFormControl'></input>
            </div>
            <div>
                <textarea type='text' onChange={articleChangeHandler} value={enteredArticle} placeholder='Article' className='newFormArticle'></textarea>
            </div>
            <div>
                <input type='file' onChange={imageChangeHandler}  placeholder='image' className='newFormControl'></input>
            </div>
            <div>
                <input type='text' onChange={authorChangeHandler} value={enteredAuthor} placeholder='Author' className='newFormControl'></input>
            </div>
            <div>
                <input type='date' onChange={dateChangeHandler} value={enteredDate} placeholder='date' className='newFormdateControl'></input>
            </div>
            
            <div className='article_submission'>
            <button type='button' onClick={props.onCancel}>Cancel</button> <button type='submit'>Submit</button>
            </div>
            
        </div>
      </form>
    </div>
  )
}

export default NewArticleForm
