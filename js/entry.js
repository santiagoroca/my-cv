require('../less/main.less');

'use strict';

import $ from 'jquery';

import React from "react";
import ReactDOM from "react-dom";

import Index from './views/Index';
import LanguageDetail from './views/LanguageDetaeil';

import initView from './constants/Projects'

const swapView = (id) => {

    ReactDOM.render(
        <LanguageDetail swapView={swapView} {...initView[id]} />,
        document.getElementById('bottom-page-container')
    );

    $('.index-wrapper').css({
        top: -800
    });

    $('#bottom-page-container').css({
        top: 0
    });
}

document.addEventListener('keypress', (keyEvent) => {
    $('.index-wrapper').css({
        top: 0
    });

    $('#bottom-page-container').css({
        top: 800
    });
});

ReactDOM.render(

    <div className="app-wrapper">
        <Index swapView={swapView}/>
        <div id="bottom-page-container"></div>
    </div>,

    document.getElementById('content')

); 