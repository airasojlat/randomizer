const textBox = document.getElementById("textBox");
const mainMenuBackGroundImage = document.getElementById("mainMenuBackGroundImage");
const lolBackGroundImage = document.getElementById("lolBackGroundImage");
const owBackGroundImage = document.getElementById("owBackGroundImage");
const lolBackButton = document.getElementById("lolBackButton");
const lolResultBackButton = document.getElementById("lolResultBackButton");
const owBackButton = document.getElementById("owBackButton");
const owResultBackButton = document.getElementById("owResultBackButton");
const overwatchButton = document.getElementById("overwatchButton");
const owTankButton = document.getElementById("owTankButton");
const owDamageButton = document.getElementById("owDamageButton");
const owSupportButton = document.getElementById("owSupportButton");
const leagueOfLegendsButton = document.getElementById("leagueOfLegendsButton");
const topLaneButton = document.getElementById("topLaneButton");
const jungleButton = document.getElementById("jungleButton");
const midLaneButton = document.getElementById("midLaneButton");
const botLaneButton = document.getElementById("botLaneButton");
const supportButton = document.getElementById("supportButton");
owBackButton.addEventListener("click", function(e) {
  overwatchButton.style.display = "block";  
  leagueOfLegendsButton.style.display = "block";
  owTankButton.style.display = "none";
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owBackButton.style.display = "none"
  mainMenuBackGroundImage.style.display = "block";
  owBackGroundImage.style.opacity = 0;
  textBox.style.display = "none";

})
owResultBackButton.addEventListener("click", function(e){
  overwatchButton.style.display = "none";
  leagueOfLegendsButton.style.display = "none";
  owBackButton.style.display = "block";
  owTankButton.style.display = "block";
  owDamageButton.style.display = "block";
  owSupportButton.style.display = "block";
  owBackGroundImage.style.opacity = 1;
  lolBackGroundImage.style.opacity = 0;
  owResultBackButton.style.display = "none";
  textBox.style.display = "none";
  

})
lolBackButton.addEventListener("click", function(e){
  overwatchButton.style.display = "block";
  leagueOfLegendsButton.style.display = "block";
  lolBackButton.style.display = "none";
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none";
  mainMenuBackGroundImage.style.display = "block";
  owBackGroundImage.style.opacity = 0;
  lolBackGroundImage.style.opacity = 0;
})
lolResultBackButton.addEventListener("click", function(e){
  overwatchButton.style.display = "none";
  leagueOfLegendsButton.style.display = "none";
  lolBackButton.style.display = "block";
  topLaneButton.style.display = "block";
  jungleButton.style.display = "block";
  midLaneButton.style.display = "block";
  botLaneButton.style.display = "block";
  supportButton.style.display = "block";
  lolBackGroundImage.style.opacity = 1;
  textBox.style.display = "none";
  lolResultBackButton.style.display = "none";
})
overwatchButton.addEventListener("click", function(e){
  overwatchButton.style.display = "none";
  leagueOfLegendsButton.style.display = "none";
  owBackButton.style.display = "block";
  owTankButton.style.display = "block";
  owDamageButton.style.display = "block";
  owSupportButton.style.display = "block";
  owBackGroundImage.style.opacity = 1;
  lolBackGroundImage.style.opacity = 0;
  

})
leagueOfLegendsButton.addEventListener("click", function(e){
  overwatchButton.style.display = "none";
  leagueOfLegendsButton.style.display = "none";
  lolBackButton.style.display = "block";
  topLaneButton.style.display = "block";
  jungleButton.style.display = "block";
  midLaneButton.style.display = "block";
  botLaneButton.style.display = "block";
  supportButton.style.display = "block";
  lolBackGroundImage.style.opacity = 1;
})

topLaneButton.addEventListener("click", function(e) {
  let randomLolTopChamp = Math.floor(Math.random() * 10);
  let lolTopChampRandomList = ['<h4 class="text-center">akali</h4> <img src="./akali.jpg" />', '<h4 class="text-center">fiora</h4> <img src="./fiora.jpg" />', '<h4 class="text-center">riven</h4> <img src="./riven.jpg" />', '<h4 class="text-center">yasuo</h4> <img src="./yasuo.jpg" />', '<h4 class="text-center">yone</h4> <img class="bigImage", src="./yone.jpg" />', '<h4 class="text-center">kayle</h4> <img src="./kayle.jpg" />', '<h4 class="text-center">ksante</h4> <img src="./ksante.jpg" />', '<h4 class="text-center">irelia</h4> <img src="./irelia.jpg" />', '<h4 class="text-center">shen</h4> <img src="./shen.jpg" />', '<h4 class="text-center">vayne</h4> <img src="./vayne.jpg" />'];
  textBox.style.display = "block";
  textBox.innerHTML = lolTopChampRandomList[randomLolTopChamp]
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";

});
jungleButton.addEventListener("click", function(e) {
  let randomLolJungleChamp = Math.floor(Math.random() * 16);
  let lolJungleChampRandomList = ['<h4 class="text-center">ekko</h4> <img src="./ekko.jpg" />', '<h4 class="text-center">elise</h4> <img src="./elise.jpg" />', '<h4 class="text-center">evelynn</h4> <img src="./evelynn.jpg" />', '<h4 class="text-center">fiddlesticks</h4> <img src="./fiddlesticks.jpg" />', '<h4 class="text-center">kindred</h4> <img src="./kindred.jpg" />', '<h4 class="text-center">lee sin</h4> <img src="./lee sin.jpg" />', '<h4 class="text-center">lilia</h4> <img class="bigImage", src="./lilia.jpg" />', '<h4 class="text-center">master yi</h4> <img src="./master yi.jpg" />', '<h4 class="text-center">nidalee</h4> <img src="./nidalee.jpg" />', '<h4 class="text-center">nocturne</h4> <img src="./nocturne.jpg" />', '<h4 class="text-center">nunu</h4> <img src="./nunu.jpg" />', '<h4 class="text-center">rengar</h4> <img src="./rengar.jpg" />', '<h4 class="text-center">taliyah</h4> <img src="./taliyah.jpg" />', '<h4 class="text-center">vi</h4> <img src="./vi.jpg" />', '<h4 class="text-center">viego</h4> <img src="./viego.jpg" />', '<h4 class="text-center">zed</h4> <img src="./zed.jpg" />'];
  textBox.style.display = "block";
  textBox.innerHTML = lolJungleChampRandomList[randomLolJungleChamp]
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";
});
midLaneButton.addEventListener("click", function(e) {
  let randomLolMidChamp = Math.floor(Math.random() * 16);
  let lolMidChampRandomList = ['<h4 class="text-center">akali</h4> <img src="./akali.jpg" />', '<h4 class="text-center">ahri</h4> <img src="./ahri.jpg" />', '<h4 class="text-center">ekko</h4> <img src="./ekko.jpg" />', '<h4 class="text-center">yasuo</h4> <img src="./yasuo.jpg" />', '<h4 class="text-center">yone</h4> <img class="bigImage"; src="./yone.jpg" />', '<h4 class="text-center">kassadin</h4> <img src="./kassadin.jpg" />', '<h4 class="text-center">katarina</h4> <img src="./katarina.jpg" />', '<h4 class="text-center">lux</h4> <img src="./lux.jpg" />', '<h4 class="text-center">qiyana</h4> <img src="./qiyana.jpg" />', '<h4 class="text-center">sylas</h4> <img src="./sylas.jpg" />', '<h4 class="text-center">syndra</h4> <img src="./syndra.jpg" />', '<h4 class="text-center">talon</h4> <img src="./talon.jpg" />', '<h4 class="text-center">velkoz</h4> <img src="./velkoz.jpg" />', '<h4 class="text-center">vex</h4> <img src="./vex.jpg" />', '<h4 class="text-center">zed</h4> <img src="./zed.jpg" />', '<h4 class="text-center">zoe</h4> <img src="./zoe.jpg" />'];
  textBox.style.display = "block";
  textBox.innerHTML = lolMidChampRandomList[randomLolMidChamp]
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";
});
botLaneButton.addEventListener("click", function(e) {
  let randomLolAdcChamp = Math.floor(Math.random() * 16);
  let lolAdcChampRandomList = ['<h4 class="text-center">aphelios</h4> <img class="bigImage", src="./aphelios.jpg" />', '<h4 class="text-center">ashe</h4> <img src="./ashe.jpg" />', '<h4 class="text-center">caitlyn</h4> <img src="./caitlyn.jpg" />', '<h4 class="text-center">ezreal</h4> <img src="./ezreal.jpg" />', '<h4 class="text-center">jhin</h4> <img src="./jhin.jpg" />', '<h4 class="text-center">jinx</h4> <img src="./jinx.jpg" />', '<h4 class="text-center">kaisa</h4> <img src="./kaisa.jpg" />', '<h4 class="text-center">lucian</h4> <img src="./lucian.jpg" />', '<h4 class="text-center">miss fortune</h4> <img src="./miss fortune.jpg" />', '<h4 class="text-center">samira</h4> <img class="bigImage", src="./samira.jpg" />', '<h4 class="text-center">sivir</h4> <img src="./sivir.jpg" />', '<h4 class="text-center">tristana</h4> <img src="./tristana.jpg" />', '<h4 class="text-center">twitch</h4> <img src="./twitch.jpg" />', '<h4 class="text-center">vayne</h4> <img src="./vayne.jpg" />', '<h4 class="text-center">xayah</h4> <img src="./xayah.jpg" />', '<h4 class="text-center">yasuo</h4> <img src="./yasuo.jpg" />'];
  textBox.style.display = "block";
  textBox.innerHTML = lolAdcChampRandomList[randomLolAdcChamp]
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";
});
supportButton.addEventListener("click", function(e) {
  let randomLolSupportChamp = Math.floor(Math.random( ) * 14);
  let lolSupportChampRandomList = ['<h4 class="text-center">ashe</h4> <img src="./ashe.jpg" />', '<h4 class="text-center">bard</h4> <img src="./bard.jpg" />', '<h4 class="text-center">janna</h4> <img src="./janna.jpg" />', '<h4 class="text-center">karma</h4> <img src="./karma.jpg" />', '<h4 class="text-center">lux</h4> <img src="./lux.jpg" />', '<h4 class="text-center">morgana</h4> <img src="./morgana.jpg" />', '<h4 class="text-center">pantheon</h4> <img src="./pantheon.jpg" />', '<h4 class="text-center">pyke</h4> <img src="./pyke.jpg" />', '<h4 class="text-center">rakan</h4> <img src="./rakan.jpg" />', '<h4 class="text-center">senna</h4> <img src="./senna.jpg" />', '<h4 class="text-center">seraphine</h4> <img class="bigImage", src="./seraphine.jpg" />', '<h4 class="text-center">thresh</h4> <img src="./thresh.jpg" />', '<h4 class="text-center">velkoz</h4> <img src="./velkoz.jpg" />', '<h4 class="text-center">xerath</h4> <img src="./xerath.jpg" />'];
  textBox.style.display = "block";
  textBox.innerHTML = lolSupportChampRandomList[randomLolSupportChamp]
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";

});
owTankButton.addEventListener("click", function(e) {
  let randomOwTankCharacter = Math.floor(Math.random() * 11);
  let tankCharacterRandomList = ['<h4 class="text-center">d.va</h4> <img src="./d.va.png" />', '<h4 class="text-center">doomfist</h4> <img src="./doomfist.png" />', '<h4 class="text-center">junker queen</h4> <img src="./junker queen.png" />', '<h4 class="text-center">orisa</h4> <img src="./orisa.png" />', '<h4 class="text-center">ramattra</h4> <img src="./ramattra.png" />', '<h4 class="text-center">reinhardt</h4> <img src="./reinhardt.png" />', '<h4 class="text-center">roadhog</h4> <img src="./roadhog.png" />', '<h4 class="text-center">sigma</h4> <img src="./sigma.png" />', '<h4 class="text-center">winston</h4> <img src="./winston.png" />', '<h4 class="text-center">wrecking ball</h4> <img src="./wrecking ball.png" />', '<h4 class="text-center">zarya</h4> <img src="./zarya.png" />'];
  textBox.style.display = "block";
  textBox.innerHTML = tankCharacterRandomList[randomOwTankCharacter]
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owTankButton.style.display = "none";
  owResultBackButton.style.display = "block";
});
owDamageButton.addEventListener("click", function(e) {
  let randomOwDamageCharacter = Math.floor(Math.random() * 17) ;
  let damageCharacterRandomList = ['<h4 class="text-center">ashe</h4> <img src="./ashe.png" />', '<h4 class="text-center">bastion</h4> <img src="./bastion.png" />', '<h4 class="text-center">cassidy</h4> <img src="./cassidy.png" />', '<h4 class="text-center">echo</h4> <img src="./echo.png" />', '<h4 class="text-center">genji</h4> <img src="./genji.png" />', '<h4 class="text-center">hanzo</h4> <img src="./hanzo.png" />', '<h4 class="text-center">junkrat</h4> <img src="./junkrat.png" />', '<h4 class="text-center">mei</h4> <img src="./mei.png" />', '<h4 class="text-center">pharah</h4> <img src="./pharah.png" />', '<h4 class="text-center">reaper</h4> <img src="./reaper.png" />', '<h4 class="text-center">sojourn</h4> <img src="./sojourn.png" />', '<h4 class="text-center">soldier:76</h4> <img src="./soldier 76.png" />', '<h4 class="text-center">sombra</h4> <img src="./sombra.png" />', '<h4 class="text-center">symmetra</h4> <img src="./symmetra.png" />', '<h4 class="text-center">torbjörn</h4> <img src="./torbjörn.png" />', '<h4 class="text-center">tracer</h4> <img src="./tracer.png" />', '<h4 class="text-center">widowmaker</h4> <img src="./widowmaker.png" />'];
  textBox.style.display = "block";
  textBox.innerHTML = damageCharacterRandomList[randomOwDamageCharacter]
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owTankButton.style.display = "none";
  owResultBackButton.style.display = "block";
});
owSupportButton.addEventListener("click", function(e) {
  let randomOwSupportCharacter = Math.floor(Math.random() * 9);
  let supportCharacterRandomList = ['<h4 class="text-center">ana</h4> <img src="./ana.png" />' , '<h4 class="text-center">baptiste</h4> <img src="./baptiste.png" />', '<h4 class="text-center">brigitte</h4> <img src="./brigitte.png" />', '<h4 class="text-center">kiriko</h4> <img src="./kiriko.png" />', '<h4 class="text-center">lifeweaver</h4> <img src="./lifeweaver.png" />', '<h4 class="text-center">lucio</h4> <img src="./lucio.png" />', '<h4 class="text-center">mercy</h4> <img src="./mecry.png" />', '<h4 class="text-center">moira</h4> <img src="./moira.png" />', '<h4 class="text-center">zenyatta</h4> <img src="./zenyatta.png" />'];
  textBox.style.display = "block";
  textBox.innerHTML = supportCharacterRandomList[randomOwSupportCharacter]
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owTankButton.style.display = "none";
  owResultBackButton.style.display = "block";
});

