//window object:
// ex 1:
function showAlert(){
    window.alert("Welcome to this website");
}


//ex 2:
function askUser(){
    var name=window.prompt("What is your name?");
    if(name){
        window.alert("Hello"+" "+ name);
    }else{
        window.alert("Hello, guest");
    }
   
    
    
}