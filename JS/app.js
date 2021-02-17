'use strict';
let divEl = document.getElementById('Cookies');
let table = document.createElement('table');
divEl.appendChild(table);
let globleTime=['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
let store =[];

function cookieStore (location , min , max ,avg ){
    this.location=location;
    this.minHourlyCus=min;
    this.maxHourlyCus=max;
    this.avgCookiesPerCus=avg;
    this.cookiePerHour=[];
    this.total=0;
    store.push(this);
}

cookieStore.prototype.getRandomCusPerHour = function(min,max)
{
return Math.floor(Math.random() * (max - min+ 1) + min);  
}
cookieStore.prototype.calCookiePerHour=function()
{ 
    for (let i=0 ; i< globleTime.length ;i++)
        {
         this.cookiePerHour.push (Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
         this.total= this.total+ this.cookiePerHour[i];
        }
 return this.total;
           
}   
let seattle =new cookieStore('Seattle',23,65,6.3);
let tokyo = new cookieStore('Tokyo',3,24,1.6);
let dubai = new cookieStore('Dubai',11,38,3.7);
let paris = new cookieStore('Paris',20,38,2.3);
let lima = new cookieStore('Lima',2,16,4.6);

function header (){
    let trEl=document.createElement('tr');
    table.appendChild(trEl);
    let thEl=document.createElement('th');
    thEl.textContent='';
    trEl.appendChild(thEl);
    for ( let v=0;v<globleTime.length;v++){
     let th= document.createElement('th'); 
      th.textContent =globleTime[v];
      trEl.appendChild(th);
    }
let thEl2=document.createElement('th');
thEl2.textContent='Daily Location Total';
trEl.appendChild(thEl2);
  
} 
header();

cookieStore.prototype.render=function()
{
let trEl = document.createElement('tr');
table.appendChild(trEl);
let tdEl=document.createElement('td');
tdEl.textContent=this.location;
trEl.appendChild(tdEl);
for (let c=0;c<globleTime.length;c++)
{ 
let td =document.createElement('td');
td.textContent=this.cookiePerHour[c];
trEl.appendChild(td);
}
let td=document.createElement('td');
td.textContent=this.total;
trEl.appendChild(td);

}

seattle.calCookiePerHour();
seattle.render();
tokyo.calCookiePerHour();
tokyo.render();
dubai.calCookiePerHour();
dubai.render();
paris.calCookiePerHour();
paris.render();
lima.calCookiePerHour();
lima.render(); 

let trElF;
function footer(){
     trElF =document.createElement('tr')
    table.appendChild(trElF);
    let thEl=document.createElement('th')
    thEl.textContent='Totals';
    trElF.appendChild(thEl);
    let allTotal=0;
    for ( let v=0;v<globleTime.length;v++){
    let sum=0;
   
    for(let u=0;u<store.length;u++){
     sum=sum+ store[u].cookiePerHour[v];
    }
      allTotal=allTotal+sum;
     let th= document.createElement('th'); 
     th.textContent=sum;
     trElF.appendChild(th);
}
    let th2=document.createElement('th');
    th2.textContent=allTotal;
    trElF.appendChild(th2);
}

footer();
const form = document.getElementById('storeForm');

form.addEventListener('submit', newstore);


function newstore (event){
    event.preventDefault(); 
    let nlocation = event.target.location.value;
    let nMinHourlyCus=event.target.minHourlyCus.value;
    let nMaxHourlyCus=event.target.maxHourlyCus.value;
    let nAvg=event.target.avgCookiesPerCus.value;
    let newStore=new cookieStore(nlocation,nMinHourlyCus,nMaxHourlyCus,nAvg);
    newStore.calCookiePerHour();
    table.removeChild(trElF);
    newStore.render();
    footer(); 
    
  }
