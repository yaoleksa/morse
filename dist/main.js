(()=>{"use strict";const e={а:".-",б:"-...",в:".--",г:"....",ґ:"--.",д:"-..",е:".",є:"..-..",ж:"...-",з:"..--",и:"-.--",і:"..",ї:".---.",й:".---",к:"-.-",л:".-..",м:"--",н:"-.",о:"---",п:".--.",р:".-.",с:"...",т:"-",у:"..-",ф:"..-.",х:"----",ц:"-.-.",ч:"---.",ш:"--.-",щ:"--.--",ь:"-..-",ю:"..--",я:".-.-",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",0:"-----",".":"......",",":".-.-.-","/":"-..-.","?":"..--..","!":"--..--",":":"---...",";":"-.-.-.","(":"-.--.-",")":"-.--.-","'":".----.","-":"-....-",'"':".-..-."," ":"-...-","@":".--.-.",$:"...-..-","error/interrupt":"........",end:"..-.-"},t={a:".-",b:"-...",w:".--",h:"....",g:"--.",d:"-..",e:".",v:"...-",z:"..--",y:"-.--",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",r:".-.",s:"...",t:"-",u:"..-",f:"..-.",ch:"----",c:"-.-.",q:"--.-",x:"-..-",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",0:"-----",".":"......",",":".-.-.-","/":"-..-.","?":"..--..","!":"--..--",":":"---...",";":"-.-.-.","(":"-.--.-",")":"-.--.-","'":".----.","-":"-....-",'"':".-..-."," ":"-...-","@":".--.-.",$:"...-..-","error/interrupt":"........",end:"..-.-"};class n{static leadingZero=document.getElementsByName("leading_zero")[0].checked;static#e(e){let t="",n=e;for(;n>0;)t+=n%2,n=Math.floor(n/2);return t.split("").reverse().join("")}static#t(e){const t=e.split("");let n=e.length-1,o=0;for(let e of t)o+=parseInt(e)*Math.pow(2,n),n--;return o}static encode(e){let t=new String,n=e.split("");for(let e of n)leadingZero&&/[0-9\\!#\s\\$\\%\\&\\?\\*\\(\\)\\-\\+\\/\\=]/.test(e)?(console.log(e),t+="00"+this.#e(e.charCodeAt())+"\n"):leadingZero?t+="0"+this.#e(e.charCodeAt())+"\n":t+=this.#e(e.charCodeAt())+"\n";return t}static decode(e){const t=e.trim().replace(/\n/g," ").split(" ");let n="";for(let e of t)n+=String.fromCharCode(this.#t(e));return n}}window.location.href.includes("index")?(document.getElementById("encode").addEventListener("click",(()=>{document.getElementById("output").innerHTML=function(n){const o=document.getElementById("input_field").value.toLowerCase().split("");let d="";for(let n of o)e[n]?d+=e[n]+"\n":t[n]&&(d+=t[n]+"\n");return d}()})),document.getElementById("decode").addEventListener("click",(()=>{document.getElementById("output7").innerHTML=function(n){n=n.trim();const o={},d={},i=[],r=[];for(let t in e)i.push(t),o[e[t]]=t;for(let e in t)r.push(t[e]),d[t[e]]=e;let l="";for(let e=n.length;e>=0;e--)r.includes(n.slice(0,e))&&(l+=d[n.slice(0,e)],e=(n=n.replace(n.slice(0,e),"").trim()).length+1);return l}(document.getElementById("input_field3").value.toLowerCase())}))):window.location.href.includes("ASCII")?(document.getElementById("encodeASCII").addEventListener("click",(()=>{document.getElementById("outputASCII").innerHTML=function(e){let t="";return[...e].forEach((e=>{t+=e.charCodeAt()+"."})),t}(document.getElementById("input_fieldASCII").value)})),document.getElementById("decodeASCII").addEventListener("click",(()=>{document.getElementById("output7ASCII").innerHTML=function(e){let t="";return e.split(".").forEach((e=>{t+=e.length>0?String.fromCharCode(parseInt(e)):""})),t}(document.getElementById("input_field3ASCII").value)}))):(document.getElementById("encode_binary").addEventListener("click",(()=>{document.getElementById("output_binary").innerHTML=n.encode(document.getElementById("binary_input").value)})),document.getElementById("decode_binary").addEventListener("click",(()=>{document.getElementById("output7binary").innerHTML=n.decode(document.getElementById("input_field3binary").value)})),document.getElementById("info").addEventListener("mouseenter",(()=>{document.getElementById("popup").style.display=""})))})();