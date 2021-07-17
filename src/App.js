import StyledButton from "./components/StyledButton";
import StyledButtonWithProps from "./components/StyledButtonWithProps";
import StyledButton2 from "./components/StyledButton2";

import './App.css';

const MyApp = () => {
   return(
     <>
      <div className="wrap">

        <h1>Styled button</h1>      
        <StyledButton className="button">I am a styled button! 🥑</StyledButton>

        <h1>Components with props</h1>
        <StyledButtonWithProps className="button" bg="#ffc3c3" color="#b6201e">Button 🥥</StyledButtonWithProps>
        <StyledButtonWithProps className="button" bg="#ffdaca" color="#d85d16">Button 🥝</StyledButtonWithProps>
        <StyledButtonWithProps className="button" bg="#fff4c7" color="#bb9922">Button 🍍</StyledButtonWithProps>

        <h1>Conditional component</h1>
        <StyledButton2 className="button" buttonType="primary">I am a Primary Button! ✌</StyledButton2>
        <StyledButton2 className="button">I am a different kind of button! 🤟</StyledButton2>
      </div>
     </>
   )
}

export default MyApp;
