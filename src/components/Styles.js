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