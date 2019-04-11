import React, { Component } from "react";
import './footer.css';

class Navbar extends Component {
    render() {
        return (
            <div id="footerDiv" className="footer">
                <div id="footer1">
                    
                </div>
                <div id="footer2">
                    <div>
                        Clicky Game: Made with React
                    </div>
                    <div>
                        <a href="https://github.com/jessendasilva1/clickyGame/tree/master/clickgame" target="blank">
                            <img id="githubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40px" width="40px" alt="github logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;