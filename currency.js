let theme=false;
let body = document.getElementsByTagName('body')[0];
async function Cook() {
    url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
    const response = await fetch(url);
    const json = await response.json();
    addOptions('fcurrency',json);
    addOptions('scurrency',json);
}

function addOptions(id,obj){
    let keys=Object.keys(obj);
    for(i=0;i<keys.length;i++){
        var option = document.createElement('option');
        option.value= keys[i];
        option.innerText= obj[option.value];
        document.getElementById(id).appendChild(option);
    }
}

async function calculate(){
    let fcr=document.getElementById('fcurrency').value;
    let scr=document.getElementById('scurrency').value;
    let calUrl='https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/'+fcr+'/'+scr+'.json';
    const response = await fetch(calUrl);
    const json = await response.json();
    keys=Object.keys(json);
    let rate=fcr.toUpperCase()+" 1 /- = "+scr.toUpperCase()+" "+json[keys[1]]+" /-";
    document.getElementById('exrate').innerText=rate;
    document.getElementById('exvalue').innerText=scr.toUpperCase()+" "+document.getElementById('currency-id').value*json[keys[1]]+" /-";
}


function toggleTheme() {
    console.log(theme);
    let switcher=document.getElementById("switcher");
    let cross=document.getElementById("cross-icon");
    let themeicon=document.getElementById("theme-icon");
    if(theme==false){
        switcher.style.display="block";
        cross.style.display="block";
        themeicon.style.display="none";
        theme=true;
    }else{
        switcher.style.display="none";
        cross.style.display="none";
        themeicon.style.display="block";
        theme=false;
    }
}
function changeTheme(theme) {
    body.classList.replace(body.classList[0],theme);
}
Cook();
calculate();
