// Button listener to show new habit form
document.getElementById('btn-add-habit').addEventListener('click',function(){
    document.getElementById('add-habit-form').style.display='block';
    document.getElementById('btn-add-habit').style.display='none';
    document.getElementById('btn-streak').style.display='none';
    
});
// button listener to hide new habit form
document.getElementById('cancel-habit').addEventListener('click',function(){
    document.getElementById('add-habit-form').style.display='none';
    document.getElementById('btn-add-habit').style.display='block';
    document.getElementById('btn-streak').style.display='block';
})
// marking a habit as done
var list = document.querySelector('#habits');
list.addEventListener('click', function(event) {
if (event.target.tagName === 'LI') {
    event.target. classList.toggle('checked');
}
}, false);