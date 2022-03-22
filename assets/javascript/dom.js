let button = document.getElementById('submit');
button.addEventListener('click',function(event){
    let newLI = document.createElement('li');
    newLI.innerHTML = document.getElementById('addition-to-list').value;
    let list = document.querySelector('ul');
    list.appendChild(newLI);
    document.getElementById('addition-to-list').value = '';
});
let unorderedList = document.getElementById('content-list');
unorderedList.addEventListener('click', function(event){
    event.target.className = 'line-through';
    setTimeout(() => { event.target.remove(); }, 1000);
});

