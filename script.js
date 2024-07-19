const input = document.getElementById('add_input');
const addIcon = document.getElementById('add_icon');
const listUl = document.getElementById('list_ul');
const deleteAllButton = document.getElementById('delete_all');

let listArray = [];

addIcon.addEventListener('click', addList);
deleteAllButton.addEventListener('click', deleteAllList);


function addList() {

    if(input.value) {

        let newList = document.createElement('li');

        listUl.appendChild(newList);
        newList.className = 'list_li';
        newList.innerText = input.value;
        newList.innerHTML += '<div class="div_close"><img src="Icons/close2.svg" alt="" class="close"></div>';
        input.value = '';

        let close = newList.querySelector('.div_close');
        close.addEventListener('click', function() {
            deleteList(newList);
        });
        
    }

    else {
        alert('Lütfen giriş yapnız!');
    }

};

function deleteList(o) {
    o.remove();
};

function deleteAllList() {

    listUl.innerHTML = '';

    // let liElements = listUl.children;
    // for(var i=0; i<liElements.length; i++) {
    //     liElements[i].remove();
    // }
};