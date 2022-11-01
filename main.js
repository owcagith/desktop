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
var ans = document.getElementById('answer');
var color_section = document.getElementById('color-section');
var background_section = document.getElementById('background-section');
var apps_section = document.getElementById('apps-section');
var settings = document.getElementById('settings');
var function_bar_settings = document.getElementById('function-bar-settings');
var settings_image = document.querySelector('.settings');
var windows = document.querySelector('.windows');
var search_ico = document.querySelector('.search');

window.addEventListener('keydown', (e) =>{ 
    console.log('wciśnięty klawisz to: ' + e.keyCode); 
});

window.addEventListener('keydown', function(e) {
    if (e.keyCode == 17) { 
        win_menuu.classList.toggle('clicked');
    }
})

window.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) { 
        chrome_icon.classList.remove('clicked');
        searcher.classList.remove('clicked');
        win_menuu.classList.remove('clicked');
        ans.classList.remove('clicked');
        windows.classList.remove('hover');
        search_ico.classList.remove('hover');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) { 
        dot.classList.toggle('clicked');
        prescreen.classList.toggle('start');
        loader.classList.toggle('start');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 38) { 
        iframe.classList.remove('mini');
        function_bar.classList.remove('mini');
        chrome_icon.classList.remove('color');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) { 
        monclick.classList.toggle('click');
        monitor.classList.toggle('click');
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 40) { 
        iframe.classList.add('mini');
        function_bar.classList.add('mini');
        chrome_icon.classList.add('color')
    }
})

$('#background-input').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       $('#script').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } 
});

function background_change() {
    visible.style.backgroundImage = "url('images/background-1.jpg')";
}

function maximalise_settings() {
    settings.classList.remove('mini');
    function_bar_settings.classList.remove('mini');
}

function minimalise_settings() {
    settings.classList.add('mini');
    function_bar_settings.classList.add('mini');
    settings_image.classList.remove('start');
}

function start_settings() {
    settings.classList.add('start');
    function_bar_settings.classList.add('start');
    settings_image.classList.add('start');
    settings.classList.remove('close');
    function_bar_settings.classList.remove('close');
}

function closed_settings() {
    settings.classList.toggle('close');
    function_bar_settings.classList.add('close');
    settings_image.classList.remove('start');
}

function colorchange() {
    color_section.classList.add('in');
    apps_section.classList.remove('in');
}

function backgroundchange() {
    color_section.classList.remove('in');
    apps_section.classList.remove('in');
}

function appchange() {
    color_section.classList.remove('in');
    apps_section.classList.add('in');
}

function off() {
    prescreen.classList.remove('start');
    loader.classList.remove('start');
    dot.classList.remove('clicked');
    win_menuu.classList.remove('clicked');
    iframe.classList.remove('clicked');
    function_bar.classList.remove('clicked');
    searcher.classList.remove('clicked');
    chrome_icon.classList.remove('clicked');
    ans.classList.remove('clicked');
}

function answer() {
    ans.classList.toggle('clicked');
}

function not() {
    ans.classList.remove('clicked');
}

function win_menu() {
    win_menuu.classList.toggle('clicked');
    windows.classList.toggle('hover');
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
    iframe.classList.remove('restore');
    function_bar.classList.remove('restore');
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
    search_ico.classList.toggle('hover');
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

