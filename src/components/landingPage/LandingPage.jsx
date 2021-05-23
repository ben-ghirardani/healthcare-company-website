import './LandingPage.css';


function LandingPage() {
  return <div className="landing-page">

    <div className="row top">
      <div className="double-column">
        <div className="headline-content">
          <div className="headline-text">
            Pioneering 
            <br></br>
            Research
          </div>    
        </div>
      </div>
    </div>

    <div className="row">
      <div className="column">

        <div className="virus-research">
          <div className="virus-research-text">
              Solving<br/>the human body’s<br/>most complex<br/>mysteries
            </div>
          <div className="research-circle">
          </div>
        </div>
      </div>

      <div className="column">
        
        <div className="hands">
          <div className="hands-text">
            Your future is safe<br/>in our hands
          </div>
        </div>

      </div>
    </div>

    <div className="row bottom">
      <div className="column">

        <div className="our-story">
          <div className="our-story-text">
            Inovotech: Our Story
          </div>
        </div>
      </div>

      <div className="column">

        <div className="join-our-team">
          <div className="team-text">
            Join The Team
          </div>
        </div>
      </div>
    </div>

  </div>
};

export default LandingPage;