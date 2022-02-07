import logo from './logo.svg';
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
