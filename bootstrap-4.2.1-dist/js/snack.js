var snackname={name0:"100",name1:"500",name2:"1000",name3:"10000",name4:"リセット"}
var snackvalue={value0:100,value1:500,value2:1000,value3:10000,value4:0}

function init(){
    var nameElement=document.getElementsByTagName("span");
    for (var i=0;i<nameElement.length;i++){
	
	var key1=nameElement[i].className
	if(snackname[key1]){
	    nameElement[i].innerText=snackname[key1];
	}

    }
    document.getElementById("money").innerHTML="0";
}


function OnButtonClick(a){
    var nowmoney=Number(document.getElementById("money").innerText);
    var b=parseInt(a);
    document.getElementById("money").innerHTML = nowmoney+b;

}
function OnButtonClick1(a){

    document.getElementById("money").innerHTML = "0";

}
