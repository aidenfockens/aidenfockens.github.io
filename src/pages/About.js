import React from 'react';
import {ProjectRowContainer, IconContainer,SocialIcon, ProjectCube, ProjectTitle, ProjectImageContainer, TechContainer, TechCube, ProjectLink, HighlightText,SubText,InterestList,InterestItem,BulletList, BulletItem, LeftContainerWhite,Title,LargeTextContainer,StyledParagraph,  PageContainer, RowContainer, LeftContainer, RightContainer, ImageContainer, CaptionContainer, IntroText, NameText, ExperienceContainer, ExperienceDiv, LeftexperienceContainer, RightexperienceContainer, ExperienceImageContainer, CompanyInfo, JobTitle, ExperienceBulletList, ExperienceBulletItem, DateLine, InterestHighlight } from '../components/Styles';

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
        </RightContainer>



      
      </RowContainer>
      <Title id = "about-me">
        About Me
      </Title>

  <RowContainer>
          <LeftContainerWhite>
          <LargeTextContainer>
  <StyledParagraph>

    <InterestHighlight>Graduated from Boston University in December of 2024</InterestHighlight>

  </StyledParagraph>
  
  <StyledParagraph>
    <InterestHighlight>Received a BA in Computer Science + Data Science Minor</InterestHighlight>
  </StyledParagraph>
  
  <StyledParagraph>
    I'm especially interested in...
  </StyledParagraph>
  
  <InterestList>
    <InterestItem>Backend Web Development</InterestItem>
    <InterestItem>Machine Learning</InterestItem>
    <InterestItem>Cloud Computing</InterestItem>
  </InterestList>
  <StyledParagraph>
    And I love to work in...
  </StyledParagraph>
  
  <InterestList>
    <InterestItem>Python, Javascript, and Go</InterestItem>

  </InterestList>
</LargeTextContainer>
          </LeftContainerWhite>
          <LeftContainerWhite>
    <LargeTextContainer>
      <StyledParagraph>
        {/* Title for the skills section */}
        <HighlightText>Technologies I use all the time!</HighlightText>
        
        <BulletList>
          <BulletItem>Flask</BulletItem>
          <BulletItem>Docker/Kubernetes </BulletItem>
          <BulletItem>Kafka</BulletItem>
          <BulletItem>Machine learning w/ Tenserflow, Keras, Spark</BulletItem>
          <BulletItem>SQLAlchemy, Plotly, numpy  </BulletItem>
        </BulletList>
      </StyledParagraph>
    </LargeTextContainer>
  </LeftContainerWhite>
  </RowContainer>
  <Title id="projects">
        Projects
      </Title>
  <RowContainer>
  <ProjectRowContainer>
  <ProjectLink to="https://github.com/aidenfockens/aiden_neel_healthEvents">
    <ProjectCube>
      <ProjectTitle>Health Events Pipeline</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/health_events.jpg`} alt="Project 3" />
      </ProjectImageContainer>
      <StyledParagraph>
        This app processes health events from a Kafka producer to predict anomalies and display up-to-date statistics. 
        This is done through a Cronjob every four hours to fetch new events, an AWS RDS holding the data, and a Flask server that 
        responds with the most recent information.
      </StyledParagraph>
      <TechContainer>
        <TechCube>AWS, GCP, Kubernetes</TechCube>
        <TechCube>Flask, Kafka</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>



  <ProjectLink to="https://github.com/aidenfockens/SexualHealthApp/tree/main">
    <ProjectCube>
      <ProjectTitle>On Belay</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/climbingProject.jpg`} alt="Project 1" />
      </ProjectImageContainer>
      <StyledParagraph>
        Find Partners to climb with! With a React Native frontend, you can access it on your phone or computer. Make friends, message them, plan trips, and post about them!
      </StyledParagraph>
      <TechContainer>
        <TechCube>React Native</TechCube>
        <TechCube>Flask, SQLAlchemy</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>

  <ProjectLink to="https://github.com/aidenfockens/facial_recognition_project">
    <ProjectCube>
      <ProjectTitle>Amazon Review Analysis</ProjectTitle>
      <ProjectImageContainer>
        <img src={`${process.env.PUBLIC_URL}/images/amazonProject.jpg`} alt="Project 2" />
      </ProjectImageContainer>
      <StyledParagraph>
        Implements feature extraction, Naive Bayes classifiers, and random forest models to predict the score of Amazon Reviews
      </StyledParagraph>
      <TechContainer>
        <TechCube>SkLearn</TechCube>
        <TechCube>Pandas</TechCube>
      </TechContainer>
    </ProjectCube>
  </ProjectLink>
  </ProjectRowContainer>
  

  
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