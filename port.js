var o = document.querySelector(".quali");
let ski = document.querySelector(".skills");
let sele= document.querySelector(".skilldes")
let blu = document.querySelector(".navbar ") 
let di =document.querySelector(".education");
let di1 = document.querySelector(".skills");
let d2 = document.querySelector(".project") ;
let d3 = document.querySelector(".experiance");
let h = document.querySelector(".parent")
let Myin = document.querySelector(".myinfo")

function myQuali(){
    o.style.display= "block"
    blu.style.filter = "blur(2px)"
    di.style.filter = "blur(2px)"
    di1.style.filter = "blur(2px)"
    d2.style.filter = "blur(2px)"
    d3.style.filter = "blur(2px)"
    h.style.height = "164vh"
   }
 function no() {
    o.style.display= "none"
    blu.style.filter = "none"
    di.style.filter =   "none"  
    di1.style.filter =  "none"
    d2.style.filter = "none"
    d3.style.filter = "none"
    h.style.height = "600px"
 }
 function skill(){
    sele.style.display = "flex"
    blu.style.filter = "blur(2px)"
    di.style.filter = "blur(2px)"
    di1.style.filter = "blur(2px)"
    d2.style.filter = "blur(2px)"
    d3.style.filter = "blur(2px)"
    h.style.height = "162vh"
 }
 function no2(){
    sele.style.display = "none"
    blu.style.filter = "none"
    di.style.filter =   "none"  
    di1.style.filter =  "none"
    d2.style.filter = "none"
    d3.style.filter = "none"
    h.style.height = "600px"
 }