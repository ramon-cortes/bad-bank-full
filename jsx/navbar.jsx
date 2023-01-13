// -----------BOOTSTRAP NavBar-----------
// * I removed the collapse option, so it does not collapse (and hide) the menu items if the window is below ~1000px. So you will need a 600 pixels wide window to properly visualize
// * Replaced <a> tags with <Link> ones
// * Changed some of the styling using my styles.css file. Even had to use !important because I found no other way of changing the font color

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" id="home" to="/">Bad Bank RCL</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">            
            <li className="nav-item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link link-rcl"
                to="/createaccount"
                id="createaccount"
              >Create Account</Link>              
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link link-rcl" 
                to="/deposit"
                id="deposit"
              >Deposit</Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link link-rcl" 
                to="/withdraw"
                id="withdraw"
              >Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link link-rcl" 
                to="/alldata"
                id="alldata"
              >All Data</Link>
            </li>
          </ul>
        </div>
      </div>
      <p id="tooltip-home" >Return to<br />Home Page</p>
      <p id="tooltip-createaccount" >Create an Account<br />on BadBank</p>
      <p id="tooltip-deposit" >Deposit into<br />your account</p>
      <p id="tooltip-withdraw" >Withdraw from<br />your account</p>
      <p id="tooltip-alldata" >Get transactions<br />& info</p>
    </nav>
  );
}

// aria-current="page" 