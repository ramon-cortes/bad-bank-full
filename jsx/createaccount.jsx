
const { useState, useEffect, useContext } = React;

function CreateAccount() {
  const ctx = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(false);

  // Updates State whenever theres an input change
  function changeValue(e) {
    let value = e.currentTarget.value;
    let origin = e.currentTarget.id;
    //console.log(origin);
    switch (origin) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  }

  useEffect(() => {
    let information = name + email + password;
    let boton = document.getElementById('boton');
    if (information.length == 0) {
      boton.setAttribute('disabled', 'disabled');
      boton.classList.add('boton-deshabilitado');
    } else {
      boton.removeAttribute('disabled', 'disabled');
      boton.classList.remove('boton-deshabilitado');
    }
  }, [name, email, password]);

  // Validates new Account information
  function createAccount() {
    if (name.length == 0) {
      alert('Name cannot be blank');
    } else if (email.length == 0) {
      alert('Email cannot be blank');
    } else if (password.length < 8) {
      alert('Password needs to be at least 8 characters long');
    } else {
      ctx.users.push({name, email, password, balance: 100});
      console.log(JSON.stringify(ctx.users));
      alert(`Account created Successfully! Name: ${name}, Email: ${email}, Password: ${password}`);
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="card-padding">
      <div className="card" style={{width: "18rem"}}>
        <h5 className="card-title card-header text-center">Create Account</h5>      
        <div className="card-body">
          <div className="card-text">
            Name<br />
            <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={changeValue} />
          </div>
          <div className="card-text">
            Email<br />
            <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={changeValue} />
          </div>
          <div className="card-text">
            Password<br />
            <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={changeValue} />
          </div>
          <br />
          <button id="boton" type="submit" className="boton-rcl" onClick={createAccount} >Create Account</button>
        </div>
      </div>
    </div>
  );
}