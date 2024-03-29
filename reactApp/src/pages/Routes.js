import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Homepage from "./Homepage";
import About from "./About";
import Gallery from "./Gallery";
import Forum from "./Forum";
import Auth from '../components/Auth/Auth';
import SiteHeader from '../components/siteHeader/index';

class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
              <div>
              <SiteHeader />
                <div className="content">
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/Auth" component={Auth} />
                    <Route path="/Forum" component={Forum}/>
                </div>
              </div>
    </BrowserRouter>
      );
    }
  }
 
export default Routes;