import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [check , setCheck]=useState(false)


  const handle=(e)=>{
    e.preventDefault()
    setList([...list,input])
  }

  const dell = (id) => {

    const copylist=[...list]
    copylist.splice(id,1)
    setList(copylist)
  }
  

  return (
    <div className="App">
         <form onSubmit={handle}>
        <input onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">ADD</button>
      </form>

      <div>{list.map((liste,idx)=>{            
        return  <p>
          <label>
                <input type="checkbox" checked={check} onChange={e => setCheck(e.target.checked)}/>
            </label>
            <label>{liste}</label>
            <button onClick={()=>{dell(idx)}}>Delete</button>
            </p>
          
          } )}</div>
    </div>
  );
}

export default App;

