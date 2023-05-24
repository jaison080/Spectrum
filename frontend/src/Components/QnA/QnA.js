import React, {useState} from 'react';
import './QnA.css';
import Recent_qn from './Recent_qn';
import Qns from './Qns';
import NewQn from './NewQn';

const Dummy_Recent_Qns = [
    {
        id: 'e1',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
    {
        id: 'e2',
        qn: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
    {
        id: 'e3',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
    {
        id: 'e4',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
    {
        id: 'e5',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
    {
        id: 'e1',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answered: false,
    },
]

const Dummy_Qns_list = [
    {
        id: 'e1',
        image: '/images/prof.png',
        solver: 'Maximilian',
        designation: 'Pride Member',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
        id: 'e2',
        image: '/images/prof.png',
        solver: 'Maximilian',
        designation: 'Pride Member',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
        id: 'e3',
        image: '/images/prof.png',
        solver: 'Maximilian',
        designation: 'Pride Member',
        qn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        answer: ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
]




const QnA = (props) => {

    const[recentQns, setRecentQns] = useState(Dummy_Recent_Qns);

    const addQnHandler = recentQns =>{
        setRecentQns((prevRecentQns) => {
            return [recentQns, ...prevRecentQns];
        })
    }

    const[qns, setQns] = useState(Dummy_Qns_list);


  return (
    <div>
      <div className='Recent_Qn'>
            <div className='heading_recent'><h3>Unanswered Questions</h3></div>
            <div className='recent_qn_list'>
                {recentQns.map((recentqn, index) => (
                    <Recent_qn qn={recentqn.qn} index={index}/>
                ))}
                
            </div>
            
      </div>
      <div className='Questions'>
            <div>
                <NewQn onAddQn={addQnHandler} />
            </div>
            {qns.map((qnssolved) => (
                    
                    <Qns id={qnssolved.id} image={qnssolved.image} solver = {qnssolved.solver} designation={qnssolved.designation} qn={qnssolved.qn}
                    answer={qnssolved.answer}/>
            ))}
      </div>
    </div>
  )
}

export default QnA
