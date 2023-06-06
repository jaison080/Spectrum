import React,{useState} from 'react';
import './NewArticleForm.css';

const NewArticleForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredArticle, setEnteredArticle] = useState('');
    const [imageFile, setImageFile] = useState(null);


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const articleChangeHandler = (event) => {
        setEnteredArticle(event.target.value);
    }

    const imageChangeHandler = (event) => {
        setImageFile(event.target.files[0]);
      };

    const articleSubmitHandler = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', enteredTitle);
        formData.append('content', enteredArticle);
        formData.append('image', imageFile);

        props.onSaveArticleData(formData);
        setEnteredTitle('');
        setEnteredArticle('');
        const token = localStorage.getItem('token');
  
        try {
          const response = await fetch('http://localhost:5000/api/blogs/create', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            //   'Content-Type': `multipart/form-data`
            },
            body: formData,
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);

          } else {
            const errorText = await response.text();
            console.error('Error:', errorText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
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
            <input
              type='file'
              onChange={imageChangeHandler}
              placeholder='image'
              className='newFormControl'
              accept='image/*'
            />
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
