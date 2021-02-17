import styled from "styled-components";
import { colors } from "../../const/colors";

export const Header = styled.header`
  background-color: ${colors.main};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 5px 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
`;

export const MenuToggle = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    width: 50%;
  }
`;

export const Logo = styled.div`
  width: 50%;
  img {
    display: block;
    border-radius: 50%;
  }
`;

export const Nav = styled.nav`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
