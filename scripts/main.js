/**
 * Created by User on 10/23/2016.
 */

var SLIDE_NUM, pillVisible;
$(function() {
    var $redSlide = $("#slide"),
        $buttons = $("#date").find('div'),
        $draggableElem = $( "#draggable"),
        $droppableElem = $( "#droppable"),
        $sliderElem = $( "#slider" ),
        $slideNumber = $("#slide-info-num"),
        SLIDE_NUM = 1,
        pillVisible = true;

    $sliderElem.slider({
        animate: "fast",
        disabled: false,
        min: 1,
        max: 21,
        slide: function(event, ui){
            switch(ui.value){
                case 1:
                    $redSlide.css("left","-8px");
                    break;
                case 2:
                    $redSlide.css("left","30px");
                    break;
                case 3:
                    $redSlide.css("left","67px");
                    break;
                case 4:
                    $redSlide.css("left","104px");
                    break;
                case 5:
                    $redSlide.css("left","142px");
                    break;
                case 6:
                    $redSlide.css("left","179px");
                    break;
                case 7:
                    $redSlide.css("left","216px");
                    break;
                case 8:
                    $redSlide.css("left","254px");
                    break;
                case 9:
                    $redSlide.css("left","292px");
                    break;
                case 10:
                    $redSlide.css("left","329px");
                    break;
                case 11:
                    $redSlide.css("left","367px");
                    break;
                case 12:
                    $redSlide.css("left","405px");
                    break;
                case 13:
                    $redSlide.css("left","442px");
                    break;
                case 14:
                    $redSlide.css("left","479px");
                    break;
                case 15:
                    $redSlide.css("left","517px");
                    break;
                case 16:
                    $redSlide.css("left","554px");
                    break;
                case 17:
                    $redSlide.css("left","591px");
                    break;
                case 18:
                    $redSlide.css("left","628px");
                    break;
                case 19:
                    $redSlide.css("left","667px");
                    break;
                case 20:
                    $redSlide.css("left","703px");
                    break;
                case 21:
                    $redSlide.css("left","741px");
                    break;
                default:
                    console.log("Error");
            }
        }
    });
    $draggableElem.draggable();
    $droppableElem.droppable({
        drop: function() {
            $draggableElem.fadeOut(700, function(){
                pillVisible = false;
                $("#patient").addClass("happy");
            });
        }
    });
    $buttons.on("click", toggleBtn);

    $("#leftArrow").on('click', function(){
        if( SLIDE_NUM === 2){
            SLIDE_NUM = 1;
            $slideNumber.html("1");
            $sliderElem.slider("enable");
            $buttons.on("click", toggleBtn);
            if(pillVisible){
                $draggableElem.draggable("enable");
            }
        }else{
            return;
        }
    });
    $("#rightArrow").on('click', function(){
        if( SLIDE_NUM === 1){
            SLIDE_NUM = 2;
            $slideNumber.html("2");
            $sliderElem.slider("disable");
            $buttons.off("click");
            if(pillVisible){
                $draggableElem.draggable("disable");
            }
        }else{
            return;
        }
    });

    function toggleBtn(){
        if($(this).hasClass("pushed")){
            return;
        }
        else{
            $(this).addClass("pushed");
            $buttons.not($(this)).each(function(){
                $(this).removeClass("pushed");
            });
        }
    }
});