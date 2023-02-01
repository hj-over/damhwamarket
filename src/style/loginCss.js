import styled from "@emotion/styled";
const LoginDiv = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  h1 {
    margin-top: 50px;
    color: #ffbe00;
    font-weight: 800;
    font-size: 25px;
    text-align: center;
  }
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 20px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: #ffbe00;
      color: #fff;
      margin-bottom: 15px;
      border: 1px solid #fff;
      &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
      }
    }
  }
`;
export default LoginDiv;
