
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row justify-center gap-5 mt-7">
        <div className="basis-1/4 border rounded shadow-sm bg-slate-50 p-5">
          <h3 className="text-xl font-semibold">This is column</h3>
          <p>lorem ipsum dollar sit amet.</p>
        </div>
        <div className="basis-1/4 border rounded shadow-sm bg-slate-50 p-5">
          <h3 className="text-xl font-semibold">This is column</h3>
          <p>lorem ipsum dollar sit amet.</p>
        </div>
        <div className="basis-1/4 border rounded shadow-sm bg-slate-50 p-5">
          <h3 className="text-xl font-semibold">This is column</h3>
          <p>lorem ipsum dollar sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
