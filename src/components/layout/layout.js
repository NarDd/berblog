import React from "react"
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-body">
        <div className="container">
          <div className="content">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
