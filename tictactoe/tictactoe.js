//function for checking combitions
function ttt() {
    var b1 = document.getElementById('c1').value;
    var b2 = document.getElementById('c2').value;
    var b3 = document.getElementById('c3').value;
    var b4 = document.getElementById('c4').value;
    var b5 = document.getElementById('c5').value;
    var b6 = document.getElementById('c6').value;
    var b7 = document.getElementById('c7').value;
    var b8 = document.getElementById('c8').value;
    var b9 = document.getElementById('c9').value;
    if ((b1 == 'x') && (b2 == 'x') && (b3 == 'x')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c2').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b1 == 'x') && (b4 == 'x') && (b7 == 'x')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c4').style.backgroundColor="white";
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b1 == 'x') && (b5 == 'x') && (b9 == 'x')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
    }
    else if ((b2 == 'x') && (b5 == 'x') && (b8 == 'x')) {
        document.getElementById('c2').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c8').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b3 == 'x') && (b5 == 'x') && (b7 == 'x')) {
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b3 == 'x') && (b6 == 'x') && (b9 == 'x')) {
        document.getElementById('c6').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
    }
    else if ((b4 == 'x') && (b5 == 'x') && (b6 == 'x')) {
        document.getElementById('c4').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c6').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b7 == 'x') && (b8 == 'x') && (b9 == 'x')) {
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('c8').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player x wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
    }

    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c2').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c4').style.backgroundColor="white";
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById('c1').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
    }
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById('c8').style.backgroundColor="white";
        document.getElementById('c2').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c6').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById('c6').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('c3').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById(c1).disabled = true;
        document.getElementById(c2).disabled = true;
        document.getElementById(c4).disabled = true;
        document.getElementById(c5).disabled = true;
        document.getElementById(c7).disabled = true;
        document.getElementById(c8).disabled = true;
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById('c4').style.backgroundColor="white";
        document.getElementById('c5').style.backgroundColor="white";
        document.getElementById('c6').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c7').disabled = true;
        document.getElementById('c8').disabled = true;
        document.getElementById('c9').disabled = true;
    }
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById('c7').style.backgroundColor="white";
        document.getElementById('c8').style.backgroundColor="white";
        document.getElementById('c9').style.backgroundColor="white";
        document.getElementById('turn').innerHTML="player 0 wins";
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        document.getElementById('c5').disabled = true;
        document.getElementById('c6').disabled = true;
    }
    //check for tie
    else if ((b1 == 'x' || b1 == '0') && (b2 == 'x'
        || b2 == '0') && (b3 == 'x' || b3 == '0') &&
        (b4 == 'x' || b4 == '0') && (b5 == 'x' ||
            b5 == '0') && (b6 == 'x' || b6 == '0') &&
        (b7 == 'x' || b7 == '0') && (b8 == 'x' ||
            b8 == '0') && (b9 == 'x' || b9 == '0')) {
                document.getElementById('turn').innerHTML="Match Tie!"
    }
    //check for turn(X or 0)
    else{
        if (flag == 1) {
            document.getElementById('turn').innerHTML="Player X Turn";
        }
        else {
            document.getElementById('turn').innerHTML="Player 0 Turn";

        }
    }
}
//functions for setting values for each box(X or 0)
 flag = 1;
function cel1() {
   
    if (flag == 1) {
        document.getElementById('c1').value = "x"
        document.getElementById('c1').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c1').value = "0";
        document.getElementById('c1').disabled = true;
        flag = 1;
    }
}
function cel2() {
    if (flag == 1) {
        document.getElementById('c2').value = "x"
        document.getElementById('c2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c2').value = "0";
        document.getElementById('c2').disabled = true;
        flag = 1;
    }
} function cel3() {
    if (flag == 1) {
        document.getElementById('c3').value = "x"
        document.getElementById('c3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c3').value = "0";
        document.getElementById('c3').disabled = true;
        flag = 1;
    }
} function cel4() {
    if (flag == 1) {
        document.getElementById('c4').value = "x"
        document.getElementById('c4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c4').value = "0";
        document.getElementById('c4').disabled = true;
        flag = 1;
    }
} function cel5() {
    if (flag == 1) {
        document.getElementById('c5').value = "x"
        document.getElementById('c5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c5').value = "0";
        document.getElementById('c5').disabled = true;
        flag = 1;
    }
} function cel6() {
    if (flag == 1) {
        document.getElementById('c6').value = "x"
        document.getElementById('c6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c6').value = "0";
        document.getElementById('c6').disabled = true;
        flag = 1;
    }
} function cel7() {
    if (flag == 1) {
        document.getElementById('c7').value = "x"
        document.getElementById('c7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c7').value = "0";
        document.getElementById('c7').disabled = true;
        flag = 1;
    }
} function cel8() {
    if (flag == 1) {
        document.getElementById('c8').value = "x"
        document.getElementById('c8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c8').value = "0";
        document.getElementById('c8').disabled = true;
        flag = 1;
    }
} function cel9() {
    if (flag == 1) {
        document.getElementById('c9').value = "x"
        document.getElementById('c9').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('c9').value = "0";
        document.getElementById('c9').disabled = true;
        flag = 1;
    }
}