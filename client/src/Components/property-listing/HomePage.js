// import './App.css';
import NavBar from './Navbar';
import LeftSideBar from './LeftSideBar';
import PropertyListing from './PropertyListing';
// import Header from '../AddNewProperty/Header'

const HomePage=()=> {
  return (<>
      <NavBar/>
      <LeftSideBar/>
      <PropertyListing/>
      {/* <Header/> */}
    </>)}

export default HomePage;