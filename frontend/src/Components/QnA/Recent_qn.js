import React from 'react'

const Recent_qn = (props) => {
  return (
    <div className='recent_qn_wrapper'>
        <div className='recent_qn_list'>
            <div className='qn_description'>{props.qn}</div>
        </div>
    </div>
  )
}

export default Recent_qn
