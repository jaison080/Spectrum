import React, {useState,useEffect} from 'react';
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
    const [qnaDetails, setQnaDetails] = useState([]);

    const addQnHandler = recentQns =>{
        setRecentQns((prevRecentQns) => {
            return [recentQns, ...prevRecentQns];
        })
    }

    const[qns, setQns] = useState(Dummy_Qns_list);
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetchQnA();
    }, []);

    const fetchQnA = async () => {
        try {
        const response = await fetch('http://localhost:5000/api/qna//getAllAnsweredQuestions', {
                method: 'GET',
                headers: {
                Authorization: `Bearer ${token}`,
                },
        });
        if (response.ok) {
            const data = await response.json();
            setQnaDetails(data);
        } else {
            console.error('Error:', response.status);
        }
        } catch (error) {
        console.error('Error:', error);
        }
    };


  return (
    <div>
      <div className='Recent_Qn'>
            <div className='heading_recent'><h3>Unanswered Questions</h3></div>
            <div className='recent_qn_list'>
                {recentQns.map((recentqn) => (
                    <Recent_qn qn={recentqn.content} key={recentqn._id}/>
                ))}
                
            </div>
            
      </div>
      <div className='Questions'>
            <div>
                <NewQn onAddQn={addQnHandler} />
            </div>
            {qnaDetails.map((details) => (          
                    <Qns id={details._id} solver = {details.answers.map((ans) => (ans.answerer))} qn={details.content}
                    answer={details.answers.map((ans) => (ans.content))} topics={details.topics} title={details.title} likes={details.likes}/>
            ))}
      </div>
    </div>
  )
}

export default QnA
