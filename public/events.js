var submit_btn = document.getElementById("submit-button");
var code_box = document.getElementById("code-box");
var input_box = document.getElementById("input-box");
var output_box = document.getElementById("output-box");

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/c_cpp');

submit_btn.addEventListener("click", clicked);
function clicked(){
  output_box.innerHTML = "Running...";
}

readTextFile("code.cpp", 'code-box');
readTextFile("input.txt", 'input-box');
readTextFile("output.txt", 'output-box');

function readTextFile(filePath, id){
    var txtFile = new XMLHttpRequest();
	  txtFile.open("GET", filePath, true);

    txtFile.onreadystatechange = function (){
        if(txtFile.readyState === 4){
            if(txtFile.status === 200 || txtFile.status === 0){
                var allText = txtFile.responseText;
                var customTextElement = document.getElementById(id);
                customTextElement.innerHTML = allText;
                if(customTextElement === code_box){
                    editor.setValue(allText);
                }
            }
        }
    }
    txtFile.send(null);
}

editor.setOptions({
  fontSize: "12pt"
});

editor.getSession().on("change", function () {
    code_box.innerHTML=editor.getSession().getValue();
});
