import LandingPage from '../landingPage/LandingPage.jsx';
import Contact from '../contact/Contact.jsx';
import Jobs from '../jobs/Jobs.jsx';
import MeetTheTeam from '../meetTheTeam/MeetTheTeam.jsx';
import PageNotFound from '../pageNotFound/PageNotFound.jsx';
import Successes from '../successes/Successes.jsx';

const routes = {
  "/": () => <LandingPage/>,
  "/contact": () => <Contact/>,
  "/jobs": () => <Jobs/>,
  "/meet-the-team": () => <MeetTheTeam/>,
  "/page-not-found": () => <PageNotFound/>,
  "/successes": () => <Successes/>
};

export default routes;