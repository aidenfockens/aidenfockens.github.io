import React from 'react';
import { PageContainer,LeftContainer,AssignmentNameText,InfoText, RightContainer, GreenButton} from '../components/Styles.js'

function Assignments() {
  return (
    <PageContainer>
        <LeftContainer>
        <AssignmentNameText>Assignment 0</AssignmentNameText>
        <InfoText>Dummy assignment</InfoText>

        </LeftContainer>
        <RightContainer>
            <GreenButton href= "https://github.com/aidenfockens/afockens-assignment-0">Github Link</GreenButton>
        </RightContainer>
    </PageContainer>
  );
}

export default Assignments;