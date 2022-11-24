
import './App.css';
import PersonCard from './component/PersonCard';
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
    <PersonCard bloc={bloc} />
    </div>
  );
}

export default App;
