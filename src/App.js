import logo from './logo.svg';
import './App.css';
import RegistrationForm from './pages/SignInPage'; 
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import SuccessGoogleLoginPage from './pages/SuccessGoogleLoginPage';
import ListOfCharactersPage from './pages/ListOfCharactersPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<RegistrationForm />}/>
        <Route path="/ouauthlogingoogle" element={<SuccessGoogleLoginPage />} />
        <Route path="/list-of-characters" element={<ListOfCharactersPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


/* rcc→	class component skeleton
rrc→	class component skeleton with react-redux connect
rrdc→	class component skeleton with react-redux connect and dispatch
rccp→	class component skeleton with prop types after the class
rcjc→	class component skeleton without import and default export lines
rcfc→	class component skeleton that contains all the lifecycle methods
rwwd→	class component without import statements
rpc→	class pure component skeleton with prop types after the class
rsc→	stateless component skeleton
rscp→	stateless component with prop types skeleton
rscm→	memoize stateless component skeleton
rscpm→	memoize stateless component with prop types skeleton
rsf→	stateless named function skeleton
rsfp→	stateless named function with prop types skeleton
rsi→	stateless component with prop types and implicit return
fcc→	class component with flow types skeleton
fsf→	stateless named function skeleton with flow types skeleton
fsc→	stateless component with flow types skeleton
rpt→	empty propTypes declaration
rdp→	empty defaultProps declaration
con→	class default constructor with props
conc→	class default constructor with props and context
est→	empty state object
*/