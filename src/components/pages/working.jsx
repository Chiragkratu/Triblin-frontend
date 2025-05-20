import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/working.css'
import { Leaf, Award, BarChart4 } from 'lucide-react';

const working = () => {
  return (
    <div className='working'>
      <section className="section what-we-do">
        <div className="container">
          <h2 className="section-title">Make Your Event Climate-Neutral. In Minutes.</h2>
          <p className="section-subtitle">
            Triblin lets you estimate emissions for your event and offsets them with verified climate projects. 
            <br />No spreadsheets. No consultants. Just fast, trusted climate action.
          </p>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart4 size={48} />
              </div>
              <h3>Estimate</h3>
              <p>Quickly calculate emissions from travel, energy, venue & catering.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Leaf size={48} />
              </div>
              <h3>Offset</h3>
              <p>Choose certified offset projects that match your impact.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={48} />
              </div>
              <h3>Certify</h3>
              <p>Get a digital certificate to show your event went carbon neutral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Enter Your Event Details</h3>
                <p>We ask a few simple questions — no jargon, no hassle.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Get an Instant Emissions Estimate</h3>
                <p>Our tool calculates your event's footprint in tCO2e.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Offset with Verified Projects</h3>
                <p>Pick a project and pay securely online.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Receive Your Certificate</h3>
                <p>Get an official Triblin Offset Certificate to share with stakeholders.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/calculator" className="Start_calculating">
              Start Calculating
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default working
