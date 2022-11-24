import './App.css';
import Putting from './components/Putting';

const bloc = [
  {
  "firstname": "Doe",
  "lastname": "Jane",
  "age": 45,
  "HairColor": "Black"
  },
  {
    "firstname": "Smith",
    "lastname": "John",
    "age": 88,
    "HairColor": "Brown"
  },
  {
    "firstname": "Fillmore",
    "lastname": "Millard",
    "age": 50,
    "HairColor": "Brown"
  },
  {
    "firstname": "Smith",
    "lastname": "Maria",
    "age": 62,
    "HairColor": "Brown"
  }

];

function App() {
  return (
    <div className="App">
    {bloc.map(element => {
    return <Putting firstname={element.firstname} lastname={element.lastname} age={element.age} HairColor={element.HairColor}/>})
    }
    </div>
  );
}

export default App;
