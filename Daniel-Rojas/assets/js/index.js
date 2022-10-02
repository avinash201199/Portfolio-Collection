function updateScroll(){
  let element = document.getElementById("screen");
  element.scrollTop = element.scrollHeight;
}

function generateLine(text,html){
  let line = document.createElement("div");
  line.className = "line";
  if(html){
    line.innerHTML = text;
  }else{
    line.innerText = text;
  }
 
  return line;
}

function insertLine(text,html =false){
  let newLine = generateLine(text,html);
  $("#screen").append(newLine);
  updateScroll();
  return newLine;
}

function loading(){
  console.log("Loading");
  let insertedLine = insertLine("$ Loading console");
  let counter = 0;

  loadingMessage = () =>{
    if(counter == 5){
      clearInterval(interval);
      $('#input').prop('disabled',false);
      insertLine("$");
      insertLine(
      "░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗\n"+
      "░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝\n"+
      "░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░\n"+
      "░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░\n"+
      "░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗\n"+
      "░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝\n");

      insertLine("To see the list of commands type '<strong>help</strong>' or type '<strong>cv</strong>' to see all the information",true);
      $('#input').focus();
      return;
    }
    insertedLine.innerText += ".";
    counter+=1
  }
  interval = setInterval(loadingMessage,350);

}

function readCommand(event){
  if (event.key != "Enter") {
    return;
  }
  const command = event.target.value.trim().toLowerCase();
  event.target.value='';

  if(command === ""){
    return;
  }

  if(command == "help"){
    helpCommand();
    return;
  }

  if(command == "cv"){
    cvCommand();
    return;
  }

  if(command == "cls"){
    clearCommand();
    return;
  }

  let element = commands[command];

  if(element){
    printContent(element,"$ ");
    return;
  }

  insertLine(`Command '${command}' is not recognized as an internal command.`);
}


function helpCommand(){
  insertLine("$ <strong>-- List all command information --</strong>");
  insertLine("<strong>cls</strong>: Clear the console",true);
  insertLine("<strong>cv</strong>: Show all CV information",true);

  let commandKeys = Object.keys(commands);
  for(let i = 0; i < commandKeys.length; i++){
    let command = commands[commandKeys[i]];
    insertLine(`<strong>${commandKeys[i]}</strong>: ${command.description}`,true);
  }
}

function cvCommand(){
  insertLine("\n$ <strong>--Information--</strong>\n",true);
  printContent(commands['whoiam']);
  printContent(commands['web']);
  printContent(commands['github']);
  insertLine("\n<strong>--Experience--</strong>\n",true);
  printContent(commands['experience']);
  insertLine("\n<strong>--Education--</strong>\n",true);
  printContent(commands['education']);
  insertLine("\n<strong>--Projects--</strong>\n",true);
  printContent(commands['projects']);
}

function clearCommand(){
  let element = document.getElementById("screen");
  element.innerHTML = "";
  updateScroll();
}

function printContent(command,prefix=""){
  if(command.multiline){
    if(prefix != ''){
      insertLine(prefix)
    }
    for(let x = 0; x< command.content.length; x++){
      insertLine(`${command.content[x]}`)
    }
    return;
  }
  insertLine(`${prefix}${command.content}`)

}
