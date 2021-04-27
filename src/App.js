import './App.css';

import ProgressBar from './Progressbar/ProgressBar.jsx';

function App() {
  return (
    <div className="App">
     <ProgressBar 
     colorPrimary="red"
     colorSecondary="grey"
     width="100"
     stroke="10"
     percent = {50}
     offset = {365}
  />
    </div>
  );
}

export default App;
