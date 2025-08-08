import logo from './logo.svg';
import './App.css';

import Header from "./MyComponent/Header";
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import Todoitem from "./MyComponent/Todoitem";
function App() {
   let myVariable = 345;
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/>
      <Todoitem/>
    </>
  );
}

export default App;
