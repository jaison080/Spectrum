import React, { useState } from 'react';
import './Jobs.css';
import Navbar from '../Navbar';
import JobItems from './JobItems';
const DUMMY_JOBS = [
  {
    id: 'e1',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e3',
    title: 'Registrar Assistant',
    company: 'New York University',
    rating:'4.2',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
  },
  ]

const Jobs = () => {

  const[enteredJobs, setEnteredJobs] = useState(DUMMY_JOBS);

 

  return (
    <div>
        <Navbar />
        <div className='job_list_left_container'>
          <h3>Trending Jobs</h3>
          {enteredJobs.map((job)=>(
            <JobItems
            title={job.title} company={job.company} rating={job.rating} mode={job.mode} location = {job.location}
            amount = {job.amount} timing={job.timing} skills={job.skills} date ={job.date}  />
          ))}

      </div>
      <div className='new_job_form'>

      </div>
    </div>
  )
}

export default Jobs;
