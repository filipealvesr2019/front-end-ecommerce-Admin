import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div> <div className="row">
    <div className="col-2">
      <div className="sidebar-wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li>
              <Link to="/dashboard">
                <Link className="fas fa-tachometer-alt"></Link> Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="admin/products"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <Link to="admin/products" className="fab fa-product-hunt"></Link> Products
              </Link>
              <ul className="collapse list-unstyled" id="productSubmenu">
                <li>
                  <Link to="#">
                    <Link to="admin/products" className="fas fa-clipboard-list"></Link> All
                  </Link>
                </li>

                <li>
                  <Link to="admin/products">
                    <Link  className="fas fa-plus"></Link> Create
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={"/admin/orders"}>
                <Link  className="fas fa-shopping-basket"></Link> Orders
              </Link>
            </li>

            <li>
              <Link to={"/admin/users"}>
                <Link  className="fa fa-users"></Link> Users
              </Link>
            </li>
            <li>
              <Link to={"/admin/reviews"}>
                <Link  className="fa fa-stars"></Link> Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div></div>
  )
}

export default Sidebar