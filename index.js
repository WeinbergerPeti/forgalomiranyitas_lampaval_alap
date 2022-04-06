function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

window.addEventListener("load", init);

var allapot=false;

function init()
{
    var piros=$(".piros");
    var sarga=$(".sarga");
    var zold=$(".zold");
    sarga.style.opacity=0.2;
    zold.style.opacity=0.2;
    
    setInterval(() => 
    {
        if (!allapot) 
        {
            sarga.style.opacity=1;    
        }
    }, 1000);
    setInterval(()=>
    {
        if (allapot) 
        {
            piros.style.opacity=1;
            zold.style.opacity=0.2;    
        }
        else
        {
            piros.style.opacity=0.2;
            sarga.style.opacity=0.2;
            zold.style.opacity=1;
            $(".auto").classList.add("balroljobbra");
        }
        allapot=!allapot
    }, 2000)
}

function pirosLampa()
{
    $(".lampa .piros").style.opacity=1;
    $(".lampa .sarga").style.opacity=0.2;
    $(".lampa .zold").style.opacity=0.2;
}

function sargaLampa()
{
    $(".lampa .piros").style.opacity=1;
    $(".lampa .sarga").style.opacity=1;
    $(".lampa .zold").style.opacity=0.2;
}

function zoldLampa()
{
    $(".lampa .piros").style.opacity=0.2;
    $(".lampa .sarga").style.opacity=0.2;
    $(".lampa .zold").style.opacity=1;
}