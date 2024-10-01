
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const colors = {
    primary: '#D32F2F',
    secondary: '#FFCDD2',
    complementary: '#388E3C',
    darkGray: '#333333',
    lightGray: '#E0E0E0',
    white: '#FFFFFF',
    yellow: '#FBC02D',
    blue: '#0288D1',
  };

// Main content container for each page


export const PageContainer = styled.div`
  padding-top: 4rem; /* Space for the fixed navbar */
  display: flex;  
  flex-direction:column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px; /* Limit max-width for larger screens */
`;


export const RowContainer = styled.div`
  display: flex;
  flex-direction: row; /* Place LeftContainer and RightContainer side by side */
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px; /* Space between assignment rows */
`;

// Left container for text
export const LeftContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${colors.lightGray};
  border-radius: 20px 0 0 20px;
`;

// Right container for images
export const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightGray};
  border-radius: 0 20px 20px 0;
`;

// Image container
export const ImageContainer = styled.div`
  width: 80%;
  max-width: 600px; /* Max-width for images */
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Optional: rounded corners for the image */
  }
`;

// Caption container for text below the image
export const CaptionContainer = styled.div`
  font-size: 14px;
  color: ${colors.black};
  text-align: center;
  margin-top: -20px;
`;


export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// Style each tab with an oval shape and primary red border
export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 50px; // Oval shape
  background-color: transparent;
  border: 2px solid ${colors.primary}; // Primary red border
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primary}; // Fill the background with primary red on hover
    color: white;
  }
`;


export const IntroText = styled.p`
  font-size: 20px;
  color: ${colors.black};
  margin: 0;
  padding-top:120px;
`;

// Text styling for name
export const NameText = styled.h1`
  font-family: 'Roboto';
  font-size: 80px; /* Adjust size as needed */
  font-weight: bold;
  color: ${colors.black};
  margin: 10px 0 0 0; /* Margin adjustment */
  padding-top: 
`;

export const AssignmentNameText = styled.h1`
  font-family: 'Roboto';
  font-size: 30px; /* Adjust size as needed */
  font-weight: bold;
  color: ${colors.black};
  margin: 10px 0 0 0; /* Margin adjustment */
  padding-top: 
`;

export const InfoText = styled.p`
  font-size: 15px;
  color: ${colors.black};
  margin: 0;
  padding-top:20px;
`;


export const GreenButton = styled.a`
  text-decoration:none;
  background-color: rgb(110, 195, 155); /* Green color */
  color: black;
  border: none;
  border-radius: 4px;
  margin-top:20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }

  &:active {
    background-color: #1e7e34; /* Even darker green when clicked */
  }

  &:disabled {
    background-color: #c3e6cb; /* Light green when disabled */
    cursor: not-allowed;
  }
`;

// Text container that takes up two-thirds of LeftContainer
export const LargeTextContainer = styled.div`
  flex-basis: 39%; /* Takes up two-thirds of the LeftContainer */
  font-size: 22px; /* Larger font size */
  line-height: 1.4; /* Adjust line-height for better readability */
  color: ${colors.darkGray}; /* Darker gray for readability */
  padding: 0px;

`;

// Example usage of the text within LeftContainer
export const StyledParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${colors.darkGray}; /* Match the text color to the theme */
  text-align: justify; /* Justify text for a clean, professional appearance */
`;


export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif; /* Modern font */
  font-size: 70px; /* Large and bold */
  font-weight: 700; /* Bold text */
  text-align: center; /* Center the title */
  text-decoration: underline; /* Underline the text */
  color: ${colors.darkGray}; /* Dark gray color for a modern look */
  margin: 40px 0; /* Space above and below the title */
`;

// Left container for text
export const LeftContainerWhite = styled.div`
  flex: 1;
  margin:20px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 20px 20px 20px 20px;
`;


export const RightContainerWhite = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 20px 20px 20px 20px;
`;


export const BulletList = styled.ul`
  list-style-type: disc; /* Adds bullet points */
  padding-left: 20px; /* Adds some padding to indent the bullet points */
  font-size: 22px;
  line-height: 1.6;
  color: ${colors.darkGray}; /* Darker gray for readability */
`;

export const BulletItem = styled.li`
  margin-bottom: 4 px;
  font-size: 22px;
  font-weight: 500;
  color: ${colors.darkGray}; /* Standard dark gray text */
  padding: 10px;
  border-radius: 5px;

`;

// Highlighted text with background color for emphasis
export const HighlightText = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.darkGray}; /* Standard dark gray text */
  background-color: ${colors.secondary}; /* Subtle secondary light red background */
  padding: 5px 10px;
  border-radius: 5px; /* Slightly rounded corners for a smooth look */
  display: inline-block; /* Ensures background wraps just the text */
`;

// Sub-text for additional information
export const SubText = styled.span`
  font-size: 20px;
  font-weight: normal;
  color: ${colors.darkGray}; /* Standard dark gray text */
  display: block;
  margin-top: 5px; /* Spacing to separate from the highlighted text */
`;

// Interest list for key interests with background color
export const InterestItem = styled.li`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 500;
  color: #8a0c26; /* Complementary green for interests */
`;

export const InterestList = styled.ul`
  list-style-type: disc; /* Adds bullet points */
  padding-left: 40px; /* Indent for bullet points */
  font-size: 20px;
  line-height: 1.6;
  color: ${colors.darkGray}; /* Standard dark gray color */
`;