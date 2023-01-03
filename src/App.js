import NavBar from "./components/Navbar";
import Coro from "./components/Carousel";
import Cards from "./components/Card";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Search from "./components/Search";

const data =[
  {
    company:'TCS',
    domain: 'Frontend',
    stipend: '3000',
    duration:'1 month',
    location:'Work From Home',
    prereq:'MERN',
    url:'https://internshala.com/internships/'
  },
  {
    company:'TCS',
    domain: 'Frontend',
    stipend: '3000',
    duration:'1 month',
    location:'Work From Home',
    prereq:'MERN',
    url:'https://internshala.com/internships/'
  }
]



function App() {
  return (
    <div className="App">
      <Layout>
      <Coro/>
      <Search/>
      <hr style={{margin:'0px'}}/>
      <div className="d-flex">
      <Cards data={data}/>
      </div>
      </Layout>
    </div>
  );
}

export default App;
