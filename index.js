const {electron, BrowserWindow, app, ipcMain, dialog} = require('electron');


function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('index.html')

    win.on('closed', () => {
        win = null
    })
}


function createAddWindow(){
    let addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        show: true
    })
    addWindow.loadURL('file://' + __dirname + '/add.html')

    addWindow.on('closed', () => {
        addWindow = null
    })
}

ipcMain.on('open-new-window', function(event){
    createAddWindow()
})

/*ipcMain.on('close-new-window', function(event){
    addWindow.close()
    addWindow = null
})*/

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
})