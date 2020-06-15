import React, { Component } from 'react';
import ProjectsPanel from './Projects'

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check out some of my works.</h1>
              <ProjectsPanel projects={this.props.data && this.props.data.projects} />
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
