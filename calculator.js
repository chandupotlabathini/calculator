let button=document.getElementsByTagName('button')
console.log(button);
let result =document.getElementById('result');

for(i=0;i<button.length;i++){
    button[i].onclick=function(){
        let input = this.innerText;
        updateDispaly(input)
    }
}

function updateDispaly(input){
    let currentDisplay =result.innerText
    if(currentDisplay=="0"){
        if(input!="c"&&input!="DEL"&& input!="="){
        result.innerText=""
    result.innerText=input
        }

    }

    else{
        if(input=="DEL"){
            result.innerText= currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!=="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
        }
        if(input=="="){
            let display =result.innerText
            result.innerText=eval(display)
        }
    }

}