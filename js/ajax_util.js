function makeAjaxRequest(ajaxUrl , callback) { 
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4 
	    && (xhr.status == 200 || xhr.status == 0)) 
		{ 
		callback(xhr.responseText);
		}
	}; 
	// ajaxUrl="./handlingData.php" ; 
	//ou http://www.xyz.com/appli_avec_ws_rest_nodeJs_ou_springMvc
    //ou en simulation (avec firefox) "./data/produits_nouveaux.json"
	xhr.open("GET",ajaxUrl , true); 
	xhr.send(null);
}

/*
//exemple de callback : 
function readDataCallBack(sData) { 
 var myMsg=document.getElementById('idMsg'); 
 myMsg.innerHTML = sData; 
}
//exemple d'appel :
var ajax_url="http://xxx/zzz"
makeAjaxRequest(ajax_url,readDataCallBack);
*/