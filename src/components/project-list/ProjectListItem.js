import React from 'react';
import PropTypes from 'prop-types';

const ProjectListItem = ({ title, description }) =>
  <li>
    <h2>{title}</h2>
    <p>{description}</p>
  </li>;
