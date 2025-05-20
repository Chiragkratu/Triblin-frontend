import React from 'react'
import { Clipboard, Zap, Globe, VenetianMask } from 'lucide-react';
import '../../styles/trust_makers.css'
import gold_img from '../constants/gold_standard.png'
import verra_img from '../constants/verra.png'

const trust_makers = () => {
  return (
    <div>
      <section className="section trust-markers">
        <div className="container">
          <h2 className="section-title">Backed by Global Standards</h2>
          
          <div className="trust-logos">
            <div className="trust-logo">
              <img src={gold_img} alt="Gold Standard" />
              <p>Gold Standard™</p>
            </div>
            <div className="trust-logo">
              <img src={verra_img} alt="Verra" />
              <p>Verra™</p>
            </div>
          </div>
        </div>
      </section>
        <div className='ethics'>
            <div className="trust-logo">
              <div className="trust-icon">
                <Clipboard size={40} />
              </div>
              <p>Transparent Pricing</p>
            </div>
            <div className="trust-logo">
              <div className="trust-icon">
                <Zap size={40} />
              </div>
              <p>SSL Secure Checkout</p>
            </div>
            <div className="trust-logo">
              <div className="trust-icon">
                <Globe size={40} />
              </div>
              <p>GDPR Compliant</p>
            </div>
        </div>
    </div>
  )
}

export default trust_makers
