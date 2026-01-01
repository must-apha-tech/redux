import { useDispatch,useSelector } from 'react-redux';
function App() {
  const nbre=useSelector(data=>data.nbre)
  const dispatch=useDispatch();
  return (
  <div className="App" >
    <p>Nombre: {nbre}</p>
    <p><button onClick={()=>dispatch({type:"Incrementer"})}>Incrementer</button></p>
    <p><button onClick={()=>dispatch({type:"Decrementer"})}>Decrementer</button></p>
    <p><button onClick={()=>dispatch({type:"Reinitialiser"})}>Reinitialiser</button></p>
  </div>
  );
}
export default App;