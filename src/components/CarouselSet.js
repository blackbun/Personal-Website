import React from 'react';
import * as B from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import landscapePic from '../images/landscape.jpg';
import cliffPic from '../images/cliff.jpg';
import steamPic from '../images/steam.jpg';
import colorsPic from '../images/colors.jpg';
import lakePic from '../images/lake.jpg';

export default class CarouselSet extends React.Component {
    render() {
        return (
            <B.Row className="myCarousel">
                <B.Col xs={12}>
                    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} >
                        <div className="carouselPic">
                            <img src={landscapePic} alt="landscape" />
                            <p className="legend">"He who learns but does not think is lost. He who thinks but does not learn is in great danger."  - Confucius</p>
                        </div>
                        <div className="carouselPic">
                            <img src={cliffPic} alt="cliff" />
                            <p className="legend">"I'm a great believer in luck and I find the harder I work, the more I have of it."  - Thomas Jefferson</p>
                        </div>
                        <div className="carouselPic">
                            <img src={steamPic} alt="aqua" />
                            <p className="legend">"Take risks. Ask the dumb questions. Fail if you have to, and then get up and do it again."  - Jacqueline Novogratz</p>
                        </div>
                        <div className="carouselPic">
                            <img src={colorsPic} alt="colors" />
                            <p className="legend">"Smile, breathe, and go slowly."  - Thich Nhat Hanh</p>
                        </div>
                        <div className="carouselPic">
                            <img src={lakePic} alt="lake" />
                            <p className="legend">"The beautiful thing about learning is that no one can take it away from you."  - B.B. King</p>
                        </div>
                    </Carousel>
                </B.Col>
            </B.Row>
        );
    }
}