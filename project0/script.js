const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function newTodo() 
{
	// ask the user to enter their new todo via prompt
	const todo_content = window.prompt("Please enter your new to-do item", "To-do item")

	itemCount++
	updateItemCount()

	uncheckedCount++
	updateUnchecked()

	//add checkbox, content, and delete button to the new item
	let item = "<li class='" + classNames.TODO_ITEM + "'><input type='checkbox' id='item" + itemCount + "'"
	item += " class='" + classNames.TODO_CHECKBOX + "' value='" + itemCount + "' onchange='applyCheckbox(this)'/>"
	item += "<label for='item" + itemCount + "' class='"+ classNames.TODO_TEXT + "'>" + todo_content + "</label>"
	item += "<button class='" + classNames.TODO_DELETE + "' onclick='deleteItem(this)'>X</button></li>"

	//update the HTML list
	list.innerHTML += item
}


//delete selected item
function deleteItem(button)
{
	itemCount--
	updateItemCount()

	let item = button.parentElement
	let checkBox = item.getElementsByTagName("input")[0]

	//if item is not checked, then decrement the unchecked count as well
	if (!checkBox.checked)
	{
		uncheckedCount--
		updateUnchecked()
	}

	
	item.remove()
}


//add function to checkboxes
function applyCheckbox(box)
{
	if (box.checked)
	{
		uncheckedCount--
		updateUnchecked()
	}
	else
	{	
		uncheckedCount++
		updateUnchecked()
	}
}


//update item count
function updateItemCount()
{
	itemCountSpan.innerHTML = itemCount
}


//update unchecked count
function updateUnchecked()
{
	uncheckedCountSpan.innerHTML = uncheckedCount
}

