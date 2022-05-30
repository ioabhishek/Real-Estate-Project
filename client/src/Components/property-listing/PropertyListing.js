// import logo from './logo.svg';
// import './App.css';


function Listing() {
    return (<>
  {/* 
      <div className="">
          <nav className="nav-bar">
              <span className="user">USER ID: 001</span>
              <span className="logout"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>  User Name <i class="arrow down"></i></span>
          </nav>
      </div>
  
    <ul>
    <h1>Logo</h1>
    <br /><br />
    <li><a class="active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Property</a></li><br />
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>  Assistance</a></li><br />
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>  Received Interest</a></li><br />
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>  Sent Interest</a></li><br />
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>  Property Views</a></li><br />
    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>  Tariff Plan</a></li><br />
  </ul> */}
  <div className="conent">
    <div className="searchbar">
    <form class="search-bar">
              <input type="text" id="search" placeholder="Search PPD ID" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </form></div>
    <div className="addbutton">
    <button type="button" class="button">+ Add Property</button>
    </div>
  </div>
  <div class="container">
         <table class="table">
           <tr>
              <th>PPD ID</th>
              <th>Image</th>
              <th>Property</th>
              <th>Contact</th>
              <th>Area</th>
              <th>Views</th>
              <th>Status</th>
              <th>Days Left</th>
              <th>Action</th>
              </tr>
              <tr>
                  <td>PPD001</td>
                  <td>image</td>
                  <td>plot</td>
                  <td>123456987</td>
                  <td>1200</td>
                  <td>02</td>
                  <td>sold</td>
                  <td>00</td>
                  <td>action</td>
              </tr>        
  
          </table>
          
      </div> 
          
          {/* <form method="get" action="/form">
              <button class="btn1" type="submit">Add users</button>
          </form> */}
  </>)}
  
  export default Listing;
  