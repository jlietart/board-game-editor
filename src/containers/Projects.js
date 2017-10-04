import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../components/project-list/ProjectList';

class Projects extends Component{
  render() {
    return (
      <ProjectList items={this.props.projects} />
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.items
  };
}

export default connect(mapStateToProps)(Projects);
