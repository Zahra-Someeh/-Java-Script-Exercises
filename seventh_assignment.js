//DOM manipulation:
//ex 1:
function changeText(){
    const myElement=document.getElementById("change");
    myElement.textContent="Leran it very well :)";
}
   
   
//ex 2:
function addItem(){
    var ulList=document.getElementById("myList")
    var liList=document.createElement("li");
    var newItem=window.prompt(" Enter new item");
    if(newItem){
        liList.textContent=newItem;
        ulList.appendChild(liList);

    }else{
        window.alert("please add a item");
    }

}

//ex 3:
function changeImage(){
    const image=document.getElementById("img1")
    if(image.src.includes("image1")){
        image.src="img/flower2.jpg?text=image2";
    }else{
        image.src="img/flower1.jpeg?text=image1";
    }

}

//ex 4:
function validateForm(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    
    const correctUsername='zahra';
    const correctPassword='123456';
    
    if(username===correctUsername && password===correctPassword){
        window.alert('login success')
    }else{
        window.alert('Invalid login')
}
}