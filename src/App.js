import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
 import UserGreeting from './components/UserGreeting';
 import NameLsit from './components/NameLsit';
 import Form from './components/Form';
 import FragmentDemo from './components/FragmentDemo';
 import Table from './components/Table';
 import PureComponents from './components/PureComponents';
 import Memoparent from './components/Memoparent';
import FocusInput from './components/FocusInput';
 import RefsDemo from './components/RefsDemo';
 import FRParentInput from './components/FRParentInput';
 import MouseHover from './components/MouseHover';
 import CD from './components/CD';
 import { UserProvider } from './components/UserContext';
function App() {
  return (
    <div className="App">
     <UserProvider value="akash">
      <CD/>
     </UserProvider>
      {/* <FocusInput/> */}

      {/* <Memoparent/> */}
      {/* <Form/>
      <NameLsit/>
      <UserGreeting/> */}
    {/* <ParentComponent/> */}
     {/* <Greet name="akash">
      <p>this a children</p>
      <h4>welcome to talview</h4>
     </Greet>
     <Greet name="Renu"/>
      <Welcome name="akash">
         <h4>welcome to talview</h4>
      </Welcome>
      <Message/> */}
      {/* <Counter/> */}
      
    </div>
  );
}

export default App;
