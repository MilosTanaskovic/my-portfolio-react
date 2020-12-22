import React from 'react'
// Styling
import styled from 'styled-components';
// import Dev Components
import Design from './Development/Design';
import Frontend from './Development/Frontend';
import Backend from './Development/Backend';
import Tools from './Development/Tools';

const Developments = (props) => {
 const { developement } = props;
 return (
  
  <Styled_Developments>
  {/** Design UX/UI Section */}
  {developement.designs && (
   developement.designs.map((design) => (
    <Design
     title={design.title}
     description={design.description}
     skills={design.skills}
    />
   ))
  )}

   {/** Frontend Section */}
    {developement.frontends.map((frontend) => (
     <Frontend
      title={frontend.title}
      description={frontend.description}
      skills={frontend.skills}
     />
    ))}
   {/** Backend Section */}
   {developement.backends.map((backend) => (
    <Backend
      title={backend.title}
      description={backend.description}
      skills={backend.skills}
    />
   ))}
   {/** Tool Section */}
   {developement.tools.map((tool) => (
    <Tools
     title={tool.title}
     description={tool.description}
     skills={tool.skills}
    />
   ))}
  </Styled_Developments>
 )
};

const Styled_Developments = styled.div`

`;

export default Developments
