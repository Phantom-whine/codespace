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
const tailwind = `
<link rel='stylesheet' href='tailwind/tailwind-all.min.css'>
<link rel='stylesheet' href='tailwind/tailwind-base.min.css'>
<link rel='stylesheet' href='tailwind/tailwind-components.min.css'>
<link rel='stylesheet' href='tailwind/tailwind-utilities.min.css'>
`;

function update_output(){
    const html = htmlEditor.getValue();
const css = cssEditor.getValue();
const js = jsEditor.getValue();
const btn_txt = document.querySelector('#toggle').textContent;
if(btn_txt == 'ON'){
    var content = `
        <html>
            <head>
    <style>${css}</style>
    ${tailwind}
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
    </html>`
}else{
    var content = `
        <html>
            <head>
    <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
    </html>`
}
document.querySelector('#frame').srcdoc = content;
}

let tailwind_f = false;
let toggle_btn = document.querySelector('#toggle');
toggle_btn.addEventListener('click', ()=>{
    const html = htmlEditor.getValue();
    const css = cssEditor.getValue();
    const js = jsEditor.getValue();
    if(!tailwind_f){
        let content = `
            <html>
                <head>
                ${tailwind}
        <style>${css}</style>
            </head>
            <body>
            ${html}
            <script>${js}</script>
            </body>
        </html>`
        toggle_btn.textContent = 'ON';
        tailwind_f = true;
        document.querySelector('#frame').srcdoc = content;
        }else{
            let content = `
        <html>
            <head>
    <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
    </html>`
    toggle_btn.textContent = 'OFF';
            tailwind_f = false;
            document.querySelector('#frame').srcdoc = content;
        }
})
