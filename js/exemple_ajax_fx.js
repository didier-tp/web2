var tabProduits;

function init() {
    tabProduits =
        document.getElementById("tabProduits");
    var btnFind = document.getElementById("btnFind");
    btnFind.addEventListener("click", rechercherViaAjax);
}

function rechercherViaAjax(event) {
    console.log("recherche via ajax ...");
    //NB: ici au lieu d'appeler un veritable WS REST via http
    //ou demande les donnees d'un fichier ".json" en relatif (sous répertoire "data")
    //si l'URL de départ est en file:/// , le navigateur Firefox accepte la requete
    //mais pas google chrome (qui veut absolument par defaut une url de depart en http)
    var suffixe_url = document.getElementById("depart").value + "_" + document.getElementById("arrivee").value;
    //var ajax_url = "./data/produits_nouveaux.json";
    var ajax_url = "./data/liste_vols_" + suffixe_url + ".json";
    makeAjaxRequest(ajax_url, readDataCallBack);
}


function readDataCallBack(sData) {
    var myMsg = document.getElementById('idMsg');
    // var myMsg=document.querySelector('#idMsg'); 
    myMsg.innerHTML = sData;
    //sData est ici une string JSON (tableau de produits):
    var listeProdJs = JSON.parse(sData);
    supprimerLignesDeDonneesDansTableau();
    for (i in listeProdJs) {
        ajouterLigneDansTableau(listeProdJs[i]);
    }
}

function supprimerLignesDeDonneesDansTableau() {
    var trNodeList = tabProduits
        .getElementsByTagName("tr");
    var nbLines = trNodeList.length;
    //nb: on ne supprime pas la ligne "0" (avec <th>)
    for (i = nbLines - 1; i > 0; i--) {
        var tr = trNodeList.item(i);
        tr.parentNode.removeChild(tr);
    }
}

function ajouterLigneDansTableau(prod) {
    var newTr = tabProduits.insertRow(-1);
    (newTr.insertCell(0)).innerHTML = prod.id;
    (newTr.insertCell(1)).innerHTML = prod.nom;
}
