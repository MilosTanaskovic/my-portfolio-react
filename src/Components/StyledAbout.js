import styled from "styled-components";
import { motion } from "framer-motion";

export const Styled_About = styled(motion.div)`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
 @media (max-width: 1100px){
    display: block;
    padding: 2rem 2rem;
    font-size: center;
  }
`;
export const Styled_Description = styled.div`
 flex: 1;
 padding-right: 5rem;
 z-index: 2;
 h2{
  font-weight:lighter;
 }
 @media (max-width: 1300px){
  padding: 0;
  button {
    margin: 2rem 0rem 5rem 0rem;
  }
  }
`;
export const Styled_Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export const Styled_Hide = styled.div`
 overflow: hidden;
`;
// export const Styled_About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
//   @media (max-width: 1300px) {
//     display: block;
//     padding: 2rem 2rem;
//     text-align: center;
//   }
// `;
// export const Styled_Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   z-index: 2;
//   h2 {
//     font-weight: lighter;
//   }
//   @media (max-width: 1300px) {
//     padding: 0;
//     button {
//       margin: 2rem 0rem 5rem 0rem;
//     }
//   }
// `;
// export const Styled_Image = styled.div`
//   z-index: 2;
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// export const Styled_Hide = styled.div`
//   overflow: hidden;
// `;