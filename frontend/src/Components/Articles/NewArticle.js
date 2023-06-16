import React, {useState} from 'react';
import NewArticleForm from './NewArticleForm';
import'./NewArticle.css'
import Button from '../UI/Button';

const NewArticle = (props) => {

  const [isEditing, setIsEditing] = useState(false);

    const saveArticleDataHandler = (enteredArticleData) =>{
        const articleData = {
            ...enteredArticleData,
            id: Math.random().toString(),
        }
        props.onAddArticle(articleData);
        setIsEditing(false);
    
    }

    const startEditingHandler = () =>{
      setIsEditing(true);
    }

    const stopEditingHandler = () => {
      setIsEditing(false);
    }

  return (
    <div className='new_article'>
      
        {!isEditing && <button onClick={startEditingHandler} className='new_article_btn'>+</button>}
        {isEditing && (
          <div className="new_article_form_modal"><div className="new_article_form_content">
        <NewArticleForm onSaveArticleData = {saveArticleDataHandler}  onCancel ={stopEditingHandler}/>
        </div></div>   
        )}
    </div>
  )
}

export default NewArticle
