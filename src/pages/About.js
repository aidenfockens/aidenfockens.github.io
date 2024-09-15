import React from 'react';
import { PageContainer, LeftContainer, RightContainer, ImageContainer, CaptionContainer, IntroText, NameText } from '../components/Styles';

function About() {
    return(
    <PageContainer>
    <LeftContainer>
    <IntroText>Hi! I'm</IntroText>
    <NameText>Aiden Fockens</NameText>
    </LeftContainer>
    <RightContainer>
      <ImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="My Image"></img>
      </ImageContainer>
      <CaptionContainer>
        <p>My favorite shirt, titled "felines in the forest". There are some similar on ebay if interested* </p>
      </CaptionContainer>
    </RightContainer>
  </PageContainer>
);
}

export default About;