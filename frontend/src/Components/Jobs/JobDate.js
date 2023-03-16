import React from 'react';

const JobDate = (props) => {

    const month = props?.date?.toLocaleString('en-US', {month: 'long'});
    const day = props?.date?.toLocaleString('en-US', {day: '2-digit'});
    const year = props?.date?.getFullYear();
  return (
    <div>
      {month} {day} {year}
    
    </div>
  )
}

export default JobDate;
