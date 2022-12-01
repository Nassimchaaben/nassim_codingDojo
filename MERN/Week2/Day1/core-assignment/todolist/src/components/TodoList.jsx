import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';

function TodoList(props) {
  const [content, setContent] = useState('');
  const [list, setList] = useState(JSON.parse(localStorage.getItem('tasks'))||[]);
  

  //get input value 
  const onChangeHandler = (e) => {
    setContent(e.target.value)
}
    const handle =(e)=>{
    e.preventDefault()
    setList([...list,{content,id: uuid(),isCompleted:false}]); //content,id: new Date().getTime().toString(),isCompleted:false}])
    //EMPTY Input 
    setContent("")
  }

  const removeTask = id => {
    const filtredList = list.filter(task => task.id !== id);
    setList(filtredList);
  };
  // ADD TASK TO LOCALSTORAGE
  useEffect (() => {
    localStorage.setItem('tasks',JSON.stringify(list));
  },[list])

  return (
    <div>
        <form onSubmit={handle} >
            <div>
                <input type="text" name='content' value={content} onChange={onChangeHandler}/>
                <input type="submit" value="ADD" />
            </div>
      </form>
      <div className='tasks'>
        <div>

        </div>
      {list.map((liste )=>{
        return(
        <div key={liste.id} >
            <p style={liste.isCompleted ? {textDecoration:'line-through'} : {}} >{liste.content}</p>
            
            <input type="checkbox" checked = {liste.isCompleted} onChange={e => { setList(prevList => {
                const newList = prevList.map(item => 
                    item.content === liste.content? {...item,isCompleted: !item.isCompleted} :item

                );
                return newList;
            })}}/>
            <button onClick={() => removeTask(liste.id)}>DELETE</button>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default TodoList