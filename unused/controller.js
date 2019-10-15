const Controller = (function () {

    import Data from './model.js';
    import UI from './view.js';

    const addItem = function (e) {
        e.preventDefault();
        console.log("Adding task to todo list...");

        // 取得增加輸入框值
        const add_value = add_input.value;

        // 加入清單陣列
        Data.addTask(add_value);

        //呈現清單
        UI.showList(Data.list);

        // 重設表單
        form.reset();
    };

    // 搜尋事項
    // const searchItem = function() {

    // 	// 取得搜尋輸入框值
    // 	const search_value = search_input.value;

    // 	// 過濾清單陣列
    // 	const filter_list = Data.list.filter(function(item) {
    // 		return item.content.indexOf(search_value) > -1;
    // 	});	

    // 	//呈現清單
    // 	UI.showList(filter_list);
    // }

    // 刪除事項
    const removeItem = function (e) {
        if (e.target.tagName !== 'I') return;
        // 取得欲刪除事項id
        const item_id = e.target.parentNode.parentNode.id;
        const item_index = item_id.split('-')[1];

        Data.removeTask(item_index);

        //呈現清單
        UI.showList(Data.list);
    }

    // 完成事項
    const checkItem = function (e) {
        if (e.target.tagName !== 'INPUT') return;
        // 取得欲完成事項id
        const item_id = e.target.parentNode.parentNode.id;
        const item_index = item_id.split('-')[1];

        // 完成事項
        Data.checkTask(item_index);

        //呈現清單
        UI.showList(Data.list);
    }

    // 取得表單
    var form = document.forms['list-form'];
    var add_input = form['todo'];
    // var search_input = form['search-item__input'];

    // 取得section
    var section = document.querySelector('section');


    // 表單綁定送出事件
    form.addEventListener('submit', addItem);

    // 搜尋輸入框綁定keyup事件
    // search_input.addEventListener('input', searchItem);

    // section綁定點擊事件委託給事項
    section.addEventListener('click', removeItem);
    section.addEventListener('change', checkItem);

})();