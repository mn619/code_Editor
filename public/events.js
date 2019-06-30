var submit_btn = document.getElementById("submit-button");
var code_box = document.getElementById("code-box");
var input_box = document.getElementById("input-box");
var output_box = document.getElementById("output-box");

submit_btn.addEventListener("click", clicked);




readTextFile("code.cpp", 'code-box');
readTextFile("input.txt", 'input-box');
readTextFile("output.txt", 'output-box');
console.log('here');

console.log('there');

function clicked(){
	console.log("clicked");
	
}

function readTextFile(filePath, id){
	console.log(id);
    var txtFile = new XMLHttpRequest();
	txtFile.open("GET", filePath, true);

    txtFile.onreadystatechange = function (){
        if(txtFile.readyState === 4){
            if(txtFile.status === 200 || txtFile.status === 0){
                var allText = txtFile.responseText;
                var customTextElement = document.getElementById(id);
                console.log(customTextElement);
                customTextElement.innerHTML = txtFile.responseText;
            }
        }
    }
    txtFile.send(null);
}


