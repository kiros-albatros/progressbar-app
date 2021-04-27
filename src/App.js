import "./App.css";

import ProgressBar from "./Progressbar/ProgressBar.jsx";

function App() {
  return (
    <div className="App">
      <ProgressBar
        colorPrimary="red"
        colorSecondary="grey"
        width="200"
        stroke="10"
        percent={70}
        offset={-60}
        text={true}
        fontSize={35}
      />
    </div>
  );
}

export default App;
