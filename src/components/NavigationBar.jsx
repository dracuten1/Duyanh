import React from 'react';

class NavigationBar extends React.Component {
    render() {
        return (
            <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <a className="navbar-brand" href="#">YOURCARD</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Template</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="username" aria-label="username"/>
                  <input className="form-control mr-sm-2" type="password" placeholder="password" aria-label="password"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                </form>
              </div>
            </nav>
          </header>
        )
    }
}

export default NavigationBar;