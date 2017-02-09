import React from 'react';

//Component
import LanguageIcon from '../components/LanguageIcon'

//Constant for View
import Icons from '../constants/Index'

class Index extends React.Component {

    constructor (props) {
        super(props);

        this.hover = new Audio('../sounds/hover.mp3');
        this.hover.volume = 0.2;
    }

    play () {
        this.hover.currentTime=0;
        this.hover.play();
    }

    click (event) {
        this.props.swapView(event.target.id);
    }

    render() {

        return (
            <div className="index-wrapper content-wrapper">
                <img className="micro-circuit" src="../images/index/index-circuit.svg" />

                {
                    Icons.map((icon, i) => {
                        return <LanguageIcon hover={this.play.bind(this)} key={i} id={icon.key} src={icon.src} click={this.click.bind(this)}/>
                    })
                }

                <img onClick={this.props.swapView} className="micro-circuit swap-comp-tech" src="../images/index/more.svg" />
            </div>
        );

    }

}

export default Index