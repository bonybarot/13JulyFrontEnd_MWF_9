import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-6 offset-6">

                <ul>
                    <li><Link to="functionalclock">Clock</Link></li>
                    <li><Link to="functionalcompoexample">Intro</Link></li>
                    <li><Link to="stateexampleinfunctionalcompo">State</Link></li>
                    <li><Link to="useeffectexampleinfunctionalcompo">useEffect </Link></li>
                    <li><Link to="uselayouteffectexampleinfunctionalcompo">useLayoutEffect </Link></li>
                    <li><Link to="useusecontextinfunctionalcompo">useContext </Link></li>
                    <li><Link to="usereducerinfunctionalcompo">usereducer </Link></li>
                    <li><Link to="usecallbackinfunctionalcompo">useCallBack</Link></li>
                    <li><Link to="usememoinfunctionalcompo">useMemo</Link></li>
                    <li><Link to="userefinfunctionalcompo">useRef</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;