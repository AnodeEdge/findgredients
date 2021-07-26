import logo from './logo.svg';
import './App.css';
import  { getRecipes } from './helpers/requestHandlers';


const testParams = {q: "coffee"}

function App() {
  return (
    <div className="App">
      {console.log(getRecipes(testParams))}
    </div>
  );
}

export default App;
