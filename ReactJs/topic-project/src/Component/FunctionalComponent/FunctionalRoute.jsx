import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import Clock from './01Clock';
import FunctionalCompoExample from './02functionalCompo.jsx';
import StateExampleFunctionalCompo from './03StateExampleFunctionalCompo.jsx';
import UseEffectExample from './04useEffectExample';
import UseLayoutEffectExample from './05UseLayoutEffectExample.jsx';
import UseContextExample from './06UseContextExample.jsx';
import UseReducerExample from './07UseReducerExample.jsx';
import UseCallBackExample from './08UseCallBackExample.jsx';
import UseMemoExample from './09UseMemoExample';
class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalclock" element={<Clock />} />
                        <Route path="functionalcompoexample" element={<FunctionalCompoExample />} />
                        <Route path="stateexampleinfunctionalcompo" element={<StateExampleFunctionalCompo />} />
                        <Route path="useeffectexampleinfunctionalcompo" element={<UseEffectExample />} />
                        <Route path="uselayouteffectexampleinfunctionalcompo" element={<UseLayoutEffectExample />} />
                        <Route path="useusecontextinfunctionalcompo" element={<UseContextExample />} />
                        <Route path="usereducerinfunctionalcompo" element={<UseReducerExample />} />
                        <Route path="usecallbackinfunctionalcompo" element={<UseCallBackExample />} />
                        <Route path="usememoinfunctionalcompo" element={<UseMemoExample />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;
