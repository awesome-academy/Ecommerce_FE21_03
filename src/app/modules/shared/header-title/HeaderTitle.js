import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTitle.scss';

export const HeaderTitleMedium = ({ title, path }) => {
  return (
    <h4 className="n-header-title-2">
      <Link to={path}>{title}</Link>
    </h4>
  )
}
