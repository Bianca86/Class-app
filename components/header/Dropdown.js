import React, { useState } from "react";
import {
  Container,
  DropdownList,
  DropdownItem,
  Img,
  Content,
  Status,
} from "./Dropdown.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ icon, elements }) => {
  const [items, setItems] = useState(elements);
  const [isOpen, setIsopen] = useState(false);

  function setReadStatus(index) {
    const changedState = items.map((item, i) => {
      if (index === i) {
        return (item = {
          ...item,
          read: true,
        });
      } else {
        return item;
      }
    });
    setItems(changedState);
  }

  return (
    <Container>
      <FontAwesomeIcon icon={icon} onClick={() => setIsopen(!isOpen)} />
      <DropdownList isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() => setReadStatus(index)}>
            <Img src={item.avatar} />
            <Content>
              <p>{item.fullName}</p>
              <spam>{item.content.substring(0, 10) + ".."}</spam>
            </Content>
            <Status isRead={item.read} />
          </DropdownItem>
        ))}
      </DropdownList>
    </Container>
  );
};

export default Dropdown;
