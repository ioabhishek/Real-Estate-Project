// import './App.css';
import NavBar from './Navbar';
import SideBar from './LeftSideBar';
// import Listing from './PropertyListing';
import Header from '../AddNewProperty/Header'
import Form from '../AddNewProperty/Form';

const HomePage=()=> {
  return (
  <>
    <NavBar/>
    <SideBar/>
    {/* <Listing/> */}
    <Header/>
    <Form/>
  </>
)}

export default HomePage;