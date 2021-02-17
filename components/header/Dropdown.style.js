import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  svg {
    path {
      fill: #ffffff;
    }
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: calc(100% + 5px);
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  width: 180px;
  padding: 5px;
  ${({ isOpen }) => (isOpen ? `display: block` : `display: none`)};
`;

export const DropdownItem = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 10px;
  p {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1e;
    color: #2b2922;
  }
  span {
    font-size: 12px;
    line-height: 1em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Status = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid blue;
  ${({ isRead }) => (isRead ? `opacity: 0` : `opacity: 1`)}
`;
