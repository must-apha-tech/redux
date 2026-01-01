import { useDispatch,useSelector } from 'react-redux';
function App() {
  const nbre=useSelector(data=>data.nbre)
  const [inc,setInc]=useState("");
  const dispatch=useDispatch();
  return (
  <div className="App" >
    <p>Increent:<input type="text" onChange={(e)=>setInc(e.target.value)} /></p>
    <p>Nombre: {nbre}</p>
    <p><button onClick={()=>dispatch({type:"Incrementer",
      payload:inc})}>Incrementer</button></p>
    <p><button onClick={()=>dispatch({type:"Decrementer", 
      playload:inc})}>Decrementer</button></p>
    <p><button onClick={()=>dispatch({type:"Reinitialiser"})}>Reinitialiser</button></p>
  </div>
  );
}
export default App;