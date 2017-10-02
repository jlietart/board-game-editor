import React from 'react';
import classNames from 'classnames';
import { compose, withState, withHandlers } from 'recompose';

import ProjectListItemPropTypes from '../../prop-types/ProjectListItem';

import './ProjectListItem.css';

const ProjectListItem = ({
  title,
  description,
  isDescriptionVisible,
  onMouseOver,
  onMouseOut
}) =>
  <li
    className={'ProjectListItem'}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    <h2>{title}</h2>
    <p className={classNames({
      description: true,
      visible: isDescriptionVisible
    })}>{description}</p>
  </li>;

ProjectListItem.propTypes = ProjectListItemPropTypes;

export default compose(
  withState('isDescriptionVisible', 'showDescription', false),
  withHandlers({
    onMouseOver: ({ showDescription }) => () => {
      showDescription(true);
    },
    onMouseOut: ({ showDescription }) => () => {
      showDescription(false);
    }
  })
)(ProjectListItem);
