// var sekunde = 10;

// setInterval( function(){
//     sekunde--;

//     if(sekunde >= 0){
//         document.getElementById('brSek').innerHTML = sekunde;
//     }
//     if(sekunde === 0){
//         document.getElementById('brSek').innerHTML = "Vreme je isteklo";
//     }
// }, 1000);






var funkcijaBrojanja = (function () {

    var brojac = 0;
    return function () {return brojac += 1;}
})();



function brojanje(){
    document.getElementById('broj').innerHTML = funkcijaBrojanja(); 
    setInterval( function(){
        sekunde--;
            
        if(sekunde >= 0){
            document.getElementById('brSek').innerHTML = sekunde;
        }
            
        if(sekunde === 0){
            document.getElementById('brSek').innerHTML = "Vreme je isteklo";
            alert("Vas rezultat je " + (funkcijaBrojanja()-1));
            
         }
     }, 1000);
}

var sekunde = 10;





