var submit_btn = document.getElementById("submit-button");
var code_box = document.getElementById("code-box");
var input_box = document.getElementById("input-box");
var output_box = document.getElementById("output-box");

output_box.innerHTML = "Running...";

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
            }
        }
    }
    txtFile.send(null);
}

YUI().use(
  'aui-ace-editor',
  function(Y) {
    new Y.AceEditor(
      {
        boundingBox: '#myEditor',
        mode: 'c++',
        value: 'int a = 1;'
      }
    ).render();
  }
);