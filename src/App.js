import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import LandingPage from './components/landingPage/LandingPage.jsx';
import Contact from './components/contact/Contact.jsx';
import Jobs from './components/jobs/Jobs.jsx';
import MeetTheTeam from './components/meetTheTeam/MeetTheTeam.jsx';
import PageNotFound from './components/pageNotFound/PageNotFound.jsx';

// routing links are located in the header, components display in <App/>
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact> <LandingPage/> </Route>
        <Route path="/meetTheTeam"> <MeetTheTeam/> </Route>
        <Route path="/jobs"> <Jobs/> </Route>
        <Route path="/contact"> <Contact/> </Route>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;