let days = document.getElementsByClassName('days');
for(let i=0;i<days.length;i++){
    days[i].style.color="white";
    let icon = document.createElement('i');
    icon.classList.add('fa');
    let text = document.createElement('span');
    if(days[i].innerText=="none"){
        days[i].innerText="";
        icon.classList.add('fa-times');
        days[i].appendChild(icon);
        text.innerText="Not Done "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(242, 118, 109)";
    }
    
    console.log(days[i]);
    
}