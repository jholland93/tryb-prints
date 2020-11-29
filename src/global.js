
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#121212" : "white"};
    transition: all 0.25s linear;
  }
  
  ._navbar{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#222222" : "white"};
    color: ${(props) => (props.theme.mode === "dark" ? "#efefef" : "#333333")};
    border-bottom: ${(props) => (props.theme.mode === "dark" ? "1px solid #474a4d": "0px solid #DDDDDD")};
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
    speed: 500ms;  
    transition: all 0.25s linear;
  }
  
  .menu-items a:hover{
    
  }
  
  .icon-button{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? " #484a4d;" : "grey"};
      transition: all 0.25s linear;
  
  }
  .icon-button svg{
    color: ${(props) =>
      props.theme.mode === "dark" ? "aliceblue" : "#cfcfc4"};
      transition: all 0.25s linear;
  }
  
  .dropdown, .dropdown-item{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#242526" : "white"};
    color: ${(props) => (props.theme.mode === "dark" ? "white" : "#242526")};
    transition: all 0.25s linear;
  }
  
  
  .main-footer{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#222222" : "white"};
    margin:0;
      transition: all 0.25s linear;
    
    
  }

  transition: all 0.25s linear;
  `;