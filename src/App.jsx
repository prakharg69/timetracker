import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header";
import Dasbord from "./component/Dasbord";
import Timeform from "./component/form";
import { GlobalProvider } from "./context/global";

function App() {
  return (
   
      <GlobalProvider>
        <Timeform></Timeform>
        <Header></Header>
        <Dasbord></Dasbord>
      </GlobalProvider>
  
  );
}

export default App;
