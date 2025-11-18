import './App.css';
import React from "react";
import StartingLogo from "./components/StartingLogo.jsx";
import QuotePrompt from './components/QuotePrompt.jsx';


function App() {
  const [logoVisible, setlogoVisible] = React.useState(true);

  if (logoVisible){
    setlogoVisible(prev => !prev);
  }

  function displaySwitch(){
    document.getElementsByClassName("startinglogo")[0].classList.add("displaynone");
    document.getElementsByClassName("quoteprompt")[0].classList.add("displayblock");
    document.getElementById("prompt").focus();
  }

  React.useEffect(() => {
    const timer = setTimeout(displaySwitch, 3000);
    return () => clearTimeout(timer);
  } 
  , [logoVisible])
  return (
      <> 
        <StartingLogo />
        <QuotePrompt />
      </>
  );
}


export default App;

