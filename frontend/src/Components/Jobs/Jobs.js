import React, { useState } from 'react';
import './Jobs.css';
import JobItems from './JobItems';
import JobDetails from './JobDetails';
const DUMMY_JOBS = [
  {
    id: 'e1',
    title: 'Registrar Assistant',
    company: 'New York University',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
    qualification: 'BE/Btech',
    description:'We are looking for an HR Recruiter to manage our full cycle recruitment, from identifying potential hires to interviewing and evaluating candidates.HR Recruiter responsibilities include sourcing candidates online, updating job ads and conducting background checks. If you have experience with various job interview formats, including phone screenings and group interviews, and can help us recruit faster and more effectively.Ultimately, you will play an important part in building a strong employer brand for our company to ensure we attract, hire and retain the most qualified employees.',
    responsibilities: "Design and update job descriptions. \n Source potential candidates from various job portals.\nCraft recruiting emails to attract passive candidates. \n Screen incoming resumes and application forms, \n Advertise job openings on company’s careers page, social media, job boards and internally. \n Provide shortlists of qualified candidates to hiring managers. \n Collaborate with managers to identify future hiring needs.\n Act as a consultant to new hires and help them onboard"
  },
  {
    id: 'e2',
    title: 'Registrar Assistant',
    company: 'New York University',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
    qualification: 'BE/Btech',
    description:'We are looking for an HR Recruiter to manage our full cycle recruitment, from identifying potential hires to interviewing and evaluating candidates.HR Recruiter responsibilities include sourcing candidates online, updating job ads and conducting background checks. If you have experience with various job interview formats, including phone screenings and group interviews, and can help us recruit faster and more effectively.Ultimately, you will play an important part in building a strong employer brand for our company to ensure we attract, hire and retain the most qualified employees.',
    responsibilities: "Design and update job descriptions. \n Source potential candidates from various job portals.\nCraft recruiting emails to attract passive candidates. \n Screen incoming resumes and application forms, \n Advertise job openings on company’s careers page, social media, job boards and internally. \n Provide shortlists of qualified candidates to hiring managers. \n Collaborate with managers to identify future hiring needs.\n Act as a consultant to new hires and help them onboard"
  },
  {
    id: 'e3',
    title: 'Registrar Assistant',
    company: 'New York University',
    mode:'hybrid',
    location:'New York',
    amount: 94.12,
    timing:'full-time',
    skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
    date: new Date(2020, 7, 14),
    qualification: 'BE/Btech',
    description:'We are looking for an HR Recruiter to manage our full cycle recruitment, from identifying potential hires to interviewing and evaluating candidates.HR Recruiter responsibilities include sourcing candidates online, updating job ads and conducting background checks. If you have experience with various job interview formats, including phone screenings and group interviews, and can help us recruit faster and more effectively.Ultimately, you will play an important part in building a strong employer brand for our company to ensure we attract, hire and retain the most qualified employees.',
    responsibilities: "Design and update job descriptions. \n Source potential candidates from various job portals.\nCraft recruiting emails to attract passive candidates. \n Screen incoming resumes and application forms, \n Advertise job openings on company’s careers page, social media, job boards and internally. \n Provide shortlists of qualified candidates to hiring managers. \n Collaborate with managers to identify future hiring needs.\n Act as a consultant to new hires and help them onboard"
  },
  ]

const Jobs = (props) => {

  const[enteredJobs, setEnteredJobs] = useState(DUMMY_JOBS);
  const [detailsMore,setDetailsMore] = useState(false);

  const seeDetailsHandler = () => {
    setDetailsMore(true)
  };

 

  return (
    <div>
        <div className='job_list_left_container'>
          <h3>Trending Jobs</h3>
          {enteredJobs.map((job)=>(
            <JobItems onSeeMore = {seeDetailsHandler}
            key = {job.id}
            title={job.title} company={job.company} mode={job.mode} location = {job.location}
            amount = {job.amount} timing={job.timing} skills={job.skills} date ={job.date}  />
          ))}

      </div>
        <div className='job_details'>
            {detailsMore && <JobDetails 
            title={DUMMY_JOBS[0].title} company={DUMMY_JOBS[0].company} mode={DUMMY_JOBS[0].mode} location = {DUMMY_JOBS[0].location}
            amount = {DUMMY_JOBS[0].amount} timing={DUMMY_JOBS[0].timing} skills={DUMMY_JOBS[0].skills} date ={DUMMY_JOBS[0].date} qualification={DUMMY_JOBS[0].qualification} 
            description = {DUMMY_JOBS[0].description} responsibilities = {DUMMY_JOBS[0].responsibilities} />}
        </div>
    </div>
  )
}

export default Jobs;
