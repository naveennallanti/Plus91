
//Renderer process script here
onload = () => {
    const webview = document.getElementById('view')
    const indicator = document.querySelector('.view')

    const loadstart = () => {
        indicator.innerText = 'loading...'
    }

    const loadstop = () => {
        indicator.innerText = ''
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
}