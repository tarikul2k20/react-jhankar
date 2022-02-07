// react emmet
//add this to setting.json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }


  //simply inline css and obj
  import logo from './logo.svg';
import './App.css';

function App() {
  var style={
    color:"red",
    backgroundColor:"black"
  }
  var person={
    name: "tarik",
    age:22
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <p style={style}>edited para</p>
       <p>singer : {person.name} and age {person.age} </p>
       <p style={{color:"black", backgroundColor:"white"}}>This is another test</p>
       <Test></Test>
       <Test></Test>  
      </header>
    </div>
  );
}
function Test(){
    return <h2>this is component </h2>
}

export default App;

//what is component 
// part of website
// similar in look but different in data
import logo from './logo.svg';
import './App.css';

function App() {
  var style={
    color:"red",
    backgroundColor:"black"
  }
  var person={
    name: "tarik",
    age:22
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <p style={style}>edited para</p>
       <p>singer : {person.name} and age {person.age} </p>
       <p style={{color:"black", backgroundColor:"white"}}>This is another test</p>
        <Test></Test>
      

      </header>
    </div>
  );
}
function Test(){
  const sty={
    color:"red",
    border:"1px solid green"
  }
  return (
    <div>
      <h3 style={sty}>another components</h3>
      
    </div>
  );

}

export default App;

//passing argument(props) through parameter
import logo from './logo.svg';
import './App.css';

function App() {
  var style={
    color:"red",
    backgroundColor:"black"
  }
  var person={
    name: "tarik",
    age:22
  }
//   const nayoks=["jashim","shakib"];
  return (
    <div className="App">
      <header className="App-header">
     
        {/* <Test name={nayoks[0]} nayika="shabana"></Test> */}
        <Test name="shakib" nayika="apu"></Test>
        <Test name="jashim" nayika="shabana"></Test>
      

      </header>
    </div>
  );
}
function Test(props){
  const sty={
    color:"red",
    border:"1px solid green"
  }
  return (
    <div style={sty}>
      <h3>Nayok: {props.name} </h3>
      <h3>Nayika: {props.nayika} </h3>
      
    </div>
  );

}

export default App;

//anotherimport logo from './logo.svg';
import './App.css';
function App() {
  const arr=[
    {name:"adobe", price:"$33.3"},
    {name:"office", price:"$33.3"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Test name="Photoshop" price="$99.9"></Test>
        <Test name={arr[0].name} price={arr[0].price}></Test>
        <Test name={arr[1].name} price={arr[1].price}></Test>
        
      </header>
    </div>
  );
}

function Test(props){
  const sty={
    color:"white",
    border:"1px solid black",
    borderRadius:"5px",
    padding:"15px",
    backgroundColor:"cyan",
    width:"200px",
    height:"200px",
    marginTop:"10px"
  }
  return (
    <div style={sty}>
       <h3>{props.name}</h3>
       <h2>{props.price}</h2>
       <button>Buy Now</button>
      
    </div>
  );

}

export default App;


// ========= desturing========
import logo from './logo.svg';
import './App.css';
function App() {
  const products=[
    {name:"adobe", price:"$33.3"},
    {name:"office", price:"$33.3"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Test product={products[0]} ></Test>
        <Test product={products[1]} ></Test>

        
      </header>
    </div>
  );
}

function Test(props){
  const sty={
    color:"white",
    border:"1px solid black",
    borderRadius:"5px",
    padding:"15px",
    backgroundColor:"cyan",
    width:"200px",
    height:"200px",
    marginTop:"10px"
  }
  const {name, price}=props.product;
  return (
    <div style={sty}>
       <h3>{name}</h3>
       <h2>{price}</h2>
       <button>Buy Now</button>
      
    </div>
  );

}

export default App;


//======using map ======
import logo from './logo.svg';
import './App.css';
function App() {
 const nayoks=["razzak", "shakib"];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reacts</p>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
        </ul>
        
      </header>
    </div>
  );
}
export default App;


// =======another map=========
import logo from './logo.svg';
import './App.css';
function App() {
 
 const products=[
   {name:"photoshop", price:"33tk"},
   {name:"adobe", price:"33tk"}
 ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reacts</p>
        <ul>
          {
            products.map(product=><li>{product.name} Price:{product.price}</li>)
          }
        </ul>
        
      </header>
    </div>
  );
}
export default App;


// ========alternate of ==========
import logo from './logo.svg';
import './App.css';
function App() {
  const products=[
    {name:"adobe", price:"$33.3"},
    {name:"office", price:"$33.3"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <Test product={products[0]} ></Test>
        <Test product={products[1]} ></Test> */}
        {
          products.map(pd=> <Test product={pd}></Test>)
        }

        
      </header>
    </div>
  );
}

function Test(props){
  const sty={
    color:"white",
    border:"1px solid black",
    borderRadius:"5px",
    padding:"15px",
    backgroundColor:"cyan",
    width:"200px",
    height:"200px",
    marginTop:"10px"
  }
  const {name, price}=props.product;
  return (
    <div style={sty}>
       <h3>{name}</h3>
       <h2>{price}</h2>
       <button>Buy Now</button>
      
    </div>
  );

}

export default App;


// ============== State==========
// kono kichu change hoiteo pare nao pare 
// ======= useState========
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        
      </header>
    </div>
  );
}

function Counter(){
  // const increaseHandler=()=>setCount(count + 1);
  const[count, setCount]=useState(0);
  const increaseHandler=()=> {
    const newCount=count+1;
    setCount(newCount)
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseHandler}>Press</button>
    </div>
  );

}
export default App;

//====alternative====
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount]=useState(0);
  // const increaseHandler=()=>setCount(count + 1);
  // const increaseHandler=()=> {
  //   const newCount=count+1;
  //   setCount(newCount)
  // };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count + 1)}>Press</button>
    </div>
  );

}
export default App;

// both increse and decdrease
return (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(count + 1)}>Increase</button>
    <button onClick={()=>setCount(count - 1)}>Decrease</button>
  </div>
);

}
export default App;


//useEffect
//Data Load
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


