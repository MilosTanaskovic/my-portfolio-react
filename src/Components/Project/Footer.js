import React from 'react'
import styled from 'styled-components';

const Footer = (props) => {
 const { FontAwesomeIcon, faCopyright, faTrademark } = props
 return (
  <Styled_Footer>
   <p>Copyright 
    <FontAwesomeIcon icon={faCopyright}/>  
    2020 * Stockholm, Sweden 
    <FontAwesomeIcon icon={faTrademark}/> 
    Dancing With The React | Powered by @codedancing</p>
  </Styled_Footer>
 )
};

const Styled_Footer = styled.div`
  text-align: center;
`;

export default Footer
