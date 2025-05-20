import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/offsets_projects.css"
import reforestation from '../../assets/reforestation.webp'
import renewable_energy from '../../assets/green_energy.webp'
import earth from '../../assets/earth.webp'

const offsets_projects = () => {
  return (
    <div>
      <section className="section offset-projects">
        <div className="container">
          <h2 className="section-title">Where Your Offsets Go</h2>
          <p className="section-subtitle">
            We only source offsets from globally recognized registries like Gold Standard and Verra. 
            Your investment supports reforestation, clean energy, and community resilience.
          </p>

          <div className="projects-preview">
            <div className="project-card">
              <div className="project-image">
                <img src={reforestation} alt="Reforestation Project" />
              </div>
              <div className="project-content">
                <h3>Reforestation Projects</h3>
                <p>Supporting native tree planting in critical ecosystems worldwide.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={renewable_energy} alt="Renewable Energy Project" />
              </div>
              <div className="project-content">
                <h3>Renewable Energy</h3>
                <p>Funding solar, wind and other clean energy initiatives.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={earth} alt="Community Projects" />
              </div>
              <div className="project-content">
                <h3>Community Projects</h3>
                <p>Supporting sustainable development in vulnerable communities.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/offset-projects" className="offset_button">
              View Offset Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default offsets_projects
