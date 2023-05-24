import React from 'react'
import './JobDetails.css'
import JobDate from './JobDate'

const JobDetails = (props) => {
  return (
    <div className='job_details_wrapper'>
      <div className='job_title'><h3>{props.title}</h3></div>
      <div className='job_company'><b>{props.company}</b></div>
      <div className='job_location'>{props.location}</div>
      <div className='job_mode'>{props.mode}</div>
      <div className='job_salary'>{props.amount}</div>
      <div className='job_description'>
        <div className='qualification'>{props.qualification}</div>
        <div className='description'>{props.description}</div>
        <div className='skills'>{props.skills}</div>
        <div className='responsibilities'>{props.responsibilities}</div>
      </div>
      <div className='date'><JobDate date={props.date}/></div>
    </div>
  )
}

export default JobDetails
