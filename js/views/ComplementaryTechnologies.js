import React from 'react';
import $ from "jquery";

class Index extends React.Component {

    render() {

        return (
            <div className="complementary-technologies-wrapper content-wrapper">
                <img className="swap-index center" src="../images/comp-tech-circuit.svg" />

                <div className="complementary-technologies-javascript">
                    <img className="swap-index center" src="../images/comptech/backbone.svg" />
                    <img className="swap-index center" src="../images/comptech/angular.svg" />
                    <img className="swap-index center" src="../images/comptech/react.svg" />
                </div>
            </div>
        );

    }

}

export default Index