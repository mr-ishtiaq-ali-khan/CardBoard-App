import React, { Fragment, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './Components/Header/Header';
import SideNavigation from './Components/SideNavigation/SideNavigation';
import CardBoardView from './Components/CardBoard/CardBoardView';
import './Components/StyleSheets/CardBoard.css';

function App() {
    const [ showSideNav, setShowSideNav ] = useState('showSideNav');
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return(
        <>
            <Header showSideNav={ showSideNav } setShowSideNav={ setShowSideNav } isMobile={ isMobile } />
            <div className="appBodySection">
                { !isMobile && <SideNavigation showSideNav={ showSideNav } /> }
                <CardBoardView />
            </div>
        </>
    )
}

export default App;