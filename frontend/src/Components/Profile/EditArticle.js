import React, {useState} from 'react'

const EditArticle = (props) => {

  return (
    <div>
      <form>
        <div className='title'>
          <input type='text' placeholder='Title' value={props.title} onChange={(e) => props.setTitle(e.target.value)}></input>
        </div>
        <div className='content'>
          <textarea type='text' placeholder='Content' value={props.content} onChange={(e) => props.setContent(e.target.value)}></textarea>
        </div>
        <div className='tags'>
          <input type='text' placeholder='Tags' value={props.tags} onChange={(e) => props.setTags(e.target.value)}></input>
        </div>
        <div className='image'>
          <input type='text' placeholder='Image' value={props.image} onChange={(e) => props.setImage(e.target.value)}></input>
        </div>
      </form>
    </div>
  )
}

export default EditArticle
