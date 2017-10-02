import React from 'react';
import PropTypes from 'prop-types';
import ProjectListItemPropTypes from '../../prop-types/ProjectListItem';

import ProjectListItem from './ProjectListItem';

import './ProjectList.css';

const ProjectList = ({ items }) =>
  <ul className={'ProjectList'}>
    {items.map((item, key) =>
      <ProjectListItem key={key} {...item} />
    )}
  </ul>;

ProjectList.propTypes = {
  items: PropTypes.shape(ProjectListItemPropTypes)
};

export default ProjectList;
