import styled from "styled-components";

export const Form = styled.form`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: min-content;
  border-radius: 10px;
  
  > * {
    padding: 10px;
  }

  textarea {
    max-width: 100%;
    height: 100px;
  }

  input {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  > input[type="submit"] {
    padding: 5px;
    margin: 10px;
  }

  > label {
    display: flex;
    flex-direction: column;
  }
`;