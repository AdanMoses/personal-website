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
    resize: none;
    :focus {
      outline: none;
      border-color: #6c63ff;
    }
  }

  input {
    margin-top: 5px;
    margin-bottom: 5px;
    :focus {
      outline: none;
      border-color: #6c63ff;
    }
  }
  
  > input[type="submit"] {
    padding: 5px;
    margin: 10px;
  }

  > label {
    display: flex;
    flex-direction: column;
  }

  span {
    color: red;
  }
`;