import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <>
      <Header />
      <Button text="Click Me" type="button" />
      <Main />
      <Button text="Join" type="button" />
      <Footer />
      <Button text="Exit" type="button" />
    </>
  );
}

export default App;
