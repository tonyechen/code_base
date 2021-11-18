import React from 'react';
import squidGame1 from '../images/squid-game-1.jpg';
function Episode(props) {
    return (
        <div class="movie-list">
            <div>
                {props.prop1}
            </div>
            <div>
                <img
                    class="image"
                    src={squidGame1}
                    alt="Squid Game Image"
                    width="200px"
                />
            </div>
            <div  class="text">
                <h3 class="title">
                    {props.prop2}
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</p>
            </div>
        </div>

    );
}

function EpisodeList () {
    return (
        <div>
                <Episode 
                    prop1="1"
                    prop2="Red light, Green light"
                />
                <Episode 
                    prop1="2"
                    prop2="Title of Game 2"
                />
                <Episode 
                    prop1="3"
                    prop2="Title of Game 3"
                />
        </div>
    );
}

export default EpisodeList;