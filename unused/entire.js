import datetime from '../date.js';
// import Data from './model.js';
// import UI from './view.js';

document.getElementById("time").innerHTML = datetime();

const Data = (function () {
    let list = [];

    const Item = function (content) {
        this.content = content;
    };
    Item.prototype.finished = false;

    const addTask = (content) => {
        console.log("Adding task to todo list...");
        const task = new Item(content);
        list.push(task);
        console.log(list);
    };

    const removeTask = (item_index) => {
        console.log("Deleting the task...");
        list.splice(item_index, 1);
    };

    const checkTask = (item_index) => {
        console.log("Checking the completed task...")
        const current_item = list[item_index];
        current_item.finished = !current_item.finished;
        console.log("New list", list);
    };

    return {
        list: list,
        Item: Item,
        addTask: addTask,
        removeTask: removeTask,
        checkTask: checkTask
    }
})();

const Controller = (function () {
    const addItem = function (e) {
        e.preventDefault();

        console.log("Adding task to todo list...");
        const add_value = add_input.value;

        Data.addTask(add_value);
        UI.showList(Data.list);

        form.reset();
    };

    // const searchItem = function() {

    // 	const search_value = search_input.value;

    // 	const filter_list = Data.list.filter(function(item) {
    // 		return item.content.indexOf(search_value) > -1;
    // 	});	

    // 	UI.showList(filter_list);
    // }

    const removeItem = function (e) {
        if (e.target.tagName !== 'I') return;

        const item_id = e.target.parentNode.parentNode.id;
        const item_index = item_id.split('-')[1];

        Data.removeTask(item_index);

        UI.showList(Data.list);
    }


    const checkItem = function (e) {
        if (e.target.tagName !== 'INPUT') return;

        const item_id = e.target.parentNode.id;
        const item_index = item_id.split('-')[1];

        console.log(item_id);
        console.log(item_index);

        Data.checkTask(item_index);

        UI.showList(Data.list);
    }

    const form = document.forms['list-form'];
    const add_input = form['todo'];
    // var search_input = form['search-item__input'];

    const section = document.querySelector('section');

    form.addEventListener('submit', addItem);
    // search_input.addEventListener('input', searchItem);

    section.addEventListener('click', removeItem);
    section.addEventListener('change', checkItem);
})();

const UI = (function () {
    const toDoUl = document.getElementById("ul-list");
    const completeUl = document.getElementById("complete-ul-list");

    const showList = function (list) {

        toDoUl.innerHTML = '';
        completeUl.innerHTML = '';

        list.forEach(function (item, i) {

            if (!item.finished) {
                const toDoUl_HTML =
                    '<li class="li-list" id="item-' + i + '">' +
                    '<input type="checkbox" class="status">' +
                    '<label>' + item.content + '</label>' +
                    '<button class="delete papa-button">' +
                    '<i class="material-icons">delete_outline</i>' +
                    '</button>' +
                    '</li>';
                toDoUl.insertAdjacentHTML('afterbegin', toDoUl_HTML);
                // console.log(toDoUl);
            } else if (item.finished) {
                const completeUl_HTML =
                    '<li class="list" id="item-' + i + '">' +
                    '<input type="checkbox" class="status" checked>' +
                    '<label">' + item.content + '</label">' +
                    // '<button class="redo papa-button">' +
                    // '<i class="material-icons"">redo</i>' +
                    // '</button>' +
                    '<button class="delete papa-button">' +
                    '<i class="material-icons"">delete_outline</i>' +
                    '</button>' +
                    '</li>';
                completeUl.insertAdjacentHTML('afterbegin', completeUl_HTML);
                console.log(completeUl);
            }
        });
    };

    return {
        showList: showList
    }
})();