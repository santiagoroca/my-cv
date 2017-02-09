import React from 'react';

class Project extends React.Component {

    render() {

        return (
            <div>
                <img src={this.props.src}/>

                <div className="technology-description">
                    {this.props.description}
                </div>
            </div>
        );

    }

}

export default Project