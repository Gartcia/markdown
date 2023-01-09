import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer'
import './App.css';

function App() {
  const [inputValue, setInput] = useState('# H1 \n\n ## H2 \n\n [links](https://www.freecodecamp.org) \n\n `inline code` \n\n ```multiline code``` \n\n - And of course there are lists \n -Anotherone \n\n > Block Quotes! \n\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n\n **bold**')
  function handleChange(e) {
    setInput(e.target.value)
  };
  return (
    <div className="App d-flex justify-content-start aling-items-center gap-3 flex-column w-100 h-100">
      <Editor input = {inputValue} handleChange = {handleChange}  />
      <Previewer input = {inputValue}/>
    </div>
  );
}
export default App;
