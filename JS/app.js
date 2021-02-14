'use strict';
console.log('hi');
let globleTime=['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM'];
let cookieCounter=0;
let seattle ={
    location:'Seattle',
    minHourlyCus : 23,
    maxHourlyCus : 65 ,
    avgCookiesPerCus: 6.3,
    cookiePerHour :[],
    
    getRandomCusPerHour: function (min , max){
       min = Math.ceil(min);
       max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1) + min); 
      },
    calCookiePerHour:function(){
        for (let i=0 ; i< globleTime.length ;i++)
        {
         this.cookiePerHour.push (Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
           
        }
    } ,
    
  render:function(){
        let divEl= document.getElementById('Cookies')
        let ulEl = document.createElement('ul');
        ulEl.textContent=(this.location);
        divEl.appendChild(ulEl);
        let liEl; 
        for(let x = 0 ; x < globleTime.length; x++)
        {
            liEl = document.createElement('li');
           
            liEl.textContent = `${globleTime[x]} : ${this.cookiePerHour[x]}`;
            ulEl.appendChild(liEl);
            cookieCounter =cookieCounter+this.cookiePerHour[x];
        }
        liEl.textContent=`Total : ${cookieCounter}`;
        ulEl.appendChild(liEl);

    
},

};
seattle.getRandomCusPerHour();
seattle.calCookiePerHour();
seattle.render();

let tokyo ={
    location:'Tokyo',
    minHourlyCus : 3,
    maxHourlyCus : 24 ,
    avgCookiesPerCus: 1.2,
    cookiePerHour :[],

    getRandomCusPerHour: function (min , max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      },
      calCookiePerHour:function(){
        for (let i=0;i<globleTime.length ;i++)
        {
            this.cookiePerHour.push (Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
        }
    } ,
    render:function(){
        let divEl= document.getElementById('Cookies')
        let ulEl = document.createElement('ul');
        ulEl.textContent=(this.location);
        divEl.appendChild(ulEl);
        let liEl; 
        for(let x = 0 ; x < globleTime.length; x++)
        {
            liEl = document.createElement('li');
           
            liEl.textContent = `${globleTime[x]} : ${this.cookiePerHour[x]}`;
            ulEl.appendChild(liEl);
            cookieCounter =cookieCounter+this.cookiePerHour[x];
        }
        liEl.textContent=`Total : ${cookieCounter}`;
        ulEl.appendChild(liEl);

    
},

}
tokyo.getRandomCusPerHour();
tokyo.calCookiePerHour();
tokyo.render();

let  dubai={
    location:'Dubai',
    minHourlyCus : 11,
    maxHourlyCus : 38 ,
    avgCookiesPerCus: 3.7,
    cookiePerHour :[],

    getRandomCusPerHour: function (min , max){
        min = Math.ceil(min);
        max = Math.floor(max);
       
        return Math.floor(Math.random() * (max - min + 1) + min); 
      },
      calCookiePerHour:function(){
        for (let i=0;i<globleTime.length ;i++)
        {
            this.cookiePerHour.push(Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
        }
    } ,
    render:function(){
        let divEl= document.getElementById('Cookies')
        let ulEl = document.createElement('ul');
        ulEl.textContent=(this.location);
        divEl.appendChild(ulEl);
        let liEl; 
        for(let x = 0 ; x < globleTime.length; x++)
        {
            liEl = document.createElement('li');
           
            liEl.textContent = `${globleTime[x]} : ${this.cookiePerHour[x]}`;
            ulEl.appendChild(liEl);
            cookieCounter =cookieCounter+this.cookiePerHour[x];
        }
        liEl.textContent=`Total : ${cookieCounter}`;
        ulEl.appendChild(liEl);

    
},

    
}

dubai.getRandomCusPerHour();
dubai.calCookiePerHour();
dubai.render();
let  paris	= {
    location:'Paris',
    minHourlyCus : 20,
    maxHourlyCus : 38 ,
    avgCookiesPerCus: 2.3,
    cookiePerHour :[],

    getRandomCusPerHour: function (min , max){
        min = Math.ceil(min);
        max = Math.floor(max);
       
        return Math.floor(Math.random() * (max - min + 1) + min); 
      },
      calCookiePerHour:function(){
        for (let i=0;i<globleTime.length ;i++)
        {
            this.cookiePerHour.push(Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
        }
    } ,
    render:function(){
        let divEl= document.getElementById('Cookies')
        let ulEl = document.createElement('ul');
        ulEl.textContent=(this.location);
        divEl.appendChild(ulEl);
        let liEl; 
        for(let x = 0 ; x < globleTime.length; x++)
        {
            liEl = document.createElement('li');
           
            liEl.textContent = `${globleTime[x]} : ${this.cookiePerHour[x]}`;
            ulEl.appendChild(liEl);
            cookieCounter =cookieCounter+this.cookiePerHour[x];
        }
        liEl.textContent=`Total : ${cookieCounter}`;
        ulEl.appendChild(liEl);

    
},

    
}
paris.getRandomCusPerHour();
paris.calCookiePerHour();
paris.render();
let  lima ={
    location:'Lima',
    minHourlyCus :2,
    maxHourlyCus :16 ,
    avgCookiesPerCus: 4.6,
    cookiePerHour :[],

    getRandomCusPerHour: function (min , max){
        min = Math.ceil(min);
        max = Math.floor(max);
       
        return Math.floor(Math.random() * (max - min + 1) + min); 
      },
      calCookiePerHour:function(){
        for (let i=0;i<globleTime.length ;i++)
        {
            this.cookiePerHour.push(Math.floor(this.getRandomCusPerHour(this.minHourlyCus,this.maxHourlyCus)*this.avgCookiesPerCus));
        }
    } ,
    render:function(){
        let divEl= document.getElementById('Cookies')
        let ulEl = document.createElement('ul');
        ulEl.textContent=(this.location);
        divEl.appendChild(ulEl);
        let liEl; 
        for(let x = 0 ; x < globleTime.length; x++)
        {
            liEl = document.createElement('li');
           
            liEl.textContent = `${globleTime[x]} : ${this.cookiePerHour[x]}`;
            ulEl.appendChild(liEl);
            cookieCounter =cookieCounter+this.cookiePerHour[x];
        }
        liEl.textContent=`Total : ${cookieCounter}`;
        ulEl.appendChild(liEl);

    
},
}
lima.getRandomCusPerHour();
lima.calCookiePerHour();
lima.render();
