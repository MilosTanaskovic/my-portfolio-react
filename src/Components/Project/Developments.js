import React from 'react'
import styled from 'styled-components';
// import Dev Components
import Design from './Development/Design';

const Developments = (props) => {
 const { developement } = props;
 return (
  <Styled_Developments>
   {developement.designs.map((design) => (
    <Design
     title={design.title}
     description={design.description}
     skills={design.skills}
    />
   ))}
  </Styled_Developments>
 )
};

const Styled_Developments = styled.div`

`;

export default Developments
