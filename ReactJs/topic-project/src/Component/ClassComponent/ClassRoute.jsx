import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx';
import JSXClassCompo from './02JSXClassCompo.jsx';
import PropsInClassCompo from './03PropsInClassCompo.jsx';

class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="jsxclasscompo" element={<JSXClassCompo />} />
                        <Route path="propsinclass" element={<PropsInClassCompo />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;
