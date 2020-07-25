// changing status design of the data i.e(pending,done,not done)
let days = document.getElementsByClassName('days');
var streak=0;
days[0].style.fontWeight="700";
for(let i=0;i<days.length;i++){
    days[i].style.color="white";
    let icon = document.createElement('i');
    icon.classList.add('fa');
    let text = document.createElement('span');
    if(days[i].innerText=="no"){
        days[i].innerText="";
        icon.classList.add('fa-times');
        days[i].appendChild(icon);
        text.innerText="Not Done "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(242, 118, 109)";
        if(streak>0)streak--;
    }else if(days[i].innerText=="yes"){
        days[i].innerText="";
        icon.classList.add('fa-check');
        days[i].appendChild(icon);
        text.innerText="Done "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(69, 204, 105)";
        if(streak<7)streak++;
    }else{
        days[i].innerText="";
        icon.classList.add('fa-exclamation');
        days[i].appendChild(icon);
        text.innerText="Pending "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(110, 117, 112)";
        if(streak>0)streak--;
    }
    document.getElementsByClassName('streak').innerText=streak;
    
    
}