import Navbar from './components/Navbar';
import Home from './pages/Home';
// import TestComponentFunc from './components/TestComponentFunc';
// import TestComponent from './components/TestComponent';
import Parent from './components/Parent';
import Counter from './components/Counter';
import Number from './components/Number';

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home test="Andi" /> */}
      {/* <TestComponent name="Andi" age="21"/> 
      <TestComponentFunc name="Andi"/> */}
      {/* <Parent name="Dita" age="21 Tahun" /> */}
      {/* <Counter default={0} /> */}
      <Parent />
      {/* <Number default={5}/> */}
    </>
  );
}
