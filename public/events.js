var submit_btn = document.getElementById("submit-button");
var code_box = document.getElementById("code-box");
var input_box = document.getElementById("input-box");
var output_box = document.getElementById("output-box");

var editor = ace.edit('editor');
var input = ace.edit('input');
var output = ace.edit('output');

// Set themes
editor.setTheme('ace/theme/monokai');
input.setTheme('ace/theme/monokai');
output.setTheme('ace/theme/monokai');

editor.getSession().setMode('ace/mode/c_cpp');

readTextFile("code.cpp", code_box, editor);
readTextFile("input.txt", input_box, input);
readTextFile("output.txt", output_box, output);

function readTextFile(filePath, box, disp_box){
    var txtFile = new XMLHttpRequest();
	  txtFile.open("GET", filePath, true);

    txtFile.onreadystatechange = function (){
        if(txtFile.readyState === 4){
            if(txtFile.status === 200 || txtFile.status === 0){
                var allText = txtFile.responseText;
                box.innerHTML = allText;
                disp_box.setValue(allText);
            }
        }
    }
    txtFile.send(null);
}

editor.setOptions({
  fontSize: "12pt"
});
input.setOptions({
  fontSize: "15pt"
});
output.setOptions({
  fontSize: "15pt"
});

editor.getSession().on("change", function () {
    code_box.innerHTML=editor.getSession().getValue();
});

input.getSession().on("change", function () {
    input_box.innerHTML=input.getSession().getValue();
});
