import { CardSection } from './components/CardSection'
import { NavBar } from './components/NavBar'

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