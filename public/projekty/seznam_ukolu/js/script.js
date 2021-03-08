var myNodelist = document.getElementsByTagName("LI");
var i;

var todos = [];
getTodos();

function Todo(name) {
    this.name = name;
    this.completed = false;
}

function addNewTodo(name) {
    var t = new Todo(name);
    todos.push(t);
}

function saveTodos() {
    var str = JSON.stringify(todos);
    localStorage.setItem("todos", str);
}

function deleteTodos() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        var str = div.innerHTML;
        var newstr = str.slice(0,str.indexOf("<"));
        var item = todos.findIndex((v) => v.name === newstr);
        todos.splice(item,1);
        saveTodos();
        };
    }
}

function getTodos() {
    var str = localStorage.getItem("todos");
    todos = JSON.parse(str);
    if (!todos) {
        todos = [];
    }
    for (var item in todos) {
        var todo = todos[item];
        var name = todo.name;
        var completed = todo.completed;
        var li = document.createElement("li");
        var t = document.createTextNode(name);
        if (completed) li.classList.add("checked");
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    }
}

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;

deleteTodos();

document.getElementById("myInput").onkeypress = function(event){
    if (event.key === "Enter"){
        newElement();
    }
};

var list = document.querySelector("ul");


list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      var str = ev.target.innerHTML;
      var newstr = str.slice(0,str.indexOf("<"));
      var item = todos.find((v) => v.name === newstr);
      if (item.completed === true) item.completed = false;
      else item.completed = true;
      saveTodos();
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Musíš napsat úkol!");
  } else {
    document.getElementById("myUL").appendChild(li);
    addNewTodo(inputValue);
    saveTodos();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  deleteTodos();
}
