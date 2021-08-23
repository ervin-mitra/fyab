import './App.css';
import hitEvilInsult from './apis/evilInsult'

function App() {
  const quote = hitEvilInsult()
  return (
    <div className="App">
      ${quote}
    </div>
  );
}

export default App;
