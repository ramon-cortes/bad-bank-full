function Home() {
  // Pull context value
  const ctx = React.useContext(UserContext);
  //console.log(JSON.stringify(ctx.users));

  //------HOME PAGE BOOTSTRAP CARD------
  return (
    <div className="card-padding">
      <div className="card" style={{width: "18rem"}}>
        <h5 className="card-title card-header text-center">Bad Bank - Home Page</h5>      
        <div className="card-body">
          <div className="centered">
            <img src="./img/bank-logo.jpg" alt="Bad Bank Logo" />
          </div>          
          <p className="card-text">Welcome<br />For all of your Bad Banking needs</p>
        </div>
      </div>
    </div>    
  );
}

/* 
<div class="card" style={{width: "18rem"}}>
  Bad Bank
  <div class="card-body">
    <h5 class="card-title">Welcome - Home Page</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/