var c = 0 
var index = document.getElementsByClassName("produtos").length;
var on = [index]
//NÃO DEU CERTO GENERALZIAR, ~NÃO SEI PQ
on = [false,false,false,false,false,false]
//var on[numIndex] = [false,false,false,false,false,false]




/*function teste(){
	document.getElementById("mago").src =GALERIA
}*/

function over(a){
	a.style.border="2px solid black";
	a.style.boxShadow ="0px 0px 50px rgb(225, 155, 0)";
}
function out(a){
		a.style.border="0px";
		a.style.boxShadow="0px 0px 10px black";
}
function clicado(){
	document.getElementById("circle3").style.marginLeft = "550%";
	document.getElementById("circle3").style.backgroundColor = "black";
	document.getElementById("circle3").style.opacity = "0.8";
		document.getElementById("circle2").style.marginLeft = "550%";
	document.getElementById("circle2").style.backgroundColor = "black";
	document.getElementById("circle2").style.opacity = "0.8";
		document.getElementById("circle1").style.marginLeft = "550%";
	document.getElementById("circle1").style.backgroundColor = "black";
	document.getElementById("circle1").style.opacity = "0.8";
	

}
function fechado() {
	// body...
}
function selecionado(n) {
	if(on[n] == false){	
		var indexProdutos = document.getElementsByClassName("produtos");
		indexProdutos[n].style.boxShadow ="0px 0px 50px rgb(92, 250, 53)";
		indexProdutos[n].style.border="2px solid black"
		indexProdutos[n].onmouseover=function(){null}
		indexProdutos[n].onmouseout=function(){null}
		on[n] = true;
		if(c < indexProdutos.length){
			c += 1
			console.log(c)
			document.getElementById('count').innerHTML= c;
		}
	}


}
function desselecionado(n){
	if(on[n] == true){
		var indexProdutos = document.getElementsByClassName("produtos");
		indexProdutos[n].style.border="0px";
		indexProdutos[n].style.boxShadow="0px 0px 10px black";
		indexProdutos[n].onmouseover=function(){over(this)}
		indexProdutos[n].onmouseout=function(){out(this)}
		on[n] = false;
		if(c > 0){
		c -= 1
		console.log(c)
		document.getElementById('count').innerHTML= c;
	}
	}
	
}