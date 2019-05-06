import React from 'react';
import { Col } from 'reactstrap';

function NavbarDropdownList({ title }) {
  return (
    <Col md={3}><span className="dropdown__title">{title}</span>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="/">Rượu Chivas</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Hàng độc - Rượu độc đáo</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Rượu Whisky</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Rượu Remy Martin</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Rượu Glenmorangie</a></li>
      </ul>
    </Col>
  )
}

export default NavbarDropdownList;
