import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Final_CTA.css'

const Final_CTA = () => {
  return (
    <div>
       <section className="cta-banner">
        <div className="container">
          <h2>Ready to Offset Your Event?</h2>
          <p>Calculate your emissions and make your event climate-neutral today.</p>
          <Link to="/calculator" className="calculate">
            Calculate Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Final_CTA
