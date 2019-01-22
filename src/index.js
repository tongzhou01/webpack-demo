import _ from 'lodash';
import './style.css';
import image from './image.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' - ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div
    var myIcon = new Image();
    myIcon.src = image;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}
document.body.appendChild(component());