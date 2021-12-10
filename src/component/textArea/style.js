import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  .input-class-text 
  {
    width: 95%;
    border:none;
    border-bottom:1px solid lightgrey;
  }
  .input-class-text-tri 
  {
    width: 95%;
    border:none;
    border-bottom:1px solid red;
  }
  .input-long-desc
  {
    width: 95%;
    border: 0.5px solid lightgray;
  }
  .input-long-desc-tri
  {
    width: 95%;
    border: 0.5px solid red !important;
  }
  textarea
  {
    height:30px !important;
    max-height:118px !important
  }
`;
