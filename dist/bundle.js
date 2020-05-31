!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const a=document.getElementById("body"),n=document.getElementById("location"),s=document.getElementById("coordinate"),i=document.getElementById("date"),o=document.querySelector(".weather-max__temperature-today"),c=document.querySelector(".weather-max__icon"),u=document.querySelector(".weather-max__weather-data"),l=document.querySelectorAll(".weather-mini__temperature"),h=document.querySelectorAll(".weather-mini__icon");class g{static setBackground(e){a.style.backgroundImage=`linear-gradient(rgba(8, 15, 26, 0.5) 0%, rgba(17, 17, 46, 0.3) 100%), url(${e})`}static setDateTime(e){i.innerHTML=e.toLocaleString()}static setWeather(e){console.log(e),n.innerText=`${e.city}, ${e.countryCode}`,s.innerHTML=`Latitude: ${e.latitude}\nLongitude: ${e.longitude}`,o.innerHTML=Math.round(e.weatherCurrent.temperature)+"°",c.setAttribute("src",`./assets/img/${e.weatherCurrent.icon}.png`),c.setAttribute("alt",""+e.weatherCurrent.description),u.innerHTML=`<p>${e.weatherCurrent.description.toUpperCase()}</p>\n`,u.innerHTML+=`<p>FELL LIKE: ${Math.round(e.weatherCurrent.apparentTemperature)}</p>\n`,u.innerHTML+=`<p>WIND: ${Math.round(e.weatherCurrent.windSpeed)} M/S</p>\n`,u.innerHTML+=`<p>HUMIDITY: ${Math.round(e.weatherCurrent.humidity)}%</p>`;for(let t=0;t<3;t+=1)l[t].innerHTML=Math.round(e.weatherArr[t].temperature)+"°",h[t].setAttribute("src",`./assets/img/${e.weatherArr[t].icon}.png`),h[t].setAttribute("alt",""+e.weatherArr[t].description)}}var d="EDydB9kDsKEPBW4oGDNZ0-pAoJd11MLpR7j4yfs0H1k",p="7e2fa980f3b886",y="f0cda0c38ef94aea81da290cf11c9aa7",m=class{constructor(e,t,r,a,n,s){this.temperature=e,this.icon=t,this.description=r,this.apparentTemperature=a,this.windSpeed=n,this.humidity=s}};const w=new class{constructor(e){this.url="https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id="+e,this.defaultImg="./assets/img/bg-default.jpg"}async getImg(){try{const e=await fetch(this.url);return(await e.json()).urls.regular}catch{return this.defaultImg}}}(d),f=new class{constructor(e){this.url="https://ipinfo.io/json?token="+e}async getLocation(){try{const e=await fetch(this.url);return(await e.json()).loc.split(",").map(e=>parseFloat(e))}catch(e){return console.log(e),new Location("156.3500","138.1167")}}}(p),b=new class{constructor(e){this.key=e}async getCurrent(e,t,r){const a=Array.isArray(r)?`https://api.weatherbit.io/v2.0/current/current?lat=${r[0]}&lon=${r[1]}&units=${e}&lang=${t}&key=${this.key}`:`https://api.weatherbit.io/v2.0/current/current?city=${r}&days=4&units=${e}&lang=${t}&key=${this.key}`,n=await fetch(a),s=(await n.json()).data[0],i=new m(parseFloat(s.temp),s.weather.icon,s.weather.description,parseFloat(s.app_temp),parseFloat(s.wind_spd),parseFloat(s.rh));return new class{constructor(e,t,r,a,n,s,i){this.latitude=e,this.longitude=t,this.timezone=r,this.city=a,this.countryCode=n,this.weatherCurrent=s,this.weatherArr=i}}(s.lat,s.lon,s.timezone,s.city_name,s.country_code,i)}async getForecast(e,t,r){const a=Array.isArray(r)?`https://api.weatherbit.io/v2.0/forecast/daily?lat=${r[0]}&lon=${r[1]}&days=4&units=${e}&lang=${t}&key=${this.key}`:`https://api.weatherbit.io/v2.0/forecast/daily?city=${r}&days=4&units=${e}&lang=${t}&key=${this.key}`,n=await fetch(a),s=await n.json(),i=[];for(let e=1;e<4;e+=1){const t=s.data[e],r=new m(parseFloat(t.temp),t.weather.icon);i.push(r)}return i}async getWeather(e,t,r){try{const a=this.getCurrent(e,t,r),n=this.getForecast(e,t,r),s=await Promise.all([a,n]);return s[0].weatherArr=s[1],s[0]}catch(e){return console.log("Ошибка получения информации о погоде"),void console.log(e)}}}(y),$=new class{constructor(){this.scaleIndex=0,this.languageIndex=0,this.scales=["M","I"],this.languages=["en","ru","be"]}changeScale(){this.scaleIndex=(this.scaleIndex+1)%this.scales.length}changeLanguage(){this.languageIndex=(this.languageIndex+1)%this.languages.length}getScale(){return this.scales[this.scaleIndex]}getLanguage(){return this.languages[this.languageIndex]}};var I=class{static async getBackgroungImage(){return w.getImg()}static async getWeather(e){if(!e){const e=await f.getLocation();return b.getWeather($.getScale(),$.getLanguage(),e)}return b.getWeather($.getScale(),$.getLanguage(),e)}},_=class{static async chageBackground(){const e=await I.getBackgroungImage();g.setBackground(e)}static runTime(){function e(){const e=new Date;g.setDateTime(e)}setInterval(e,1e3),e()}static async getWeather(e){const t=await I.getWeather(e);g.setWeather(t)}};document.querySelector(".menu-btn__chenge-bg").addEventListener("click",()=>{_.chageBackground()}),_.chageBackground(),_.getWeather(),_.runTime()}]);