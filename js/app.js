const insert = document.getElementById('insert');


// Window is the top level object in the browser
// e is an event-object and it can be anything 
window.addEventListener('keydown', (e) => {
    // console.log(e);
    insert.innerHTML = `<div class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
</div>
<div class="key">
    ${e.keyCode}
    <small>event.keycode</small>
</div>
<div class="key">
    ${e.code}
    <small>event.code</small>
</div>`

})