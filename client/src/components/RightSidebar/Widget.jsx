import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.png'
import pen from '../../assets/pen.png'
import stackoverflow from '../../assets/stack-overflow1.png'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <img src={pen} alt='pen' width='18' />
           <p>Observability is the key of the future<br /> of software (and your DevOps carrer)</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={comment} alt='comment' width='18' />
           <p>Podcast 374 : How valuable is your screen<br />name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <img src={comment} alt='comment' width='18' />
           <p>Review queue workflow - Final release</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={comment} alt='comment' width='18' />
           <p>Please welcome Valued Associate: #958<br />-V2Blast #959 - SpencerG</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img style={{marginRight:'px'}}src={stackoverflow} alt='stackoverflow' width='18' />
           <p>Outdated Answers: accepted answers is<br />now unpinned on Stack Overflow</p>
        </div>
      </div>
      <h4>Hot Meta Post</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <p>38</p>
           <p>Why was this spam flag declined, Yet<br />the question marked as spam</p>
        </div>
        <div className='right-sidebar-div-2'>
           <p>20</p>
           <p>What is the best course of action when<br />a user has high enough rep to...</p>
        </div>
        <div className='right-sidebar-div-2'>
           <p>14</p>
           <p>Is a link to the "How to ask" help page a<br />useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
