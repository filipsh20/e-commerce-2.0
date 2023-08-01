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

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  @media screen and (max-width: 850px) {
    flex: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 80%;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
`;
