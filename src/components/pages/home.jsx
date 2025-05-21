import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
import earth from '../../assets/earth.webp';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className='heading'>Measure, Offset, Lead <br/> Build a Sustainable Future with Triple Bottom Line </h1>

          <p >
            Triblin is a sustainability intelligence platform helping governments, enterprises, small and medium scale business (SMBs) and communities track and improve their performance across People, Planet, and Profit — starting with verified carbon offsetting for events.
          </p>
          <div className="hero-buttons">
            <Link to="/calculator" className="hero_button">
              Offset Your Event
            </Link>
            <Link to="/how-it-works" className="hero_button">
              Learn more about Triblin
            </Link>
          </div>
        </div>
      </section>

      <section className='why-triblin'>
          <h1 className='heading'>Sustainability Isn’t Just Carbon. <br /> It’s a Whole-System Responsibility.</h1>
          <br />
          <div className='why-triblin-cards'>
            <div>
              <img src={earth} alt="" />
            </div>
            <div>
              <h2>The future of accountability is integrated. <br /> Triblin is built on the Triple Bottom Line — a framework that balances:</h2>
              <ul className='triblin-list'>
                <li>
                  People – social equity, fair labor, accessibility, and well-being
                </li>
                <li>
                  Planet – carbon emissions, ecological stewardship, climate resilience
                </li>
                <li>
                  Profit – transparent finance, ethical growth, and value beyond shareholders
                </li>
              </ul>
              <p >We’re starting with fast, affordable carbon offsetting for events — but that’s just the beginning.</p>

              <button className='hero_button'>Explore the Triple Bottom Line →</button>
            </div>
          </div>
      </section>

      <section className="goverments_enterprices">
        <h1 className="heading">Purpose-Driven Tools <br /> for Public and Corporate Impact</h1>
        <h2>Triblin helps local councils, government agencies, and ESG-aligned companies lead with integrity. <br /> Whether you need Scope 3 alignment, grant-eligible data, or simple project-level offsetting — we’re ready to partner.</h2>

        <ul className='goverments-enterprises-list'>
                <li>
                  Australian data compliance & reporting readiness
                </li>
                <li>
                  Fully verifiable carbon transactions
                </li>
                <li>
                  Coming soon: ESG consultant marketplace + impact dashboards
                </li>
        </ul>
        <button className='hero_button'>Partner with us</button>
      </section>

      <section className='ourvision'>
        <h1 className="heading">Our Vision and Roadmap  <br/>From Offset Tool to ESG Intelligence Hub</h1>
        <h2>Carbon offsetting is only the first step. Here’s what we’re building:</h2>
        <p>

        SaaS tools for carbon tracking, ESG data, and sustainability reporting <br />

        Marketplace of consultants for compliance, reporting, and certifications <br />

        Verified reporting engine to meet regulatory and grant obligations <br /> </p>
      </section>
    </div>
  );
};

export default Home;