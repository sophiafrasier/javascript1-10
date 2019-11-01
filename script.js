//problem one
function sleep_in(weekday,vacation) {
    if (!weekday|| vacation){
        return true;
    }else{
        return false;
    }
}

//problem two
function monkey_trouble(a_smile, b_smile) {
    if (a_smile && b_smile){
        return true;
    }
    if (!a_smile && !b_smile){
        return true;

    }else{
        return false;
    }
}

//problem three
function string_times(string,n){
    var newString="";
    for (var i = 0; i < n; i++) {
        newString = newString + string;
    }
    return newString;
}

//problem four
function front_times(string, n){
    var newString= "";
    for (var i = 0; i < n; i++) {
        var firstThree= string.substring(0,3);
        var newString = newString + firstThree;
    }
    return newString;
}


//problem five
function string_bits(string){
    var newString= "";
    for (var i=0; i< string.length; i= i+2){
        if (i%2 == 0){
            newS=string.substring (i, i+1);
            newString= newString+ newS;
        }
    }
    return newString;

}


//problem six
function caughtSpeeding(speed, birthday){
   if (birthday == false) {
       if (speed <= 60) {
           return ("0");

       }
       if ((61 <= speed) && (speed <= 80)) {
           return ("1");

       }
       if (speed >= 81) {
           return ("2");


       }
   }else{
       if (speed <= 65) {
           return ("0");

       }
       if ((66 <= speed) && (speed <= 85)) {
           return ("1");

       }
       if (speed >= 86) {
           return ("2");


       }
   }


}


//problem seven
function fizz_buzz(number){
    if (number %3==0 && number %5==0) {
        return ("FizzBuzz");
    }
    if(number %3 ==0) {
        return("Fizz");
    }
    if (number %5==0){
        return("Buzz");
    }else{
        return(number+ "!");
    }
}


//problem eight
function teaParty(tea, candy){
    if(tea>=5 && candy>=5) {
        if (tea>= 2*candy || candy>= 2*tea){
            return ("2");
        }else{
            return ("1");
        }
    }
    if (tea< 5 || candy<5){
        return ("0");
    }
}

//problem nine
function blackjack(num1, num2){
    if (num1 > 21 && num2> 21){
        return ("0");
    }else {
        if (num2 > 21) {
            return num1;
        }
        if (num1 > 21) {
            return num2;
        }
        if (21 - num1 > 21 - num2) {
            return num2;
        }
        if (21 - num1 < 21 - num2) {
            return num1;
        }
    }
}

//problem ten
function loneSum(a,b,c){
    if ((a != b)&& (b !=c)&& (a!=c)){
        return (sum= a+ b+ c);
    }

    if((a==b) && (b==c)){
        return ("0");
    }
    if((a != b)&& (a!=c)){
        return a;
    }
    if((a==c)&&(b !=c)){
        return b;
    }
    if((a==b)&& (b!=c)){
        return c;
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}

