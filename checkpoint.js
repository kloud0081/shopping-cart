var btnp = document.querySelectorAll(".btnplus");
var btnm = document.querySelectorAll(".btnmoin");
var price = document.getElementsByClassName("price");
var tot = document.getElementsByClassName("total");


for (let i = 0; i < btnp.length; i++) {

    btnp[i].addEventListener("click", function () {
        this.nextElementSibling.innerHTML = Number(this.nextElementSibling.innerHTML) + 1;
        Totalprice();
    })

    btnm[i].addEventListener("click", function () {
        if (this.previousElementSibling.innerHTML > 0) {

            this.previousElementSibling.innerHTML--;
            Totalprice();

        }
        else { alert("you schoud add item +"); }

    })

}

function Totalprice() {
    var res = 0;
    for (let i = 0; i < price.length; i++) {
        res = res + Number(price[i].innerHTML) * Number(tot[i].innerHTML);

    }
    document.querySelector("#t").innerHTML = res;
    ;

}

function remove(k) {
    let r = document.getElementsByClassName("produit");
    r[k].remove();
    document.querySelector("#t").innerHTML = document.querySelector("#t").innerHTML - (price[k].innerHTML * tot[k].innerHTML);
    Totalprice();
}

function love(k) {
    let b = document.getElementsByClassName("love");
    b[k].classList.toggle("new");
};


