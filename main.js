var click = document.querySelector('.click');
var visible = document.getElementById('script');
var close = document.querySelector('.close');
let surname = document.querySelector('.name');
var function_bar = document.getElementById('function-bar');
var iframe = document.getElementById('iframe-one');
var chrome_icon = document.getElementById('chrome-icon');
var searcher = document.getElementById('searcher');

function chrome() {
    iframe.classList.add('clicked');
    function_bar.classList.add('clicked');
    chrome_icon.classList.add('clicked');
}
    
function closed() {
    iframe.classList.remove('clicked');  
    function_bar.classList.remove('clicked');
    chrome_icon.classList.remove('clicked');
}

function minimalise() {
    iframe.classList.add('mini');
    function_bar.classList.add('mini');
    chrome_icon.classList.add('color')
}

function maximalise() {
    iframe.classList.remove('mini');
    function_bar.classList.remove('mini');
    chrome_icon.classList.remove('color');
}

function search() {
    searcher.classList.toggle('clicked');
}

function exit() {
    searcher.classList.remove('clicked');
}

// let num = 69

// document.querySelector('.alert').addEventListener('click', () => {
//     alert(num + 'wwowoww')
// })

// document.querySelector('.output').addEventListener('click', () => {
//     document.querySelector('.output').innerHTML = 'Witaj ' + surname.value
// })


// close.addEventListener('click', () => {
//     visible.classList.remove('clicked')
//     alert('Witaj ' + surname.value)
// })

// click.addEventListener('click', () => {
//     visible.classList.add('clicked');
// })

