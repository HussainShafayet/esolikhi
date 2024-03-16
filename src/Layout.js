import React from 'react'
import NavBar from './components/Nav/NavBar'

export default function Layout({children}) {
  return (
    <>
      <NavBar />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 bg-primary p-1">
              header
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-3 pl-0 pr-0">
              <div className="col-md-12 col-sm-12 col-xs-12 bg-secondary p-1 mt-1">
                2
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 bg-info p-1 mt-1">
                3
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 bg-danger p-1 mt-1">
                4
              </div>
            </div>
            <div className="col-md-6 col-sm-9 col-xs-12 p-1 mid-content vh-100">
              {children}
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 bg-light p-1 height mt-1">
              Recent Post.....
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 bg-warning p-1 mt-1">
              <footer>footer</footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
