import styled from "styled-components"

export const StyledMainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  border: 1px solid black;
  border-radius: 5px;

  .answer-content {
    margin-bottom: 1rem;
  }

  .answer-item {
    padding: 2rem;
    text-align: center;
    transition: background 0.1s;

    &:hover {
      background: grey;
    }
  }
`
