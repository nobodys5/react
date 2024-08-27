import Component , { ClassComponent, FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import  Table  from './component_manage/example/Example2';
import { Profiler } from 'react';
import Gallery from './component_manage/example/Example1';
import ListRender from './component_manage/example/ListRender';
import EventComponents from './interaction/EventComponents';
import StateComponent from './interaction/StateComponent';
import ForwardingComponent from './interaction/ForwardingComponent';
import HookComponent1 from './hook/HookComponent1';


function App() {
  return (
    <div className="App">
      {/* <Component />
      <ClassComponent />
      <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties/> */}
      {/* <ConditionalRender/> */}
      {/* <Gallery/> */}
      {/* <Example2/> */}
      {/* <Table/> */}
      {/* <ListRender/> */}
      {/* <EventComponents/> */}
      {/* <StateComponent/> */}
      {/* <ForwardingComponent/> */}
      <HookComponent1/>
    </div>
  );
}

export default App;
