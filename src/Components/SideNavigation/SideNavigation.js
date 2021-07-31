import React from 'react';

function SideNavigation ({ showSideNav }) {

    return (
        <div className={`sideNavigation ${ showSideNav }`}></div>
    )
}

export default SideNavigation;