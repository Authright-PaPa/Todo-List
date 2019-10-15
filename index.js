import datetime from './date.js';
import { showList } from './view.js';
import { list, addTask, removeTask, checkTask, ac } from './model.js';

document.getElementById("time").innerHTML = datetime();
const data = JSON.parse(localStorage.getItem('items'));
console.log("Current local storage: ", data);
showList(data);

const Controller = (function () {
    const addItem = function (e) {
        e.preventDefault();

        const add_value = add_input.value;

        addTask(add_value);
        showList(list);

        form.reset();
    };

    const removeItem = function (e) {
        if (e.target.tagName !== 'I') return;

        const item_id = e.target.parentNode.parentNode.id;
        const item_index = item_id.split('-')[1];

        removeTask(item_index);
        showList(list);
    }

    const checkItem = function (e) {
        if (e.target.tagName !== 'INPUT') return;

        const item_id = e.target.parentNode.id;
        const item_index = item_id.split('-')[1];

        checkTask(item_index);
        showList(list);
    }

    const hideList = () => {
        const list = document.getElementById("complete-ul-list");
        const title = document.getElementById("list-title")

        if (list.style.display == "none") {
            title.innerText = "Hide Completed Tasks";
            list.style.display = "block";

        } else {
            title.innerText = "Show Completed Tasks";
            list.style.display = "none";
        }
    }

    const form = document.forms['list-form'];
    const add_input = form['todo'];
    const section = document.querySelector('section');
    const hide_title = document.getElementById('list-title');

    form.addEventListener('submit', addItem);
    // form.addEventListener('keyup', ac);
    section.addEventListener('click', removeItem);
    section.addEventListener('change', checkItem);
    hide_title.addEventListener('click', hideList);
})();