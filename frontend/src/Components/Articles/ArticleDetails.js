import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {

    const params = useParams();

  return (
    <div>
       Article ID: {params.blogId}
    </div>
  )
}

export default ArticleDetails
