import './LandingPage.css';


// is there a more appropriate html tag for the cards?
function LandingPage() {
  return <div className="landing-page">

    <div className="row">
      <div className="double-column">
        <p>Top Content</p>
      </div>
    </div>

    <br></br>
    <br></br>

    <div className="row">
      <div className="column">
        <p>1</p>
      </div>
      <div className="column">
        <p>2</p>
      </div>
    </div>

    <br></br>
    <br></br>

    <div className="row">
      <div className="column">
        <p>3</p>
      </div>
      <div className="column">
        <p>4</p>
      </div>
    </div>

    <br></br>
    <br></br>

    <div className="row">
      <div className="column">
        <p>5</p>
      </div>
      <div className="column">
        <p>6</p>
      </div>
    </div>

  </div>
};

export default LandingPage;