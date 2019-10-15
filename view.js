const toDoUl = document.getElementById("ul-list");
const completeUl = document.getElementById("complete-ul-list");

const showList = (list) => {
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
		} else if (item.finished) {
			const completeUl_HTML =
				'<li class="li-list" id="item-' + i + '">' +
				'<input type="checkbox" class="status" checked>' +
				'<label>' + item.content + '</label>' +
				'<button class="delete papa-button">' +
				'<i class="material-icons"">delete_outline</i>' +
				'</button>' +
				'</li>';
			completeUl.insertAdjacentHTML('afterbegin', completeUl_HTML);
		}
	});
}

export { showList };
