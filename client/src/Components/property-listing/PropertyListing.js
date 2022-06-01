const Listing=()=> {
    return (<>
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
  </>)}
  
  export default Listing;