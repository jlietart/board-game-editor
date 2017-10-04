import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../components/project-list/ProjectList';
import CreateProjectForm from '../components/create-project-form/CreateProjectForm';
import { createProject } from '../actions/projects';

class Projects extends Component{
  handleCreateProject = values => {
    this.props.dispatch(createProject(values));
  };

  render() {
    return (
      <div>
        <ProjectList items={this.props.projects} />
        <CreateProjectForm onSubmit={this.handleCreateProject} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.items
  };
}

export default connect(mapStateToProps)(Projects);
