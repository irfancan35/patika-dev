// Reference: https://www.w3schools.com/howto/howto_js_todolist.asp

// HTML - DOM Elements
var listDOM = document.querySelector("ul#list")
var listItemsDOM = document.getElementsByTagName('li')

// Check To Do List Items whether stored in the Local Storage or not
// If not store the items in the local storage
let todoListItems = JSON.parse(localStorage.getItem('todoListItems'))
if (!todoListItems) {
    for (let idx = 0; idx < listItemsDOM.length; idx++) {
        listItemsDOM[idx].appendChild(closeButtonMaker())
    }
    updateLocalStorageListItems()
}
// Create To Do List Items for the purpose of page refresh
generateDOMListItems()

// Update To Do List Items to the Local Storage by visiting the DOM elements
function updateLocalStorageListItems() {
    todoListItems = []
    for (let idx = 0; idx < listItemsDOM.length; idx++) {
        let itemVal = listItemsDOM[idx].textContent
        let isCheckedVal = false
        itemVal = itemVal.slice(0, itemVal.length - 1)
        if (listItemsDOM[idx].className.includes('checked')) {
            isCheckedVal = true
        }
        todoListItems.push({ item: itemVal, isChecked: isCheckedVal })
    }
    localStorage.setItem('todoListItems', JSON.stringify(todoListItems))
}

// Generate list items from stracth by using stored items in Local Storage
function generateDOMListItems() {
    // Clear list by using jQuery
    $('ul#list').empty()
    // Generate list items
    todoListItems.map((liItem) => {
        let liDOM = document.createElement('li')
        liDOM.innerText = liItem.item
        if (liItem.isChecked) {
            liDOM.classList.add('checked')
        }
        // Append Close Button to each items
        liDOM.appendChild(closeButtonMaker())
        listDOM.append(liDOM)
    })
}

// Create a 'close' button to append it to each list item
function closeButtonMaker() {
    let closeBtn = document.createElement('span')
    let closeTxt = document.createTextNode('\u00D7')    // Close Symbol (x)
    closeBtn.classList.add('close')
    closeBtn.appendChild(closeTxt)
    // Click on a Close Button to remove the item from the current list and Local Storage
    closeBtn.onclick = function () {
        closeBtn.parentElement.remove()
        updateLocalStorageListItems()
    }
    return closeBtn
}

// Add a 'checked' symbol when clicking on a list item & update To Do List Items in the Local Storage
listDOM.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
        updateLocalStorageListItems()
    }
})

// Create a new list item while clicking on the 'Add' button
// Push new item to the Local Storage
// Show Toast Message
function newElement() {
    let liDOM = document.createElement('li')
    let inputValue = document.querySelector("#task").value
    inputValue = inputValue.trim()
    if (inputValue.length) {
        liDOM.innerText = inputValue
        liDOM.appendChild(closeButtonMaker())
        listDOM.append(liDOM)
        // Push new item to the Local Storage
        todoListItems.push({ item: inputValue, isChecked: false })
        localStorage.setItem('todoListItems', JSON.stringify(todoListItems))
        // Show Successfull Toast Message
        $('#liveToast.toast.success').toast('show')
    } else {
        // Show Error Toast Message by using jQuery
        $('#liveToast.toast.error').toast('show')
    }
    // Clear Task Input Value by using jQuery
    document.querySelector('#task').value = ''
}
