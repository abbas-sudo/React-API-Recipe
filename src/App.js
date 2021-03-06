import './App.css';
import '../src/sass/style.css';
import Navbar from "./components/Navbar"
import Banner from "./components/Carousel"
import Categories from "./components/Categories"
import Categories2 from "./components/Categories2"
import Categories3 from "./components/Categories3"
import Footer from "./components/Footer"
// import Categories2 from './components/Categories2';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Categories />
    <Categories2 />
    <Categories3 />
    <Footer />
    </>
  )
}

export default App;