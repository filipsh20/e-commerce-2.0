import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  height: 600px;
  width: 800px;
`;

export const Left = styled.div`
  flex: 1;

  @media screen and (max-width: 850px) {
    flex: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  border: 1px solid black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Controller = styled.div`
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  margin-left: 8em;
`

export const Input = styled.input`

`

export const Button = styled.button`
  height: 100px;
`