function clear(){
    document.querySelector('#code-html').style.display = 'none';
    document.querySelector('#code-css').style.display = 'none';
    document.querySelector('#code-js').style.display = 'none';
}
function change(ndx){
    if(ndx == 1){
        clear()
        document.querySelector('#code-html').style.display = 'block';
    }else if(ndx == 2){
        clear()
        document.querySelector('#code-css').style.display = 'block';
    }else{
        clear()
        document.querySelector('#code-js').style.display = 'block';
    }
}
function update_output(){
    const html = htmlEditor.getValue();
    const css = cssEditor.getValue();
    const js = jsEditor.getValue();
    const content = `
        <html>
            <head>
    <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
    </html>`
document.querySelector('#frame').srcdoc = content;
}
