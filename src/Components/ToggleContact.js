import React,{useState} from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';

const ToggleContact = (props) => {
 const {children, title} = props;
 const [toggle, setToggle] = useState(false);
 return (
  <motion.div layout onClick={() => setToggle(!toggle)}>
   <Styled_H2 layout>{title}</Styled_H2>
   { toggle ? children : ''}
  </motion.div>
 )
};

const Styled_H2 = styled(motion.h2)`
 cursor: grab;
`;

export default ToggleContact
