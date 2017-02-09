import React from 'react';
import $ from "jquery";

class LanguageIcon extends React.Component {

    render() {

        return (
            <img
                onMouseEnter={this.props.hover}
                className="center icon-lang"
                src={this.props.src}
                id={this.props.id}
                onClick={this.props.click.bind(this)}
            />
        );

    }

}

export default LanguageIcon