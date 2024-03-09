import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Fragment } from "react";
import Main from "./Components/Main/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main/>     
      <Footer />
    </Fragment>
  );
}

export default App;
