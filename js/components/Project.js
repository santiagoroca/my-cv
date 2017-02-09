import React from 'react';

import Video from '../components/common/Video'

class Project extends React.Component {

    render() {

        return (

            <div className="project-wrapper">

                <div className="project-inner-wrapper">

                    <div className="background-video">
                        {this.props.video &&
                            <Video src={this.props.video} />
                        }
                    </div>

                    <div className="project-description-wrapper">

                        <div className="project-name">
                            {this.props.name} <span className="sub-title">{' - ' + this.props.position}</span>
                        </div>

                        <div className="project-description">
                            {this.props.description}
                        </div>

                        <div className="project-example-data">

                            {
                                this.props.exampleData.map((src, i) => {
                                    let rand = (Math.floor(Math.random() * 20) + 1) * (Math.random() < 0.5 ? -1 : 1);

                                    return (
                                        <div key={i}>
                                            <img style={{transform: 'rotate(' + rand + 'deg) translate(0px, 0px)'}} src={src}/>
                                        </div>
                                    )
                                })

                            }

                        </div>

                        <div className="project-technologies">
                            {
                                this.props.technologies.map((src, i) => {
                                    return <img key={i} src={src}/>;
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>
        );

    }

}

export default Project