import styled from 'styled-components'

export const StyledLogin = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding: 0 30px;
  
  form {
    width: 100%;
    max-width: 400px;
    border: 1px solid lightgray;
    border-radius: 30px;
    padding: 40px 20px;
    
    .fieldBox {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      width: 100%;
      
      label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      
      span {
        font-size: 0.7rem;
        color: orangered;
        width: 100%;
      }
      
      input {
        outline: none;
        border: 1px solid dimgray;
        padding: 7px;
        border-radius: 10px;
        transition: .1s;
        
        &:focus {
          border: 1px solid deepskyblue;
        }
      }
    }

    button {
      outline: none;
      border-radius: 30px;
      background: #3588d3;
      padding: 10px 20px;
      border: 0;
      color: white;
      cursor: pointer;
      transition: .1s;

      &:hover {
        color: lightgray;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`