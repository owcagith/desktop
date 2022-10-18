var click = document.querySelector('.click');
var visible = document.getElementById('script');
var close = document.querySelector('.close');
var function_bar = document.getElementById('function-bar');
var iframe = document.getElementById('iframe-one');
var chrome_icon = document.getElementById('chrome-icon');
var searcher = document.getElementById('searcher');
var monitor = document.getElementById('screen');
var monclick = document.getElementById('monitorclick');
var prescreen = document.getElementById('prescreen');
var dot = document.getElementById('dot');
var sfill = document.getElementById('start-fill');
var win_menuu = document.getElementById('windows-menu');
var loader = document.querySelector('.loader');

window.addEventListener('keydown', (e) =>{ 
    console.log('wciśnięty klawisz to: ' + e.keyCode); 
});

window.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) { 
        iframe.classList.remove('clicked');
        function_bar.classList.remove('clicked');
        chrome_icon.classList.remove('clicked');
        searcher.classList.remove('clicked');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 38) { 
        dot.classList.toggle('clicked');
        prescreen.classList.toggle('start');
        loader.classList.toggle('start');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 40) { 
        monclick.classList.toggle('click');
        monitor.classList.toggle('click');
    }
})

function off() {
    prescreen.classList.remove('start');
    loader.classList.remove('start');
    dot.classList.remove('clicked');
    win_menuu.classList.remove('clicked');
    iframe.classList.remove('clicked');
    function_bar.classList.remove('clicked');
    searcher.classList.remove('clicked');
    chrome_icon.classList.remove('clicked');
}

function win_menu() {
    win_menuu.classList.toggle('clicked');
}

function start() {
    prescreen.classList.toggle('start');
    loader.classList.toggle('start');
    win_menuu.classList.remove('clicked');
    iframe.classList.remove('clicked');
    function_bar.classList.remove('clicked');
    searcher.classList.remove('clicked');
    chrome_icon.classList.remove('clicked');
}

function screen() {
    monitor.classList.toggle('click');
    monclick.classList.toggle('click');
}
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

function restore() {
    iframe.classList.toggle('restore');
    function_bar.classList.toggle('restore');
}

sfill.addEventListener('click', () => {
    dot.classList.toggle('clicked');
})

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

