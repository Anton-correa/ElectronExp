const {electron, ipcRenderer} = require('electron');

const addBtn = document.getElementById('adding');
//const addUrl = document.getElementById('action');


addBtn.addEventListener('click', function(){
    ipcRenderer.send('open-new-window')
})

/*addUrl.addEventListener("click", function() {
  ipcRenderer.send("close-new-window");
  localStorage.clear();
});*/
