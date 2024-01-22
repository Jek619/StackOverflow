import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   votes: 1,
  //   noOfAnswers: 2,
  //   questionTitle: "What is function?",
  //   questionBody: "It mesnt to be",
  //   questionTags: ["java", "node js", "node js", "mongobd"],
  //   userPosted: "jishnu",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'vishnu',
  //     answeredOn: "jan2",
  //     userId: 2,
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "What is function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["R", "python", "javascript"],
  //   userPosted: "rafiya",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'vishnu',
  //     answeredOn: "jan12",
  //     userId: 2,
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 1,
  //   downVotes: 2,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "What is function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["R", "python", "javascript"],
  //   userPosted: "Elon",
  //   userId: 3,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'vishnu',
  //     answeredOn: "jan2",
  //     userId: 2,
  //   }]
  // }]
    
    const checkAuth = () =>{
      if(user === null){
        navigate('/Auth')
      }
      else{
        navigate('/AskQuestion')
      }
    }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionsList.data.length } questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
