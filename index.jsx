// BAD BANK FULL   cd /c/rcl/rcl/'emeritus mit'/'JSX React'/Bad-Bank-Full


function BadBank() {
  return(
    <HashRouter>
      <NavBar />
      <hr />
      <UserContext.Provider value={globalValue} >
        <Route path="/" exact          component={Home} />
        <Route path="/createaccount/"  component={CreateAccount} />
        <Route path="/deposit/"        component={Deposit} />
        <Route path="/withdraw/"       component={Withdraw} />
        <Route path="/alldata/"        component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<BadBank />, document.getElementById('root'));


/* --------- Highlights the element of the current page ----------- */
const hashes = ['createaccount', 'deposit', 'withdraw', 'alldata'];

function removeActiveRcl() {
  hashes.map(el => document.getElementById(el).classList.remove('active-rcl'));
}

function router() {
  removeActiveRcl();
  let hash = location.hash.replace('#/', '');
  if (hash) document.getElementById(hash).classList.add('active-rcl');
}

window.addEventListener('hashchange', router);

// Highlight menu element the first time
//    Obtains the current page name ex: createaccount ↓
let firstURL = document.URL.slice(document.URL.indexOf('#/') + 2);
if (firstURL) document.getElementById(firstURL).classList.add('active-rcl');
/* --------- Highlights the element of the current page END-------- */

//------ NavBar ToolTip effects ----------------------
/*From https://stackdiary.com/hover-tooltip-javascript/ */

const homeLink = document.getElementById('home');
const tooltipHome = document.getElementById('tooltip-home');
homeLink.addEventListener('mouseover', () => tooltipHome.style.display = 'block', false);
homeLink.addEventListener('mouseleave', () => tooltipHome.style.display = 'none', false);

const createaccountLink = document.getElementById('createaccount');
const tooltipCreateAccount = document.getElementById('tooltip-createaccount');
createaccountLink.addEventListener('mouseover', () => tooltipCreateAccount.style.display = 'block', false);
createaccountLink.addEventListener('mouseleave', () => tooltipCreateAccount.style.display = 'none', false);


const depositLink = document.getElementById('deposit');
const tooltipDeposit = document.getElementById('tooltip-deposit');
depositLink.addEventListener('mouseover', () => tooltipDeposit.style.display = 'block', false);
depositLink.addEventListener('mouseleave', () => tooltipDeposit.style.display = 'none', false);

const withdrawLink = document.getElementById('withdraw');
const tooltipWithdraw = document.getElementById('tooltip-withdraw');
withdrawLink.addEventListener('mouseover', () => tooltipWithdraw.style.display = 'block', false);
withdrawLink.addEventListener('mouseleave', () => tooltipWithdraw.style.display = 'none', false);

const alldataLink = document.getElementById('alldata');
const tooltipAllData = document.getElementById('tooltip-alldata');
alldataLink.addEventListener('mouseover', () => tooltipAllData.style.display = 'block', false);
alldataLink.addEventListener('mouseleave', () => tooltipAllData.style.display = 'none', false);

//------ NavBar ToolTip effects END ----------------------

