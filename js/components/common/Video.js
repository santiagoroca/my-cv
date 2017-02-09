import React from 'react';

class LanguageIcon extends React.Component {

    render() {

        return (
            <video muted className="video-container video-container-overlay" autoPlay="true" loop="true">
                <source type="video/mp4" src={this.props.src} />
            </video>
        );

    }

}

export default LanguageIcon