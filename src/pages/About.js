import React from 'react';
import {HighlightText,SubText,InterestList,InterestItem,BulletList, BulletItem,RightContainerWhite, LeftContainerWhite,Title,LargeTextContainer,StyledParagraph,  PageContainer, RowContainer, LeftContainer, RightContainer, ImageContainer, CaptionContainer, IntroText, NameText } from '../components/Styles';

function About() {
    return(
    <PageContainer>
      <RowContainer>
        <LeftContainer>
          <IntroText>Hi! I'm</IntroText>
          <NameText>Aiden Fockens</NameText>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="My Image"></img>
          </ImageContainer>
          <CaptionContainer>
            <p>My favorite shirt called "felines in the forest". There are some similar on ebay if interested* </p>
          </CaptionContainer>
        </RightContainer>
      </RowContainer>
      <Title>
        About Me
      </Title>
  <RowContainer>
          <LeftContainerWhite>
          <LargeTextContainer>
  <StyledParagraph>
    <HighlightText>I'm graduating from Boston University</HighlightText>
    <SubText>this January!</SubText>
  </StyledParagraph>
  
  <StyledParagraph>
    <HighlightText>I study Computer Science</HighlightText>
    <SubText>with a Minor in Data Science.</SubText>
  </StyledParagraph>
  
  <StyledParagraph>
    I'm especially interested in...
  </StyledParagraph>
  
  <InterestList>
    <InterestItem>Backend Web Development</InterestItem>
    <InterestItem>Machine Learning</InterestItem>
    <InterestItem>Cloud Computing</InterestItem>
  </InterestList>
</LargeTextContainer>
          </LeftContainerWhite>
          <LeftContainerWhite>
    <LargeTextContainer>
      <StyledParagraph>
        {/* Title for the skills section */}
        <HighlightText>Skills/Technologies</HighlightText>
        
        <BulletList>
          <BulletItem>React</BulletItem>
          <BulletItem>Node</BulletItem>
          <BulletItem>Flask</BulletItem>
          <BulletItem>Machine Learning with TensorFlow and Keras</BulletItem>
          <BulletItem>Google Cloud Storage</BulletItem>
        </BulletList>
      </StyledParagraph>
    </LargeTextContainer>
  </LeftContainerWhite>

      </RowContainer>
    </PageContainer>
);
}

export default About;