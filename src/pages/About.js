import React from 'react';
import {IconContainer,SocialIcon, ProjectCube, ProjectTitle, ProjectImageContainer, TechContainer, TechCube, ProjectLink, HighlightText,SubText,InterestList,InterestItem,BulletList, BulletItem, LeftContainerWhite,Title,LargeTextContainer,StyledParagraph,  PageContainer, RowContainer, LeftContainer, RightContainer, ImageContainer, CaptionContainer, IntroText, NameText, ExperienceContainer, ExperienceDiv, LeftexperienceContainer, RightexperienceContainer, ExperienceImageContainer, CompanyInfo, JobTitle, ExperienceBulletList, ExperienceBulletItem, DateLine } from '../components/Styles';

function About() {
    return(
    <PageContainer>
      <RowContainer id = "hiya">
        <LeftContainer>
          <IntroText>Hi! I'm</IntroText>
          <NameText>Aiden Fockens</NameText>

          <IconContainer>
            <SocialIcon href="https://www.linkedin.com/in/aiden-fockens/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/images/linkedin.svg`} alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="https://github.com/aidenfockens" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="GitHub" />
            </SocialIcon>
            <SocialIcon href="mailto:afockens@bu.edu">
              <img src={`${process.env.PUBLIC_URL}/images/email.svg`} alt="Email" />
            </SocialIcon>
          </IconContainer>




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
      <Title id = "about-me">
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
  <Title id="projects">
        Projects
      </Title>
  <RowContainer>
  <ProjectLink to="https://github.com/aidenfockens/SexualHealthApp/tree/main">
    <ProjectCube>
      <ProjectTitle>Sexual Health App</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/Proj1.jpg`} alt="Project 1" />
      </ProjectImageContainer>
      <StyledParagraph>
        Anonymously alert partners you have tested positive for an STD. Includes a sympton tracker and hospital locations.
      </StyledParagraph>
      <TechContainer>
        <TechCube>React</TechCube>
        <TechCube>Node/Express</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>

  <ProjectLink to="https://github.com/aidenfockens/facial_recognition_project">
    <ProjectCube>
      <ProjectTitle>Facial Recognition Models</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/Proj2.jpg`} alt="Project 2" />
      </ProjectImageContainer>
      <StyledParagraph>
        Created four neural networks from scratch to guess age, nationality, gender, and emotion. Used utkFaces and MMA Facial Expressions for 
        our data.
      </StyledParagraph>
      <TechContainer>
        <TechCube>TensorFlow</TechCube>
        <TechCube>Keras</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>

  <ProjectLink to="https://github.com/aidenfockens/Kilter_Board_Vision">
    <ProjectCube>
      <ProjectTitle>Kilter Board Vision</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/Proj3.jpg`} alt="Project 3" />
      </ProjectImageContainer>
      <StyledParagraph>
        (IN PROGRESS) I will scrape videos of climbers, highlight features like hands and feet, and feed this to a network.
        It will then predict the best way to do new climbs.
      </StyledParagraph>
      <TechContainer>
        <TechCube>Flask</TechCube>
        <TechCube>Computer Vision</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>
</RowContainer>
<Title id="work-experience">
        Work Experience
      </Title>
<RowContainer>

<ExperienceContainer>
      {/* First Work Experience */}
      <ExperienceDiv>
        <LeftexperienceContainer>
          <ExperienceImageContainer>
            <img src={`${process.env.PUBLIC_URL}/images/bu.jpg`} alt="Company 1 Logo" />
          </ExperienceImageContainer>
        </LeftexperienceContainer>
        <RightexperienceContainer>
          <CompanyInfo>
            <JobTitle>Teaching assistant at Boston University</JobTitle>
          </CompanyInfo>
          <ExperienceBulletList>
            <ExperienceBulletItem>Have Taught Front-end Development, Probability, and Linear Algebra</ExperienceBulletItem>
            <ExperienceBulletItem>Teach labs of 20+ students and hold Office Hours for students questions</ExperienceBulletItem>
          </ExperienceBulletList>
          <DateLine>January 2023 - Present</DateLine>
        </RightexperienceContainer>
      </ExperienceDiv>

      {/* Second Work Experience */}
      <ExperienceDiv>
        <LeftexperienceContainer>
          <ExperienceImageContainer>
            <img src={`${process.env.PUBLIC_URL}/images/lavner.jpg`} alt="Company 1 Logo" />
          </ExperienceImageContainer>
        </LeftexperienceContainer>
        <RightexperienceContainer>
          <CompanyInfo>
            <JobTitle>Teaching intern at Lavner Education</JobTitle>
          </CompanyInfo>
          <ExperienceBulletList>
            <ExperienceBulletItem>Educate kids 10-14 on Machine learning, Coding, and Tech Startups</ExperienceBulletItem>
            <ExperienceBulletItem>Provide one-on-one zoom lessons in Coding and Game creation</ExperienceBulletItem>
          </ExperienceBulletList>
          <DateLine>June 2024 - Present</DateLine>
        </RightexperienceContainer>
      </ExperienceDiv>
    </ExperienceContainer>

</RowContainer>




</PageContainer>
);
}

export default About;