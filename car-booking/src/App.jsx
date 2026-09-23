import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {


  return (
    <>
    <BrowserRouter>
    <h1></h1>
      <Header />
        <AppRoutes />  
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
