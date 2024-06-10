import clear from '../assets/clear.jpg';
import clouds from "../assets/cloudy.jpg";
import fog from "../assets/fog.jpg";
import rain from '../assets/rain.jpg'
import snow from "../assets/snow.jpg";
import thunder from "../assets/thunder.jpg";
import mist from "../assets/mist.jpg"
import haze from '../assets/haze.jpg'
import thunderstorm from"../assets/thunderstorm.jpg"
export default function setBackground(condition) {
  
    const images = {
        clear: clear,
        clouds: clouds,
        fog: fog,
        rain: rain,
        snow: snow,
        thunder: thunder,
        mist:mist,
        haze:haze,
        thunderstorm:thunderstorm
    };

    const lowerCaseCondition = condition.toLowerCase();
    return images[lowerCaseCondition] || clear;
}
