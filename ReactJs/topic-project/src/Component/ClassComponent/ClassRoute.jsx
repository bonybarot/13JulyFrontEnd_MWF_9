import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx';
import JSXClassCompo from './02JSXClassCompo.jsx';
import PropsInClassCompo from './03PropsInClassCompo.jsx';
import StateInClassCompo from './04StateInClassCompo.jsx';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo.jsx';
import ConditionalRenderingInClassCompo from './06ConditionalRenderingInClassCompo.jsx';
import ListKeysInClassCompo from './07ListKeysInClassCompo.jsx';
import ControlledCompoInClassCompo from './08ControlledCompoInClassCompo.jsx';
import UnControlledCompoInClassCompo from './09UnControlledCompoInClassCompo.jsx';
import SpreadVsRestCompo from './10SpreadVsRestCompo.jsx';
import CompositionVsInheritance from './11CompositionVsInheritance.jsx';
import ArrayMap from './12array';
import APIExample from './13APIExample.jsx';
import CssExample from './14CssExample';
import StyledCompoExample from './15StyledCompoExample';
import StateLifting from './16stateLifting/Mainfile';
import HocClassCompo from './17HocClassCompo/HocClassCompo.jsx';

class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="jsxclasscompo" element={<JSXClassCompo />} />
                        <Route path="propsinclass" element={<PropsInClassCompo />} />
                        <Route path="stateinclass" element={<StateInClassCompo />} />
                        <Route path="statelifecycleinclass" element={<StateLifeCycleInClassCompo />} />
                        <Route path="conditionalrendering" element={<ConditionalRenderingInClassCompo />} />
                        <Route path="listandkeys" element={<ListKeysInClassCompo />} />
                        <Route path="controlledcompo" element={<ControlledCompoInClassCompo />} />
                        <Route path="uncontrolledcompo" element={<UnControlledCompoInClassCompo />} />
                        <Route path="spreadvsrest" element={<SpreadVsRestCompo />} />
                        <Route path="compositionvsinheritance" element={<CompositionVsInheritance />} />
                        <Route path="arraymap" element={<ArrayMap />} />
                        <Route path="apiexample" element={<APIExample />} />
                        <Route path="cssexample" element={<CssExample />} />
                        <Route path="cssstyledcomponentexample" element={<StyledCompoExample />} />
                        <Route path="stateliftingclasscompo" element={<StateLifting />} />
                        <Route path="hocclasscompo" element={<HocClassCompo />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;
