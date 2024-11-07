import React from 'react';
import {PageContainer,RowContainer,LeftContainer,AssignmentNameText,InfoText, RightContainer, GreenButton} from '../components/Styles.js'

function Assignments() {
  return (
    <PageContainer>
      <RowContainer>
        <LeftContainer>
        <AssignmentNameText>Assignment 0</AssignmentNameText>
        <InfoText>Dummy assignment</InfoText>

        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-0">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>

      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 1</AssignmentNameText>
          <InfoText>We observed the frequency of different elevators in order to determine the most efficient place to stand</InfoText>
          
        </LeftContainer>
        
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-1">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>
      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 2</AssignmentNameText>
          <InfoText>
            I created a web application that simulates the K means clustering algorithm. It allows for multiple initialization methods
          </InfoText>
          <video width="400" controls>
            <source src={`${process.env.PUBLIC_URL}/images/kmeansvid.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-2">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>


      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 3</AssignmentNameText>
          <InfoText>I performed varying levels of SVD decomposition to highlight the changes in accuracy and training time</InfoText>
          
        </LeftContainer>
        
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-3">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>

      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 4</AssignmentNameText>
          <InfoText>
            Simulation of a Search Algorithm using LSA search
          </InfoText>
          <video width="400" controls>
            <source src={`${process.env.PUBLIC_URL}/images/assign4.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-4">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>

      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 5</AssignmentNameText>
          <InfoText>
            Using KNN to predict bank-customer retention
          </InfoText>

        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-5">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>

      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Midterm</AssignmentNameText>
          <InfoText>
            Using a Naive Bayes Class, TfdifVectorizer, Feature Extraction, and a Random Forest I predicted scores of amazon Reviews.
          </InfoText>

        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/CS506-Afockens-Midterm">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>

      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 6</AssignmentNameText>
          <InfoText>
            Visualization of linear regression on a random dataset, with configurable N, mu, sigma, and S
          </InfoText>
          <video width="400" controls>
            <source src={`${process.env.PUBLIC_URL}/images/vidofregression.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-6">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>


      <RowContainer>
        <LeftContainer>
          <AssignmentNameText>Assignment 7</AssignmentNameText>
          <InfoText>
            Inclusion of Confidence Intervals and parameter hypotheses's with assignment 6
          </InfoText>
          <video width="400" controls>
            <source src={`${process.env.PUBLIC_URL}/images/assign7.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-7">Github Link</GreenButton>
        </RightContainer>
      </RowContainer>




    </PageContainer>
  );
}

export default Assignments;