import styled from "styled-components";
import { colors, shadow } from "../const/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 380px;
  box-shadow: ${shadow};
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 2.4rem;
  line-height: 1.6;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${colors.main};
`;

export const Input = styled.input`
  border: unset;
  display: block;
  width: 100%;
  padding: 10px 15px;
  color: ${colors.secondary};
  background-color: ${colors.offwhite};
  margin-bottom: 10px;
  &::focus {
    box-shadow: unset;
    outline: unset;
  }
  border-radius: 5px;
`;

export const Button = styled.span`
  width: 100%;
  max-width: 320px;
  padding: 10px 15px;
  background-color: ${colors.cta};
  color: ${colors.offwhite};
  cursor: pointer;
  border: unset;
  display: inline-block;
  border-radius: 5px;
`;

export const Error = styled.p`
  color: red;
  margin: 1rem 0;
`;
