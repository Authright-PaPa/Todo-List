// model
var Data =(function() {
	
	//清單陣列
	var list = [];
	
	//事項建構子
	var Item = function(content) {
		this.content = content;
	};
	Item.prototype.finished = false;
	
	// 增加事項
	var addItem = function(content) {
		
		// 建立事項實體
		var item = new Item(content);
		list.push(item);
	}
	
	// 移除事項
	var removeItem = function(item_index) {
		list.splice(item_index, 1);
	}
	
	// 完成事項
	var checkItem = function(item_index) {
		var current_item = list[item_index];
		current_item.finished = !current_item.finished;
	}
	
	return {
		list: list,
		Item: Item,
		addItem: addItem,
		removeItem: removeItem,
		checkItem: checkItem
	};
})();





//controller
var Controller = (function(){
	
	// 增加事項
	var addItem = function(e) {
		e.preventDefault();
		
		// 取得增加輸入框值
		var add_value = add_input.value;
		
		// 加入清單陣列
		Data.addItem(add_value);
		
		//呈現清單
		UI.showList(Data.list);
		
		// 重設表單
		form.reset();
	};
	
	// 搜尋事項
	var searchItem = function() {
		
		// 取得搜尋輸入框值
		var search_value = search_input.value;
		
		// 過濾清單陣列
		var filter_list = Data.list.filter(function(item) {
			return item.content.indexOf(search_value) > -1;
		});	
		
		//呈現清單
		UI.showList(filter_list);
	}
	
	// 刪除事項
	var removeItem = function(e) {
		if(e.target.tagName !== 'I') return;
		// 取得欲刪除事項id
		var item_id = e.target.parentNode.parentNode.id;
		var item_index = item_id.split('-')[1];
		
		Data.removeItem(item_index);
		
		//呈現清單
		UI.showList(Data.list);
	}
	
	// 完成事項
	var checkItem = function(e) {
		if(e.target.tagName !== 'INPUT') return;
		// 取得欲完成事項id
		var item_id = e.target.parentNode.parentNode.id;
		var item_index = item_id.split('-')[1];
		
		// 完成事項
		Data.checkItem(item_index);
		
		//呈現清單
		UI.showList(Data.list);
	}
	
	// 取得表單
	var form = document.forms['list-form'];
	var add_input = form['add-item__input'];
	var search_input = form['search-item__input'];
	
	// 取得section
	var section = document.querySelector('section');
	
	
	// 表單綁定送出事件
	form.addEventListener('submit', addItem);
	
	// 搜尋輸入框綁定keyup事件
	search_input.addEventListener('input', searchItem);
	
	// section綁定點擊事件委託給事項
	section.addEventListener('click', removeItem);
	section.addEventListener('change', checkItem);
})();





// view
var UI = (function(){
	// 取得清單
	var to_do_list = document.querySelector('.to-do-list');
	var finished_list = document.querySelector('.finished-list');
	
	//呈現清單
	var showList = function(list) {
		
		// 先清空清單
		finished_list.innerHTML = '';
		to_do_list.innerHTML = '';
		
		// 遍歷清單陣列
		list.forEach(function(item, i) {
			
			// 判斷是否完成
			if(!item.finished) {
				var to_do_item_HTML = 
						'<li class="to-do-list__item" id="item-'+ i +'">' +
							'<div class="item__content">'+item.content+'</div>' +
							'<div class="item__action">' +
								'<i class="fa fa-trash" aria-hidden="true"></i>' +
								'<input type="checkbox">' +
							'</div>' +
						'</li>';
				to_do_list.insertAdjacentHTML('afterbegin', to_do_item_HTML);
			}else {
				var finished_item_HTML = 
						'<li class="to-do-list__item" id="item-'+ i +'">' +
							'<div class="item__content">'+item.content+'</div>' +
							'<div class="item__action">' +
								'<i class="fa fa-trash" aria-hidden="true"></i>' +
								'<input type="checkbox" checked>' +
							'</div>' +
						'</li>';
				finished_list.insertAdjacentHTML('afterbegin', finished_item_HTML);
			}
		});
	}
	
	return {
		showList: showList
	}
	
})();