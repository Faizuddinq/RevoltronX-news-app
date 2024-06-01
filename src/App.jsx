import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

function App() {

const apiKey='ece9e0bcc5f74d709907a12be17122a2';

  const [category, setCategory] = useState("general");

  const [progress, setProgress] = useState(0);

  return (
    <>
      <NavBar setCategory={setCategory} />
      <LoadingBar
        height={3}
        color="#667eea"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <News pageSize={10} category={category} setProgress={setProgress} apiKey={apiKey}/>
      <Footer />
    </>
  );
}

export default App;
