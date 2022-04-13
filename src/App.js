
import './App.css';
import AddPerson from './components/AddPerson';
import DisplayPeople from './components/displayPeople';
import PersonProvider from './context/PersonContext';

function App() {

  return (
    <div className="App">
    <PersonProvider>
      <AddPerson/>
      <DisplayPeople/>
    </PersonProvider>
    </div>
  );
}

export default App;
