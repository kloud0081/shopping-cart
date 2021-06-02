var btnp=document.querySelectorAll(".btnplus");
var btnm=document.querySelectorAll(".btnmoin");
var price=document.getElementsByClassName("price");
var tot=document.getElementsByClassName("total");

for(let i=0;i<btnp.length;i++)
{

    btnp[i].addEventListener("click",function(){
this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1;
Totalprice()
                                             }
                                    )

btnm[i].addEventListener("click",function(){
    if (btnm[i].previousElementSibling.innerHTML>0){

    btnm[i].previousElementSibling.innerHTML--;}

 Totalprice()
 
//  let l=document.getElementsByClassName("love");
 //  h=document.getElementsByClassName("produit");
 //  let j=document.querySelectorAll("span");
 //  console.log( j[1].nextElementSibling.name);
             })

            

// for(let j=0;j<btnm.length;j++){
//     btnm[j].addEventListener("click",function(){

// btnm[j].previousElementSibling.innerHTML--;
// // tot1=btnm[j].previousElementSibling.innerHTML--;
//  Totalprice()
//     }
//     )
}
function Totalprice(){
    var res=0;

//  var price=document.getElementsByClassName("price");
//     var tot=document.getElementsByClassName("total");
     for(let i=0;i<price.length;i++)
     {
        res=res+Number(price[i].innerHTML)* Number(tot[i].innerHTML);

    }
document.querySelector("#t").innerHTML=res;
  return res;

 }
 function remove(k){
    let r=document.getElementsByClassName("produit");
    r[k].classList.add("produitvis");
    document.querySelector("#t").innerHTML=document.querySelector("#t").innerHTML-(price[k].innerHTML*tot[k].innerHTML);
    
}

// function love(){
//     // let m=0;
//  let l=document.getElementsByClassName("love");
//  h=document.getElementsByClassName("produit");
//  let j=document.querySelectorAll("span");
//  console.log( j[1].nextElementSibling.name);
// // h[0].classList.add("bg");
// }
function love(name){
let  h=document.getElementsByClassName("produit");
h[name].classList.add("bg");

}

