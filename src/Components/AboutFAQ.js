import React from 'react'
// import srtyled
import styled from 'styled-components';
import { Styled_About } from './StyledAbout';

const AboutFAQ = () => {
 return (
  <Styled_FAQ>
   <h2>Any question <span>FAQ</span></h2>
   <div className="question">
    <h4>How Do I Start?</h4>
    <div className="answer">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
    </div>
    <div className="faq-line"></div>
   </div>
   <div className="question">
    <h4>Daily Schedule</h4>
    <div className="answer">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
    </div>
    <div className="faq-line"></div>
   </div>
   <div className="question">
    <h4>My Work experince</h4>
    <div className="answer">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
    </div>
    <div className="faq-line"></div>
   </div>
   <div className="question">
    <h4>What product do you offer.</h4>
    <div className="answer">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
    </div>
   </div>
  </Styled_FAQ>
 )
}

const Styled_FAQ = styled(Styled_About)`
 display: block;
 span {
  display: block;
 }
 h2{
  padding-bottom: 2rem;
  font-weight: lighter;
 }
 .faq-line{
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
 }
 .question{
  padding: 3rem 0rem;
  cursor: pointer;
 }
 .answer{
  padding: 2rem 0rem;
  p{
   padding: 1rem 0rem;
  }
 }
`;

export default AboutFAQ
