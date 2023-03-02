import React from 'react';
import NewArticleForm from './NewArticleForm';

const NewArticle = (props) => {

    const saveArticleDataHandler = (enteredArticleData) =>{
        const articleData = {
            ...enteredArticleData,
            id: Math.random().toString(),
        }
        props.onAddArticle(articleData);
    }

  return (
    <div className='new_article'>
        <NewArticleForm onSaveArticleData = {saveArticleDataHandler} />
    </div>
  )
}

export default NewArticle
