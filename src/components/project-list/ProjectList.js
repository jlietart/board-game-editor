import React from 'react';
import PropTypes from 'prop-types';
import ProjectListItemPropTypes from '../../prop-types/ProjectListItem';

import './ProjectList.css';

const ProjectList = ({ items }) =>
  <ul className={'ProjectList'}>
    {items.map(({ title, description }) =>
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    )}
  </ul>;

ProjectList.propTypes = {
  items: PropTypes.shape(ProjectListItemPropTypes)
};

export default ProjectList;
