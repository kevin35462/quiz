/* global $ */

$(document).ready(function(){
    function question1(x){
        if(x === "reading"){
            return 1;
        } else if (x === "coding"){
            return 2;
        } else if (x === "playing a sport"){
            return 3;
        } else if (x === "designing clothing"){
            return 4;
        }
    }
    function question2(x){
        if(x === "waffles"){
            return 1;
        } else if (x === "pancakes"){
            return 2;
        } else if (x === "french toast"){
            return 3;
        }
    }
     function question3(x){
        if(x === "dolphin"){
            return 1;
        } else if (x === "whale"){
            return 2;
        } else if (x === "shark"){
            return 3;
    }
}
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore;
    });
    
});
