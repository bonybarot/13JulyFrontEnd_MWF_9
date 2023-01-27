import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Compo Intro</Link></li>
                    <li><Link to="jsxclasscompo">JSX</Link></li>
                    <li><Link to="propsinclass">Props</Link></li>
                    <li><Link to="stateinclass">State</Link></li>
                    <li><Link to="statelifecycleinclass">State LifeCycle</Link></li>
                    <li><Link to="conditionalrendering">Conditional Rendering</Link></li>
                    <li><Link to="listandkeys">List & Keys</Link></li>
                    <li><Link to="controlledcompo">Controlled Compo</Link></li>
                    <li><Link to="uncontrolledcompo">Uncontrolled Compo</Link></li>
                    <li><Link to="spreadvsrest">Spread vs. Rest</Link></li>
                    <li><Link to="compositionvsinheritance">Composition vs. Inheritance</Link></li>
                    <li><Link to="arraymap">Access Array via map</Link></li>
                    <li><Link to="apiexample">API Example</Link></li>
                    <li><Link to="cssexample">CSS Example</Link></li>
                    <li><Link to="cssstyledcomponentexample">CSS Styled Component Example</Link></li>
                    <li><Link to="stateliftingclasscompo">State lifting Class Component Example</Link></li>
                    <li><Link to="hocclasscompo">High Order Class Component Example</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;