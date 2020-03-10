// Libraries
import config from "./firebase.js";
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp(config);

function addTodo(sNewTodo){
    let oParagraph = document.createElement("p");
    oParagraph.innerHTML = `${sNewTodo}`;
    document.getElementById("todos").prepend(oParagraph);
}
document.getElementById("todoform").addEventListener("submit",
(evt) => {
    evt.preventDefault();
    let oNewTodo = document.getElementById("newTodo");
    let sNewTodo = oNewTodo.value;
    oNewTodo.value = "";
    addTodo(sNewTodo);
});