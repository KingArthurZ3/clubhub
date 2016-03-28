import React      from 'react';
import ClassNames from 'classnames';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">
                            <span className="lhs">lhs</span>
                            <span className="home">ClubHub</span>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="about" className={ClassNames({"active": this.props.active == "about"})}>About</a></li>
                            <li><a href="clubs" className={ClassNames({"active": this.props.active == "clubs"})}>Clubs</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;