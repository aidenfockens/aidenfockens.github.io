
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




// Title at the top of each cube
export const ProjectTitle = styled.h3`
  font-size: 24px;
  color: ${colors.darkGray};
  margin-bottom: 20px;
`;

// Image container inside the cube
export const ProjectImageContainer = styled.div`
  width: 100%; // Full width
  img {
    width: 100%; // Image takes full width
    height: auto;
    border-radius: 10px;
  }
`;

// Container for the technology cubes
export const TechContainer = styled.div`
  display: flex;
  justify-content: space-around; // Space between the tech cubes
  margin-top: 20px;
  width: 100%;
`;

// Individual technology cube
export const TechCube = styled.div`
  background-color: ${colors.secondary}; // Light red for technology cubes
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  color: ${colors.darkGray};
  width: 45%; // Each tech cube takes 45% of the space
  text-align: center;
`;

// Link that wraps the entire project cube to make it clickable
export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Inherit the color to ensure styling remains
`;


export const RowContainer = styled.div`
  display: flex;
  flex-direction: row; /* Place LeftContainer and RightContainer side by side */
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px; /* Space between assignment rows */
`;


// Cube container for each project
export const ProjectCube = styled.div`
  background-color: ${colors.white}; // White cube background
  border-radius: 20px; // Rounded corners
  padding: 20px;

  width: 90%; // Fixed width for three cubes per row (30% each + spacing)
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Light shadow
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); // Lift up on hover
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); // Stronger shadow on hover
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start; // Align to the left
  gap: 20px; // Space between the icons
  margin-top: 20px; // Add some spacing above the icons
`;

// Style for each social icon
export const SocialIcon = styled.a`
  width: 40px; // Adjust the size of the icons
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.8; // Slight hover effect
    transition: opacity 0.3s ease;
  }
`;


// Container for the entire work experience section
export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between; // Places two ExperienceDivs side by side
  width: 100%;
  margin-bottom: 40px;
`;

// Each individual work experience div, taking up half of the screen
export const ExperienceDiv = styled.div`
  flex-basis: 48%; // Each div takes up about half the container
  display: flex;
  background-color: ${colors.white};
  padding: 10px 20px 10px 20px; // Reduce bottom padding (10px)
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for better appearance
  align-items: flex-start; // Aligns items at the top
`;

// Left container for the company image (30% of the div)
export const LeftexperienceContainer = styled.div`
  flex-basis: 30%; // Takes up 30% of the ExperienceDiv
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Right container for the job details (70% of the div)
export const RightexperienceContainer = styled.div`
  flex-basis: 70%; // Takes up 70% of the ExperienceDiv
  padding-left: 20px; // Adds spacing between the image and text
  display: flex;
  flex-direction: column;
`;

// Image container for the logo
export const ExperienceImageContainer = styled.div`
  width: 100%;
  max-width: 100px; // Limit the size of the logo image
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

// Company and job title styling
export const CompanyInfo = styled.div`
  margin-bottom: 10px;
`;

// Job title styling
export const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkGray};
  margin: 0;
`;

export const ExperienceBulletList = styled.ul`
  list-style-type: disc; /* Adds bullet points */
  padding-left: 20px; /* Adds some padding to indent the bullet points */
  font-size: 12px;
  line-height: 1.6;
  color: ${colors.darkGray}; /* Darker gray for readability */
`;

export const ExperienceBulletItem = styled.li`
  margin-bottom: 4 px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.darkGray}; /* Standard dark gray text */
  padding: 10px;
  border-radius: 5px;

`;








// Date line styling
export const DateLine = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
  margin-top: 10px;
  font-style: italic;
`;