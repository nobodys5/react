import Component , { ClassComponent, FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';


function App() {
  return (
    <div className="App">
      {/* <Component />
      <ClassComponent />
      <FunctionComponent /> */}
      <CurlyBraces />
    </div>
  );
}

export default App;
