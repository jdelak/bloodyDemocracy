/////////////////////////////////////// VALENTIN  /////////////////////////////////////////////

//declaration de tous les multiplicateurs des cartes
$multiBelleGueule=1;
$multiArticleJournal=1;                                                                                                         //changeHere



$clicker = document.getElementById('clicker');
$brasDessous = document.getElementById('brasDessous');
$brasDessus = document.getElementById('brasDessus');
$brasPaper = document.getElementById('brasPaper');
$nbClicks=0;
$nbClicks2=0;
$volumeMaster=1;
$MultiClickGlobal=1;    

function majMulti(){
  $MultiClickGlobal=1*$multiBelleGueule*$multiArticleJournal*$multiGrenade;    

}
setInterval(majMulti,50)

var $attenuationPertesGlobal;

if (localStorage.getItem("$attenuationPertesGlobal") === null) {
  $attenuationPertesGlobal =  1;
}else{
  $attenuationPertesGlobal = parseInt(localStorage.getItem("$attenuationPertesGlobal"));
}

var $compteurArgent;
var $compteurVote;
var $compteurVotesTotal;
var $compteurArgentTotal;
var $compteurArgentCaisseNoire;



//....................................CALENDRIER INTERSIDERAL....................................................

// localStorage.clear();

// 1jour dure 2 min
$ratioSecondesParJour=2*60;

var $tempsDeJeuSeconde;
var $tempsDeJeuJoursVirtuels;
var $jourDuMois;
var $tempsDeJeuMoisVirtuels;

if (localStorage.getItem("$tempsDeJeuSeconde") === null) {
  $tempsDeJeuSeconde =  0;
}else{
  $tempsDeJeuSeconde = parseInt(localStorage.getItem("$tempsDeJeuSeconde"));
}




function tempsQuiPasse(){
  $tempsDeJeuSeconde=$tempsDeJeuSeconde+1

}

setInterval( tempsQuiPasse, 1000)



function storageTempsDeJeuSeconde(){

  localStorage.setItem('$tempsDeJeuSeconde', $tempsDeJeuSeconde);


}
setInterval( storageTempsDeJeuSeconde, 5000)






function refreshCalendar(){
  $tempsDeJeuJoursVirtuels= Math.floor($tempsDeJeuSeconde/$ratioSecondesParJour);

  $jourDuMois=($tempsDeJeuJoursVirtuels % 28);
  
  $tempsDeJeuMoisVirtuels=1+($tempsDeJeuJoursVirtuels-$jourDuMois)/28;

  $moisDeLannee=($tempsDeJeuMoisVirtuels % 13);
  $tempsDeJeuAnneVirtuelle=1+($tempsDeJeuMoisVirtuels-$moisDeLannee)/13
  $jourDuMois=$jourDuMois+1;
  console.log("Jour:"+$jourDuMois+"  Mois:"+$moisDeLannee+ "   anne:"+$tempsDeJeuAnneVirtuelle);
  $calendarTxt = document.getElementById("calendarTxt");
  $calendarTxt.innerHTML="jour:"+$jourDuMois+" mois:"+$moisDeLannee+ " <br> année:"+$tempsDeJeuAnneVirtuelle;
}
setInterval(refreshCalendar,1000);




// ................................................FIN CALENDRIER....................................................................


///////////////////////////////////////////////// VALENTIN ///////////////////////////////////////////////////////////////////

//..........................................  WELCOME ............................................................
$welcome = document.getElementById("welcome");
$gauche = document.getElementById("gauche");
$droite = document.getElementById("droite");
$close = document.getElementById("close");
$close.onclick = closeWelcome;


if (localStorage.getItem("$nouveauUtilisateur") === null || parseInt(localStorage.getItem("$nouveauUtilisateur") == 0)) {

  $welcome.style.display= "flex";
  $gauche.classList.add("blur");
  $droite.classList.add("blur");

  localStorage.setItem('$nouveauUtilisateur', 1);
}

function closeWelcome(){
  $welcome.style.display= "none";
  $gauche.classList.remove("blur");
  $droite.classList.remove("blur");

}


// if ($welcome.offsetHeight != "0"){

//   document.getElementById("gauche").className = "blur"; 
//   document.getElementById("droite").className = "blur"; 
// }





//......................................... FIN WELCOME ......................................................

//....................... VOLUME MUTE ..................................

$volumeOn = document.getElementById("volumeOn");
$volumeMute = document.getElementById("volumeMute");
$volumeMute.classList.add('volumeInactif');


function changeMute(){
  $volumeOn.classList.toggle("volumeInactif");
  $volumeMute.classList.toggle("volumeInactif");

  if ($volumeMaster != 0){
    $volumeMaster =0;
  }
  else{
    $volumeMaster =1;
  }


}




//....................... VOLUME MUTE FIN...............................




////////////////////////////////////////////////////////FIN VALENTIN/////////////////////////////////////////////////////////////////////





/////////////////////// JULIEN ////////////////////////////////////
$containerCompteurVote = document.getElementById('vote');
$containerCompteurArgent = document.getElementById('argent');

// S'il n'y a pas de cookies compteur vote, le compteur est à 0 sinon on récupère le nombre de vote stocké
if (localStorage.getItem("compteurVote") === null) {
  $compteurVote =  0;
}else{
  $compteurVote = parseInt(localStorage.getItem("compteurVote"));
}
// S'il n'y a pas de cookies compteur argent, le compteur est à 0 sinon on récupère le nombre d'argent stocké
if (localStorage.getItem("compteurArgent") === null) {
  $compteurArgent =  0;
}else{
  $compteurArgent = parseInt(localStorage.getItem("compteurArgent"));
}

$containerCompteurVote.innerHTML = $compteurVote;
$containerCompteurArgent.innerHTML = $compteurArgent;
if (localStorage.getItem("compteurArgentTotal") === null) {
  $compteurArgentTotal =  0;
}else{
  $compteurArgentTotal = parseInt(localStorage.getItem("compteurArgentTotal"));
}
if (localStorage.getItem("compteurVotesTotal") === null) {
  $compteurVotesTotal = 0;
}else{
  $compteurVotesTotal = parseInt(localStorage.getItem("compteurVotesTotal"));
}


///////////////////////// FIN JULIEN //////////////////////////////////////////////////





/////////////////////////////////// VAL ///////////////////////////////////////
function majCompteurs (){
  $containerCompteurVote.innerHTML = $compteurVote;
  $containerCompteurArgent.innerHTML = $compteurArgent;
}
setInterval (majCompteurs, 2200)


function storageRegulier(){
  localStorage.setItem('compteurVote', $compteurVote);
  localStorage.setItem('compteurArgent', $compteurArgent);
  localStorage.setItem('compteurVotesTotal', $compteurVotesTotal);
  localStorage.setItem('compteurArgentTotal', $compteurArgentTotal);
  localStorage.setItem('$compteurArgentCaisseNoire', $compteurArgentCaisseNoire);
  localStorage.setItem('$attenuationPertesGlobal', $attenuationPertesGlobal);

}
setInterval (storageRegulier, 4000)

/////////////////////////////////// VAL ///////////////////////////////////////



// Cette fonction met à jour les positions quand on change la taille d'ecran.
function placeClicker() {
  $calendar=document.getElementById("calendar");
  $hauteurCompteurs=document.getElementById("compteurs").offsetHeight;
  $calendarYPos=$hauteurCompteurs+40+20;
  $calendar.style.top = $calendarYPos+'px';

  $largeurCompteurs=document.getElementById("compteurs").offsetWidth;
  $largeurCalendar=$calendar.offsetWidth;
  $calendarXPos=($largeurCompteurs*1.3333-$largeurCalendar)/2;
  $calendar.style.left = $calendarXPos+'px';


  $hauteurTable=document.getElementById("table").offsetHeight;
  $yPos= 0.75*$hauteurTable;

  $clicker.style.position = "absolute";
  $clicker.style.bottom = $yPos+'px';



  $yBrasPos= 0.6*$hauteurTable

  $brasPaper.style.bottom = $yBrasPos+'px';
  $brasDessus.style.bottom = $yBrasPos+'px';
  $brasDessous.style.bottom = $yBrasPos+'px';



}

setInterval( placeClicker, 15);




// Fonctions qui animent le click
var $boiteDessus=document.getElementById("boiteDessus");
var $boiteDessous=document.getElementById("boiteDessous");

$boiteDessus.onclick=click;
$boiteDessus.onmouseenter=playBloup;
$boiteDessus.onmouseleave=playBloup;

var $vitesseUp;
var $vitesseDownPaper;
var $vitesseDown;


$angle=0;

function downBras(){

  $angle=$angle+1;

  if ($angle<10){
    $brasDessus.style.transform = "rotate("+$angle+"deg)";
    $brasPaper.style.transform = "rotate("+$angle+"deg)";
    $brasDessous.style.transform = "rotate("+$angle+"deg)";
  }

  else{
    clearInterval($vitesseDown);
    $vitesseDownPaper =setInterval( downPaper, 7);
    $vitesseUp = setInterval( upBras, 6);
    

  }

}

$chute=0;

function downPaper(){

  $brasDessusPosition = $brasDessus.offsetTop;
  $hauteurBoiteDessus=$boiteDessus.offsetHeight;
  $chute=$chute+2;


  if($chute < 0.3*$hauteurBoiteDessus){
    $brasPaper.style.top = $brasDessusPosition+$chute+'px';
  }


  else{


 
    $brasPaper.style.transform = "rotate(-11deg)";
    $brasPaper.style.top = $brasDessusPosition+'px';
    
    clearInterval($vitesseDownPaper);


  }

}

function upBras(){

  $angle=$angle-1;

  if ($angle>-12){
    $brasDessus.style.transform = "rotate("+$angle+"deg)";
    $brasDessous.style.transform = "rotate("+$angle+"deg)";
  }

  else{


    clearInterval($vitesseUp);

  }

}

function clickAlgoBack(){
  ///////////////////////////////////// PARTIE JULIEN ////////////////////

  //// VAL //////
  $nbClicks=$nbClicks+1;
  // console.log($nbClicks)
  //// FIN VAL ///

  $compteurVote=$compteurVote+(1*$MultiClickGlobal);
  $compteurArgent=$compteurArgent+(5*$MultiClickGlobal);
  $compteurVotesTotal=$compteurVotesTotal+(1*$MultiClickGlobal);
  $compteurArgentTotal=$compteurArgentTotal+(5*$MultiClickGlobal);
  $containerCompteurVote.innerHTML = $compteurVote;
  $containerCompteurArgent.innerHTML = $compteurArgent;
 
  localStorage.setItem('compteurVote', $compteurVote);
  localStorage.setItem('compteurArgent', $compteurArgent);
  localStorage.setItem('compteurVotesTotal', $compteurVotesTotal);
  localStorage.setItem('compteurArgentTotal', $compteurArgentTotal);

  ////////////////////////////////////// FIN JULIEN /////////////////////

}



// Fonction du click sur la boite
function click() {
  $nbClicks2=$nbClicks2+1

  if($nbClicks+2>0){
    $chute=0;
    $angle=0;    
    clearInterval($vitesseUp);
    clearInterval($vitesseDownPaper);
    clearInterval($vitesseDown);

  }
  
  playBloup();

  $vitesseDown = setInterval( downBras, 6);

 clickAlgoBack();
 /////JULIEN VAL//////
 $audio = new Audio('sons/vote.mp3');
 $audio.volume = 0.2*$volumeMaster;
 $audio.play();
 /////JULIEN VAL//////

}



// Fonctions qui animent l'effet "bloop"

$zoom=0;
$entropie=1;
function bloup(){
$zoom=$zoom+1;
if (($zoom<10/$entropie) & $entropie<=2){
$boiteDessus.style.transform="scale(1.0"+$zoom+")";
$boiteDessous.style.transform="scale(1.0"+$zoom+")";
console.log("test")
}
else{
  clearInterval($bloup)
  $bloupReverse= setInterval( bloupReverse, 10);
}

}


function bloupReverse(){
  $zoom=$zoom-1;
  if ($zoom>=0){
  $boiteDessus.style.transform="scale(1.0"+$zoom+")";
  $boiteDessous.style.transform="scale(1.0"+$zoom+")";
  console.log("test")
  }
  else{
    clearInterval($bloupReverse);
    $entropie=$entropie+1;

    $bloup= setInterval( bloup, 10);
  }
  
}



  
 $nbMouseEnter=0;
function playBloup(){
  $nbMouseEnter=$nbMouseEnter+1;

  if($nbMouseEnter>1){
    $zoom=0;
    $entropie=1;
    clearInterval($bloup)
    clearInterval($bloupReverse);
  }




  $bloup= setInterval( bloup, 10);
}

///////////////////////////Sylvain//////////////////////////////////////////

//SliderGeneral


//Bouton selection slider General
function showBonusTemp(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("buffTemporaire").classList.replace("notSelect", "select");
}

function showParametres(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("parametres").classList.replace("notSelect", "select");
}

function showStatistique(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("statistique").classList.replace("notSelect", "select");
}

function showRanking(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("ranking").classList.replace("notSelect", "select");
}

function showAchievement(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("achievement").classList.replace("notSelect", "select");
}
function showPossession(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("possession").classList.replace("notSelect", "select");
}
//SliderStore

//Bouton selection slider Store

	document.getElementById("slideVote").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsVote").classList.replace("notSelect", "select");
	var carteListeVote = document.getElementsByClassName("carteVote");
	carteListeVote[0].classList.replace("notSelect", "select");
	document.getElementById("id1Vote").checked = "true"
	document.getElementById("id1Gestion").checked = "true"
	document.getElementById("id1Argent").checked = "true"



function showVote(){
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideVote").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsVote").classList.replace("notSelect", "select");
	var carteListeVote = document.getElementsByClassName("carteVote");
	carteListeVote[0].classList.replace("notSelect", "select");
	document.getElementById("id1Vote").checked = "true"
}

function showArgent(){
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
			var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideArgent").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsArgent").classList.replace("notSelect", "select");
	var carteListeArgent = document.getElementsByClassName("carteArgent");
	carteListeArgent[0].classList.replace("notSelect", "select");
	document.getElementById("id1Argent").checked = "true"
}

function showGestion(){
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
			var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideGestion").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsGestion").classList.replace("notSelect", "select");
	var carteListeGestion = document.getElementsByClassName("carteGestion");
	carteListeGestion[0].classList.replace("notSelect", "select");
	document.getElementById("id1Gestion").checked = "true"
}


//Carte affiche

function showBelleFace(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("belleFace").classList.replace("notSelect", "select");
}
function showBelleMeuf(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("belleMeuf").classList.replace("notSelect", "select");
}
function showBelleGueule(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("belleGueule").classList.replace("notSelect", "select");
}
function showbfntv(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("bfntv").classList.replace("notSelect", "select");
}
function showpanemCircenses(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("panemCircenses").classList.replace("notSelect", "select");
}
function showPhotoDeFamille(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("photoDeFamille").classList.replace("notSelect", "select");
}
function showArticleJournal(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("articleJournal").classList.replace("notSelect", "select");
}
function showgnr(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("gnr").classList.replace("notSelect", "select");
}
function showGrenade(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("grenade").classList.replace("notSelect", "select");
}
function showTeachers(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("teachers").classList.replace("notSelect", "select");
}
function showfmi(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("fmi").classList.replace("notSelect", "select");
}
function showrmi(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("rmi").classList.replace("notSelect", "select");
}
function showAvocat(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("avocat").classList.replace("notSelect", "select");
}
function showCabinetAvocat(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("cabinetAvocat").classList.replace("notSelect", "select");
}
function showJustice(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("justice").classList.replace("notSelect", "select");
}

//Statistique

function stat(){
	localStorage.setItem('timeFromStartAllPlay', $tempsDeJeuSeconde);
	localStorage.setItem('argentTotalAllPlay', $compteurArgentTotal);
	localStorage.setItem('voteTotalAllPlay', $compteurVotesTotal);
	if (isNaN($compteurArgentCaisseNoire)){}
	else { document.getElementById("caisseNoire").innerHTML = "Votre caisse noire: " + $compteurArgentCaisseNoire; }
	document.getElementById("voteTotalThisPlay").innerHTML = "Gain de vote cette partie: " + $compteurVotesTotal;
	document.getElementById("argentTotalThisPlay").innerHTML = "Gain d'argent cette partie: " + $compteurArgentTotal;
	if (isNaN(localStorage.getItem('argentTotalAllPlay'))) {}
	else {document.getElementById("argentTotalAllPlay").innerHTML = "Gain d'Argent Total :" + localStorage.getItem('argentTotalAllPlay');}
	if (isNaN(localStorage.getItem('voteTotalAllPlay'))) {}
	else { document.getElementById("voteTotalAllPlay").innerHTML = "Gain de vote Total: " + localStorage.getItem('voteTotalAllPlay');}
	document.getElementById("timeFromStartThisPlay").innerHTML = "Temps de jeu cette Partie: " + $tempsDeJeuSeconde + " secondes";
	if (isNaN(localStorage.getItem('timeFromStartAllPlay'))) {}
	else {document.getElementById("timeFromStartAllPlay").innerHTML = "Temps de jeu Total :" + localStorage.getItem('timeFromStartAllPlay') + " secondes";}
	document.getElementById("voteParClic").innerHTML = "Gain de Vote au Clic " + $MultiClickGlobal;
	document.getElementById("argentParClic").innerHTML = "Gain d'Argent au clic " + ($MultiClickGlobal*5);
}

setInterval(stat, 1000);


///////////////////////////FinSylvain///////////////////////////////////////

// Sinus qui s'attenue :  ((6+cos(x-3)-0.5(x-3))/6)^2




/////////////////////////////////////// FIN VALENTIN  /////////////////////////////////////////////


//////////////////////////////// JULIEN ////////////////////////
//Création du compteur vote
od = new Odometer({
  el: $containerCompteurVote,
  value: $compteurVote,




  // Any option (other than auto and selector) can be passed in here
  format: 'd',
  theme: 'train-station',
  duration:200,
  //animation: 'count'
});


////Création du compteur argent
od1 = new Odometer({
  el: $containerCompteurArgent,
  value: $compteurArgent,


  // Any option (other than auto and selector) can be passed in here
  format: 'd',
  theme: 'dollar',
  duration:200,
  //animation: 'count'
});


//////////////////////////////// FIN JULIEN ///////////////////////


//....................compteurs 0000000..................

$containerCompteurVote0 = document.getElementById('vote0');
$containerCompteurArgent0 = document.getElementById('argent0');

//Création du compteur vote 0
od2 = new Odometer({
  el: $containerCompteurVote0,

  format: 'd',
  theme: 'dollar',

});


////Création du compteur argent0
od3 = new Odometer({
  el: $containerCompteurArgent0,

  format: 'd',
  theme: 'dollar',

});

$containerCompteurVote00 = document.getElementById('vote00');
$containerCompteurArgent00 = document.getElementById('argent00');

//Création du compteur vote 0
od4 = new Odometer({
  el: $containerCompteurVote00,

  format: 'd',
  theme: 'dollar',

});


////Création du compteur argent0
od5 = new Odometer({
  el: $containerCompteurArgent00,

  format: 'd',
  theme: 'dollar',

});


//....................compteurs 0000000 FIN..................






/////////////////////////////// VALENTIN //////////////////////////////////


// ..................................................... CARTES BONUS ..................................................................

// //Variables relatives au dernier bouton d'achat survolé

var $iDBouton;                                           //
var $persistance;                                        //
var $disponible;                                         //
var $coutArgent;                                        //
var $coutVote;                                          //  NE PAS TOUCHER
var $mouvementArgentOneShot;                            //
var $mouvementVoteOneShot;                              //
var $mouvementArgentCaisseNoire;                        //
var $attenuationPertes;                                 //

// Ajouter ici les variables signifiant si une carte bonus est activee




// fonction de mise à jour des variables et du check de disponibilité
function checkAchat($iD){
  $iDBouton=$iD.id;
  console.log($iDBouton)

  if(0+0=="la tete à toto"){alert("LOL")}   // franchement, cherchez pas à comprendre, mais ne touchez pas XD

 
  //.........................  BELLE GUEULE  ................................
  else if($iDBouton== "boutonAchatBelleGueule"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=1000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  FIN BELLE GUEULE  ................................




  //.........................  BELLE MEUF  ................................
  else if($iDBouton== "boutonAchatBelleMeuf"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=10000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  FIN BELLE MEUF  ................................


    //......................... ARTICLE ................................
    else if($iDBouton== "boutonAchatarticleJournal"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=5000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere
  
     
    }
    //.........................  FIN ARTICLE  ................................


    //......................... PHOTO FAMILLE ................................
    else if($iDBouton== "boutonAchatphotoDeFamille"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=20000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=25000;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere
  
     
    }
    //.........................  FIN PHOTOFAMILLE  ................................


    //.........................  GRENADE  ................................
    else if($iDBouton== "boutonAchatGrenade"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=50000;                                                                                                                    // changeHere
      $coutVote=15000*$attenuationPertesGlobal;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  GRENADE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatAvocat"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=60000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=30;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }

    //.........................  FIN BELLE GUEULE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatChomage"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=100000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
    }
    //.........................  FIN BELLE GUEULE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatrsa"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=130000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  FIN BELLE GUEULE  ................................


    //.........................  BELLE cabinet  ................................
    else if($iDBouton== "boutonAchatCabinetAvocat"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=150000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=50;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  FIN cabinet  ................................


 //.........................  VENTE ARMES ................................
 else if($iDBouton== "boutonAchatVenteArme"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=200000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=350000-(100000*$attenuationPertesGlobal);                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=50000;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

 
  }
  //.........................  FIN VENTE ARMES  ................................
    


  //.........................  justice  ................................
  else if($iDBouton== "boutonAchatJustice"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=500000;                                                                                                                    // changeHere
    $coutVote=20000*$attenuationPertesGlobal;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=100;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  justice  ................................



//.........................  BFN tv  ................................
else if($iDBouton== "boutonAchatbfntv"){                                                                                        // changeHere
  $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
  $coutArgent=250000;                                                                                                                    // changeHere
  $coutVote=0;                                                                                                                        // changeHere
  $mouvementArgentOneShot=0;                                                                                                          // changeHere
  $mouvementVoteOneShot=0;                                                                                                            // changeHere
  $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
  $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

 
}
//.........................  FIN bfn tv  ................................


 
  //.........................  panem ................................
  else if($iDBouton== "boutonAchatPanem"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=400000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=100000;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=100;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  ppanem................................





  //.........................  NOUVELLE CARTE  ................................
    // else if($iDBouton== "boutonAchatNouvelleCarte"){
    // $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession
    // $coutArgent=200;
    // $coutVote=0;
    // $mouvementArgentOneShot=0;
    // $mouvementVoteOneShot=0;
    // $mouvementArgentCaisseNoire=0;
    // $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;

  //......................... FIN NOUVELLE CARTE  ................................






  // localStorage.setItem($iDBouton,"00");
  // console.log(localStorage.getItem($iDBouton).substr(0, 1))
  // console.log(localStorage.getItem($iDBouton).substr(1,2))
   
  console.log(localStorage.getItem($iDBouton));
  console.log($coutArgent)
  console.log($compteurArgent)

  if (localStorage.getItem($iDBouton)=== null){localStorage.setItem($iDBouton,"00")}
    
  if($compteurArgent>=$coutArgent & $compteurVote>=$coutVote & ( localStorage.getItem($iDBouton).substr(0, 1) ==0)  ){
    $disponible=1;

    $boutonSurvol=document.getElementById($iDBouton);
    $boutonSurvol.onmouseenter= putInBlue
    $boutonSurvol.onmouseleave= stopInBlue
    function putInBlue(){$boutonSurvol.style.backgroundColor = "#19749f"}
    function stopInBlue(){$boutonSurvol.style.backgroundColor = "#0c5d83" }

  }

  else{
    $disponible=0;

    $boutonSurvol=document.getElementById($iDBouton);
    $boutonSurvol.onmouseenter= putInRed
    $boutonSurvol.onmouseleave= stopInRed
    function putInRed(){$boutonSurvol.style.backgroundColor = "red"}
    function stopInRed(){$boutonSurvol.style.backgroundColor = "#19749f" }
    // $boutonSurvol.style.cursor= "not-allowed";

  }


  $attenuationPertes=(100-$attenuationPertes)/100;  // Ne pas toucher: Transforme la réduction% en coefficient

}



function achat(){

  if ($disponible==1 ){
    localStorage.setItem($iDBouton,10);

    console.log(localStorage.getItem($iDBouton));

    $compteurArgent=$compteurArgent-$coutArgent;
    $compteurVote=$compteurVote-$coutVote;
    $compteurArgent=$compteurArgent+$mouvementArgentOneShot;
    $compteurVote=$compteurVote+$mouvementVoteOneShot;
    $compteurArgentTotal=$compteurArgentTotal+$mouvementArgentOneShot;
    $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteOneShot;
    $compteurArgentCaisseNoire=$compteurArgentCaisseNoire+$mouvementArgentCaisseNoire;
    $attenuationPertesGlobal=$attenuationPertesGlobal*$attenuationPertes; 



    if ($persistance==1){
      
      localStorage.setItem($iDBouton,"1"+$tempsDeJeuJoursVirtuels);
      console.log(localStorage.getItem($iDBouton));
      
    }



  }
}



// ............................................ FONCTION PERSISTANTE Belle Gueule..................................

                                                                                                               // changeHere

function belleGueule(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=2;                                                                                                 // changeHere
  let $duree=30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatBelleGueule',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBelleGueule=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
belleGueule ();


//.................................................... FIN FONCTION PERSISTANTE BELLE Gueule......................................................





// ............................................ FONCTION PERSISTANTE Belle Meuf..................................

                                                                                                               // changeHere

function belleMeuf(){                                                                                      // changeHere

  let $intervalAutoClick=120/600;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let  $multi=0;                                                                                                 // changeHere
  let $duree=30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
  $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatBelleMeuf').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatBelleMeuf').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatBelleMeuf',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBelleMeuf=Math.pow($multi, $onOff)                                                                                //changeHere
    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
belleMeuf ();


// .................................................... FIN FONCTION PERSISTANTE belle meuf......................................................





// ............................................ FONCTION PERSISTANTE ARTICLE..................................

                                                                                                               // changeHere

function article(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=4;                                                                                                 // changeHere
  let $duree=21;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
  $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatarticleJournal').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatarticleJournal').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatarticleJournal',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiArticleJournal=Math.pow($multi, $onOff)                                                                                //changeHere
    }
    setInterval( multiActif, 1000);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
article ();


// .................................................... FIN FONCTION PERSISTANTE ARTICLE......................................................


// ............................................ FONCTION PERSISTANTE PHOTO FAMILLE..................................

                                                                                                               // changeHere

function PhotoDeFamille(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=120/1200;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=1200;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=7;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatphotoDeFamille').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatphotoDeFamille').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatphotoDeFamille',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiPhotoDeFamille=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
PhotoDeFamille ();


//.................................................... FIN FONCTION PERSISTANTE famille......................................................




// ............................................ FONCTION PERSISTANTE grenade..................................

                                                                                                               // changeHere

function Grenade(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=10;                                                                                                 // changeHere
  let $duree=60;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatGrenade').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatGrenade').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatGrenade',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiGrenade=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
Grenade ();


//.................................................... FIN FONCTION PERSISTANTE grenade......................................................






// ............................................ FONCTION PERSISTANTE Belle Gueule..................................

                                                                                                               // changeHere

function avocat(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=120*28;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=-10000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=1000000000;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatAvocat').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatAvocat').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatAvocat',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiAvocat=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
avocat ();


//.................................................... FIN FONCTION PERSISTANTE avocat......................................................





// ............................................ FONCTION PERSISTANTE chomage..................................

                                                                                                               // changeHere

function chomage(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=120*28;
  let $intervalMouvementVote=120/500;
  let $mouvementArgentRecurrent=70000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=-1000*$attenuationPertesGlobal;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=4*30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatChomage').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatChomage').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatChomage',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multichomage=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
chomage ();


//.................................................... FIN FONCTION PERSISTANTE chomage......................................................






// ............................................ FONCTION PERSISTANTE rsa..................................

                                                                                                               // changeHere

function rsa(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=120*28;
  let $intervalMouvementVote=120*28;
  let $mouvementArgentRecurrent=40000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=-2000*$attenuationPertesGlobal;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=365;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatrsa').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatrsa').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatrsa',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiRsa=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
rsa ();


//.................................................... FIN FONCTION PERSISTANTE rsa......................................................

// ............................................ FONCTION PERSISTANTE cabinet..................................

                                                                                                               // changeHere

function cabinet(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=120*28;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=-20000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=30000000;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatCabinetAvocat').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatCabinetAvocat').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatCabinetAvocat',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiCabinetAvocat=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
cabinet ();


//.................................................... FIN FONCTION PERSISTANTE cabinet......................................................



// ............................................ FONCTION PERSISTANTE BFN TV..................................

                                                                                                               // changeHere

function bfntv(){                                                                                      // changeHere

  let $intervalAutoClick=120/1000;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=120*28;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=50000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=30*6;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatbfntv').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatbfntv').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatbfntv',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBFNTV=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote-$mouvementVoteRecurrent;
        $compteurVotesTotal=$compteurVotesTotal-$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
bfntv ();


//.................................................... FIN FONCTION PERSISTANTE BFNTV......................................................



// ..................................................... FIN CARTES BONUS ..................................................................








///////////////////////////////////////////////////////// PARTIE JULIEN //////////////////////////////////////////////////////////////////
if($compteurVote >= 1000){ //Valeur à changer pour les tests
  reset();
}



function reset(){
  var timeAdd = parseInt(localStorage.getItem('timeFromStartAllPlay'));
  var argentAddTotal = parseInt(localStorage.getItem('argentTotalAllPlay'));
  var voteAddTotal = parseInt(localStorage.getItem('voteTotalAllPlay'));
  if (isNaN(timeAdd)) {}
  else {$compteurVotesTotal += voteAddTotal;}
  if (isNaN(VoteAddTotal)) {}
  else { $compteurArgentTotal += argentAddTotal;}
  if (isNaN(argentAddTotal)) {}
  else {$tempsDeJeuSeconde += timeAdd;}
  
  localStorage.removeItem('compteurVote');
  $compteurVote = 0;
  $compteurArgent = 0; // à remplacer par $compteurArgentCaisseNoire;
  localStorage.setItem('boutonAchatBelleGueule', '00');
  localStorage.setItem('boutonAchatBelleMeuf', '00');
  localStorage.setItem('boutonAchatarticleJournal', '00');
  localStorage.setItem('boutonAchatphotoDeFamille', '00');
  localStorage.setItem('boutonAchatJustice', '00');
  localStorage.setItem('boutonAchatCabinetAvocat', '00');
  localStorage.setItem('boutonAchatAvocat', '00');
  localStorage.setItem('boutonAchatRMI', '00');
  localStorage.setItem('boutonAchatFMI', '00');
  localStorage.setItem('boutonAchatTeachers', '00');
  localStorage.setItem('boutonAchatGrenade', '00');
  localStorage.setItem('boutonAchatGunsRoses', '00');
  localStorage.setItem('boutonAchatarticleJournal', '00');
  localStorage.setItem('boutonAchatPanemCircenses', '00');
  localStorage.setItem('boutonAchatBFNTV', '00');
  $tempsDeJeuSeconde = 0;
  
}

//////////////////////////////////////////////// FIN JULIEN ////////////////////////////////////////////////////////////////////////////








// $compteur=21;

// $compteurFiltre=0;
// $coeff="";



//  if ($compteur<1000){
//     $compteurFiltre=$compteur;
//     $coeff="";
//   }

//   if ($compteur>=1000 & $compteur<1000000){
//     $compteurFiltre=$compteur/1000;
//     $compteurFiltre=""+$compteurFiltre+"";
//     $compteurFiltre=$compteurFiltre.substring(0,5);
//     $compteurFiltre=parseFloat($compteurFiltre);
//     $coeff="K";
//   }



//   if ($compteur>=1000000 & $compteur<1000000000){
//     $compteurFiltre=$compteur/1000000;
//     $compteurFiltre=""+$compteurFiltre+"";
//     $compteurFiltre=$compteurFiltre.substring(0,5);
//     $compteurFiltre=parseFloat($compteurFiltre);
//     $coeff="M";
//   }

//   if ($compteur>=1000000000 & $compteur<1000000000000){
//     $compteurFiltre=$compteur/1000000000;
//     $compteurFiltre=""+$compteurFiltre+"";
//     $compteurFiltre=$compteurFiltre.substring(0,5);
//     $compteurFiltre=parseFloat($compteurFiltre);
//     $coeff="Md";
//   }


// console.log($compteurFiltre+" "+$coeff)





// function tessmulti(){
// console.log($multiBelleGueule)

// }
// setInterval(tessmulti, 1000)



// function blabla(){
// console.log("onoff"+$onOff)

// }

// setInterval(blabla,1000)