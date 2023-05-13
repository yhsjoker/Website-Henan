import {$} from "/modules/sample-jquery.js"

var points = document.querySelectorAll(".point");
var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");
var index = 0;
var time = 0;
var colors = ["rgb(3, 44, 16)", "rgb(214, 231, 235)", "aliceblue"];
var logoColors = ["rgb(116, 207, 156)", "rgb(214, 231, 235)", "rgb(4, 4, 53)"];
var homeColors = ["rgb(255, 255, 255)", "rgb(214, 231, 235)", "rgb(4, 4, 53)"];
var scenColors = ["rgb(3, 44, 16)", "rgb(214, 231, 235)", "rgb(4, 4, 53)"];
var cuisColors = ["rgb(3, 44, 16)", "rgb(214, 231, 235)", "rgb(4, 4, 53)"];
var timer;

function ClearActive(){
    for(var i = 0; i < points.length; i++){
        points[i].className = 'point';
    }
}

function GoIndex(){
    ClearActive();
    points[index].className = "point active";
    $('header').css('background-image', 'url(/images/home-page/home-page-' + index + '.jpg)');
    $('.bulletin-board').css('color', colors[index]);
    $('.learn-more-btn').css('border', "5px solid " + colors[index]);
    $('.learn-more-btn').css('color', colors[index]);
    $('.logo > a').css('color', logoColors[index]);
    $('.menu-item-home').css('color', homeColors[index]);
    $('.menu-item-scenery').css('color', scenColors[index]);
    $('.menu-item-cuisine').css('color', cuisColors[index]);
}

function GoLeft(){
    if(index == 0){
        index = 2;
    }
    else{
        index--;
    }
    GoIndex();
}

function GoRight(){
    if(index < 2){
        index++;
    }
    else{
        index = 0;
    }
    GoIndex();
}

function Play(){
    timer = setInterval(()=>{
        time++;
        if(time == 20){
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            if(top<100){
                GoRight();
            }
            time = 0;
        }
    }, 300)
}

export function AddEvent(){
    leftBtn.addEventListener('click', function(){
        GoLeft();
        time = 0;
    })
    
    rightBtn.addEventListener('click', function(){
        GoRight();
        time = 0;
    })

    for(var i=0; i<points.length; i++){
        points[i].addEventListener('click', function(){
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            GoIndex();
            time = 0;
        })
    }

    window.onscroll = function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if(top>100){
            $('nav').css('background-color', 'white');
            $('nav').css('border-bottom', '2px solid black');
            $('.logo a').css('color', 'deepskyblue');
            $('.menu-item-home').css('color', 'deeppink');
            $('.menu-item-scenery').css('color', 'cadetblue');
            $('.menu-item-cuisine').css('color', 'darkorchid');
            $('.sign-in a').css('color', 'deepskyblue');
            $('.sign-up a').css('color', 'deeppink');
            $('.search-box').css('border-color', 'black');
            $('.search-box').css('background-color', 'cornflowerblue');
        }
        else{
            $('nav').css('background', 'none');
            $('nav').css('border-bottom', 'none');
            $('.sign-in a').css('color', 'aliceblue');
            $('.sign-up a').css('color', 'aliceblue');
            $('.search-box').css('border-color', 'rgb(235, 221, 196)');
            $('.search-box').css('background', 'none');
            GoIndex();
        }
    }

    document.getElementsByClassName("learn-more-btn")[0].addEventListener('click',function(){
        document.getElementById("container").scrollIntoView(true);
    });

    Play();
}