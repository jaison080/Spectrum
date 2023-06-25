import React from 'react'
import './JobDetails.css'
import JobDate from './JobDate'

const JobDetails = (props) => {
  return (
    <div className='job_details_wrapper'>
      <div className='job_title'><h3>{props.title}</h3></div>
      <div className='job_company'>Company:<b>{props.company}</b></div>
      <div className='job_location'>Location:{props.location}</div>
      <div className='job_mode'>JobType:{props.jobType}</div>
      <div className='job_salary'>{props.amount}</div>
      <div className='job_description'>
        <div className='qualification'>Skill:{props.prerequisite.map(item => <div key={item}>{item}</div>)}</div>
        <div className='description'>description:{props.jobDesc}</div>
        <div className='skills'>{props.misc}</div>
        <div className='responsibilities'>Responsibilities:{props.responsibility.map(item => <div key={item}>{item}</div>)}</div>
        <div className='job_url'><a href={props.jobUrl}>Apply Here</a></div>
      </div>
      <div className='date'> {new Date(props.dateOfPosting).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
      })}</div>
    </div>
  )
}

export default JobDetails
