import { useState, useRef, useEffect } from "react";
import { Environment } from './components/Environment';
import { Content } from './components/Content';
import { CardSection } from './components/CardSection'
import { NavBar } from './components/NavBar'
import { Result } from './components/Result'

function App() {

  return (
    <>
      <NavBar />
      <CardSection title="Multiply" buttonName="Submit" />
      
    </>
  );
}

export default App;

//<Dropdown id="Dropdown" value={environment} update={setEnvironment} options={['Chandan', 'Bhardwaj', 'Javascript']} />