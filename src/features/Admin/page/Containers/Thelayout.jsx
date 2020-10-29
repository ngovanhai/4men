import React from 'react';
import PropTypes from 'prop-types';

import {
    TheContent,
    TheSidebar,
    TheHeader
} from './index'


const Thelayout = (props) => {
    return (
        <div className="c-app c-default-layout">
            <TheSidebar />
            <div className="c-wrapper">
                <TheHeader />
                <div className="c-body">
                    <TheContent />
                </div>
            </div>
        </div>

    );
}

export default Thelayout