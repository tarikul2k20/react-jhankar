import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
        
      </header>
    </div>
  );
}

function Users(){
  const[users, setUsers]=useState([]);  //user initial value empty then setUsers is data
  useEffect(()=>{                  // kono kisu browser a effect porle useEffect 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])     //bracket dile console a ekbar e load hobe // na dile barbar load nibe
  return (
    <div>
      <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
      </ul>
    </div>
  );

}
export default App;
