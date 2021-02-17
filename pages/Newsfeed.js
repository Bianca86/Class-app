import React, { useState, useEffect } from "react";
import { Container, Aside, Newsfeed, StickySidebar } from "./Newsfeed.style";
import { data } from "../data/data";
import Post from "../components/post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const NewsfeedPage = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    setPost(data.posts);
  }, []);

  return (
    <Container>
      <Aside>
        <StickySidebar>Left</StickySidebar>
      </Aside>
      <Newsfeed>
        {posts.map((post, index) => (
          <Post key={index} postData={post} />
        ))}
      </Newsfeed>
      <Aside>
        <StickySidebar>Right</StickySidebar>
      </Aside>
    </Container>
  );
};

export default NewsfeedPage;
