let list = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) : []

list = [{ content: 'Buy Starbucks at 9am' },
{ content: 'Feed bunnies' },
{ content: 'Purchase 2 bottles of milk' },
{ content: 'Contact Chuck for extra keys' },
{ content: 'Car Inspectiion Check' },
{ content: 'Go to gym' },
{ content: "Reorder BW's food & hay" }]

localStorage.setItem('items', JSON.stringify(list));

const Item = function (content) {
    this.content = content;
};
Item.prototype.finished = false;

const addTask = (content) => {
    console.log("Adding task to todo list...");
    const task = new Item(content);
    list.push(task);
    localStorage.setItem('items', JSON.stringify(list));
    console.log(list);
};

const removeTask = (item_index) => {
    console.log("Deleting the task...");
    list.splice(item_index, 1);
    localStorage.setItem('items', JSON.stringify(list));
    console.log(list);
};

const checkTask = (item_index) => {
    console.log("Checking the completed task...")
    const current_item = list[item_index];
    current_item.finished = !current_item.finished;
    console.log("New list", list);
};

const ac = (value) => {
    console.log("Enable autocomplete...")
    document.getElementById('datalist').innerHTML = '';

    const l = value.length;
    let tasks = [];
    for (var i = 0; i < localStorage.length; i++){
        tasks = localStorage.getItem(localStorage.key(i))
    }
    console.log(tasks)

    for (let i = 0; i < value.length; i++) {
        if (((value[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            const node = document.createElement("option");
            const val = document.createTextNode(value[i]);
            node.appendChild(val);
            document.getElementById("datalist").appendChild(node);
        }
    }

}

export { list, addTask, removeTask, checkTask, ac };