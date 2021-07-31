import React from 'react';

const Header = ({ showSideNav, setShowSideNav, isMobile }) => {
    function sideNavCollapse(e) {
        const toggleNav = showSideNav == 'showSideNav' ? 'hideNavBar' : 'showSideNav';
        setShowSideNav(toggleNav);
    }

    return (
        <header className="pageHeader">
            { !isMobile && <span className={ showSideNav } onClick={ sideNavCollapse }> <i className="fas fa-bars"></i> </span> }
            <h1>Cards</h1>
        </header>
    )
}

export default Header;