const NavBar=()=> {
    return (<>
        <div className="">
          <nav className="nav-bar">
              <span className="user">USER ID: 001</span>
              <span className="logout"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>  User Name <i class="arrow down"></i></span>
          </nav>
      </div>
      
    </>);
  }
  
  export default NavBar;