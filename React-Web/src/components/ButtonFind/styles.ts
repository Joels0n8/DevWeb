import styled from "styled-components";

export const Container = styled.div`
    header{
        display: inline;
        
        input{
           width: 400px;
           padding: 0 1.5rem;
           height: 3rem;
           border-radius: 0.25rem;
           margin-right: 1rem;
   
           border: 1px solid #d7d7d7;
           background: filter(brightness(0.9)) ;
   
           font-weight: 400;
           font-size: 1rem;
   
           &::placeholder{
               color: var(--text-body);
           }
           /* & + input{
               margin-top: 1rem;
           } */
       }
       button{
          font-size: 1rem;
          color: #505050;
          background: var(--ice-white);
           border-radius: 0.25rem;
          
          transition: filter 0.2s;
      }
    }
`