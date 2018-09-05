import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="page-footer text-center font-small wow fadeIn">
                <div className="footer-copyright">
                    © 2018 Copyright:
                    <a href="TradeChat.gg">TradeChat.gg</a> | <a href="https://idrisdev.com">IdrisDev.com</a>
                    ; All Images obtained from <a href="https://www.pexels.com/">Pexels</a>;
                </div>
            </footer>
        );
    }
}

export default Footer;