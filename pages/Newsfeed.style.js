import styled from "styled-components";
import { colors, shadow } from "../const/colors";

export const Container = styled.div`
  padding-top: 60px;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Aside = styled.aside`
  width: 240px;
`;

export const Newsfeed = styled.main`
  flex: 1;
  margin: 0 40px;
`;

export const StickySidebar = styled.div`
  height: 300px;
  background-color: ${colors.offwhite};
  box-shadow: ${shadow};
  border-radius: 5px;
  position: sticky;
  top: 60px;
  z-index: -1;
`;
