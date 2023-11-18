let input=document.getElementById("screen");
let btn=document.querySelectorAll('button');
let screen='';
for(item of btn){
    item.addEventListener("click", function(e){
        console.log("button content=>" + e.target.innerText);
        let btnText= e.target.innerText;
        if(btnText == "X"){
            btnText = '*';
            screen += btnText;
            input.value = screen;
            console.log("X");                 
        }else if(btnText == "C"){
            screen = '';
            input.value = screen;                   
        }else if(btnText == "="){
            input.value = eval(screen);
        }else{
            screen += btnText;
            input.value = screen;
        }
    })
}
