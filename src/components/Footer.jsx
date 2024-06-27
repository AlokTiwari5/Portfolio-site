import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiTwotoneCreditCard,
} from "react-icons/ai";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <SocialLinks>
        <Link href="mailto:aloktiwari7880@gmail.com">
          <AiOutlineMail />
        </Link>
<Link href="https://github.com/AlokTiwari5" target="_blank">
          <AiOutlineGithub />
        </Link        >
        <Link
          href="https://www.linkedin.com/in/aloktiwari-developer/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link href="https://leetcode.com/u/AlokTiwari_5/" target="_blank">
          <AiTwotoneCreditCard />
        </Link>
      </SocialLinks>
      <Credits>Designed & Built by &copy; Alok</Credits>
    </Container>
  );
}

export default Footer;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  font-size: 30px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    transform: scale(1.5);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Credits = styled.div`
  font-size: 12px;
`;
