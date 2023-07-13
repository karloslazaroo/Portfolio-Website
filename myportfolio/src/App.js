import MainLayout from './Components/MainLayout/MainLayout';
import './App.css';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home/>
      </MainLayout>

    </div>
  );
}

export default App;
