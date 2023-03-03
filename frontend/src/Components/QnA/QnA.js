import React from 'react';
import Navbar from '../Navbar';
import './QnA.css';
import Recent_qn from './Recent_qn';
import Qns from './Qns';
import NewQn from './NewQn';

const Recent_Qns = [
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 'e1',
        qn: 'Qn:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
]

const Qns_list = [
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

    const addQnHandler = qns =>{
        console.log(qns);
    }

  return (
    <div>
      <Navbar />
      <div className='Recent_Qn'>
            <div className='heading_recent'><h3>Unanswered Questions</h3></div>
            <div className='recent_qn_list'>
            <Recent_qn qn={Recent_Qns[0].qn} />
            <Recent_qn qn={Recent_Qns[1].qn} />
            <Recent_qn qn={Recent_Qns[2].qn} />
            <Recent_qn qn={Recent_Qns[3].qn} />
            <Recent_qn qn={Recent_Qns[4].qn} />
            </div>
            
      </div>
      <div className='Questions'>
            <div>
                <NewQn onAddQn={addQnHandler} />
            </div>
            <Qns image={Qns_list[0].image} solver = {Qns_list[0].solver} designation={Qns_list[0].designation} qn={Qns_list[0].qn}
            answer={Qns_list[0].answer} />
            <Qns image={Qns_list[1].image} solver = {Qns_list[1].solver} designation={Qns_list[1].designation} qn={Qns_list[1].qn}
            answer={Qns_list[1].answer} />
            <Qns image={Qns_list[2].image} solver = {Qns_list[2].solver} designation={Qns_list[2].designation} qn={Qns_list[2].qn}
            answer={Qns_list[2].answer} />
      </div>
    </div>
  )
}

export default QnA
