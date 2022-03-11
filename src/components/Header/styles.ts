import styled from 'styled-components';

export const Container = styled.header`
  background: #5429cc;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #fff;
    background: #6933ff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.5s ease;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

