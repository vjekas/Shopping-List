var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var input = document.getElementById('item');

// Form submit event
form.addEventListener('submit', createListElement);
// Delete event
itemList.addEventListener('click', removeItem);
// Adding with enter
input.addEventListener("keypress", addListAfterKeypress);

/*********************************************** Add item ***********************************************/
function createListElement(e) {
	e.preventDefault();

	// Get input value
	var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
	// Add class
  li.className = 'list-group-item';
	// Add text node with input value
  li.appendChild(document.createTextNode(newItem));

	input.value = "";

	// Create del button element
  var deleteBtn = document.createElement('button');

	// Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

	// Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

	// Append button to li
  li.appendChild(deleteBtn);

	// Append li to list
  itemList.appendChild(li);
}
/*******************************************************************************************************/

// ***** Remove item ***** //
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
			itemList.removeChild(li);
    }
  }
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

/***** Add with enter *****/
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

/****************************** EXERCICE SOLUTION (USING FUNCTION EXPRESSION SYNTAX) *********************************/
var ul = document.querySelector("ul");

ul.addEventListener('click', (event) => {

	if (!event.target.classList.contains('delete')) {
		event.target.classList.toggle('done');
	}

});
