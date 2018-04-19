import sayHello from './lib/sayHello.js';
import { Calculator } from './lib/Calc.js';
import Gallery from './lib/Gallery';
import 'slick-carousel';
sayHello();

let calc = new Calculator('.calc');

let main = new Calculator('.main');


var mainImgArr = [];
var obj = {};
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/photos?_limit=10',
  type: 'POST',
  dataType: 'jsonp',
  jsonp: 'callback',
  jsonpCallback: 'jsonpCallback',
  success: function(result) {
    $.each(result, function(i) {
      var obj = {};
      obj.src = result[i].url;
      obj.thumb = result[i].thumbnailUrl;
      mainImgArr.push(obj);
    });
  }});


let gallery = new Gallery('.gallery');

gallery.initSlick(mainImgArr);