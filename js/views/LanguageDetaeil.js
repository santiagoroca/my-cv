//Core
import React from 'react';

//Vendor
import $ from 'jquery';

//View
import Project from '../components/Project';

class LanguageDetail extends React.Component {

    swapLeft () {
        let left = parseInt($("#language-detail-inner-container").css('left'));

        $("#language-detail-inner-container").css({
            left: (left + 1360) >= 0 ? 0 : left + 1360
        })
    }

    swapRight () {
        let left = parseInt($("#language-detail-inner-container").css('left'));

        $("#language-detail-inner-container").css({
            left: (left - 1360) <= -(1360 * this.props.projects.length) ? left : left - 1360
        })
    }

    render () {

        return (
            <div id="language-detail-container">
                <img onClick={this.swapLeft.bind(this)} id="project-swap-left" src="../images/comp-tech-circuit-from-top.svg" />
                <img id="circuit-close-from-top" src="../images/comp-tech-circuit-from-top.svg" />
                <img onClick={this.swapRight.bind(this)} id="project-swap-right" src="../images/comp-tech-circuit-from-top.svg" />

                <div id="language-detail-inner-container">
                    {
                        this.props.projects.map((projectInfo, i) => {
                            return <Project key={i} {...projectInfo} />
                        })
                    }
                </div>
            </div>
        );

    }

}

export default LanguageDetail