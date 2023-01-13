// Routing DOM
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

// Context
const UserContext = React.createContext(null);
const globalValue = {
  users: [
    {
      name: 'Abel',
      email: 'abel@mits.edu',
      password: 'secret-word',
      balance: 100
    }
  ]
};

