const { contextBridge } = require('electron')

const db = require(__dirname + '/db.js')

contextBridge.exposeInMainWorld('api', {
    send: () => {
        console.log('222')
    }
})
// contextBridge.exposeInMainWorld('db', db)
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})