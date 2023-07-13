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
function lolRoleButtons() {
  textBox.style.display = "block";
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none"; 
  lolResultBackButton.style.display = "block";
  console.log("lolRoleButtonsasfasdf")

};
function owRoleButtons () {
  textBox.style.display = "block";
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owTankButton.style.display = "none";
  owResultBackButton.style.display = "block";

};
function showLolRoleButtons () {
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

};
function showOwRoleButtons () {
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

};
function mainMenuBackButtons () {
  overwatchButton.style.display = "block";  
  leagueOfLegendsButton.style.display = "block";
  owTankButton.style.display = "none";
  owDamageButton.style.display = "none";
  owSupportButton.style.display = "none";
  owBackButton.style.display = "none"
  mainMenuBackGroundImage.style.display = "block";
  textBox.style.display = "none";
  lolBackButton.style.display = "none";
  topLaneButton.style.display = "none";
  jungleButton.style.display = "none";
  midLaneButton.style.display = "none";
  botLaneButton.style.display = "none";
  supportButton.style.display = "none";
  owBackGroundImage.style.opacity = 0;
  lolBackGroundImage.style.opacity = 0;

};
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
  showOwRoleButtons ()
  

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
  showLolRoleButtons ()
})
overwatchButton.addEventListener("click", function(e){
  showOwRoleButtons ()
  

})
leagueOfLegendsButton.addEventListener("click", function(e){
  showLolRoleButtons ()
})

topLaneButton.addEventListener("click", function(e) {
  let randomLolTopChamp = Math.floor(Math.random() * 10);
  let lolTopChampRandomList = ["akali", "fiora", "riven", "yasuo", "yone", "kayle", "ksante", "irelia", "shen", "vayne"];
  textBox.innerHTML = `<h4 class="text-center">${lolTopChampRandomList[randomLolTopChamp]}</h4>` + `<img class="bigImage", src="${lolTopChampRandomList[randomLolTopChamp]}.jpg"/>`
  lolRoleButtons()

});
jungleButton.addEventListener("click", function(e) {
  let randomLolJungleChamp = Math.floor(Math.random() * 16);
  let lolJungleChampRandomList = ["ekko", "elise", "elise", "fiddlesticks", "kindred", "lee sin", "lillia", "master yi", "nidalee", "nocturne", "nunu", "rengar", "taliyah", "vi", "viego", "zed"];
  
  textBox.innerHTML = `<h4 class="text-center">${lolJungleChampRandomList[randomLolJungleChamp]}</h4>` + `<img class="bigImage", src="${lolJungleChampRandomList[randomLolJungleChamp]}.jpg"/>`
  lolRoleButtons()
});
midLaneButton.addEventListener("click", function(e) {
  console.log(e)
  let randomLolMidChamp = Math.floor(Math.random() * 16);
  let lolMidChampRandomList = ["akali", "ahri", "ekko", "yasuo", "yone", "kassadin", "katarina", "lux", "qiyana", "sylas", "syndra", "talon", "velkoz", "vex", "zed", ];
  textBox.innerHTML = `<h4 class="text-center">${lolMidChampRandomList[randomLolMidChamp]}</h4>` + `<img class="bigImage", src="${lolMidChampRandomList[randomLolMidChamp]}.jpg"/>`;
  lolRoleButtons()
});
botLaneButton.addEventListener("click", function(e) {
  let randomLolAdcChamp = Math.floor(Math.random() * 16);
  let lolAdcChampRandomList = ["aphelios", "ashe", "caitlyn", "ezreal", "jhin", "jinx", "kaisa", "lucian", "miss fortune", "samira", "sivir", "tristana", "twitch", "vayne", "xayah", "yasuo"];
  textBox.innerHTML = `<h4 class="text-center">${lolAdcChampRandomList[randomLolAdcChamp]}</h4>` + `<img class="bigImage", src="${lolAdcChampRandomList[randomLolAdcChamp]}.jpg"/>`
  lolRoleButtons()
});
supportButton.addEventListener("click", function(e) {
  let randomLolSupportChamp = Math.floor(Math.random( ) * 14);
  let lolSupportChampRandomList = ["ashe", "bard", "janna", "karma", "lux", "morgana", "pantheon", "pyke", "rakan", "senna", "seraphine", "thresh", "velkoz", "xerath"];
  textBox.innerHTML = `<h4 class="text-center">${lolSupportChampRandomList[randomLolSupportChamp]}</h4>` + `<img class="bigImage", src="${lolSupportChampRandomList[randomLolSupportChamp]}.jpg"/>`
  lolRoleButtons()

});
owTankButton.addEventListener("click", function(e) {
  let randomOwTankCharacter = Math.floor(Math.random() * 11);
  let tankCharacterRandomList = ["d.va", "doomfist", "junker queen", "orisa", "ramattra", "reinhardt", "roadhog", "sigma", "winston", "wrecking ball", "zarya"];
  textBox.innerHTML = `<h4 class="text-center">${tankCharacterRandomList[randomOwTankCharacter]}</h4>` + `<img class="bigImage", src="${tankCharacterRandomList[randomOwTankCharacter]}.png"/>`
  owRoleButtons ()
});
owDamageButton.addEventListener("click", function(e) {
  let randomOwDamageCharacter = Math.floor(Math.random() * 17) ;
  let damageCharacterRandomList = ["ashe", "bastion", "cassidy", "echo", "genji", "hanzo", "junkrat", "mei", "pharah", "reaper", "sojourn", "soldier 76", "sombra", "symmetra", "torbjörn", "tracer", "widowmaker"];
  textBox.innerHTML = `<h4 class="text-center">${damageCharacterRandomList[randomOwDamageCharacter]}</h4>` + `<img class="bigImage", src="${damageCharacterRandomList[randomOwDamageCharacter]}.png"/>`
  owRoleButtons ()
});
owSupportButton.addEventListener("click", function(e) {
  let randomOwSupportCharacter = Math.floor(Math.random() * 9);
  let supportCharacterRandomList = ["ana" , "baptiste", "brigitte", "kiriko", "lifeweaver", "lucio", "mercy", "moira", "zenyatta"];
  textBox.innerHTML = `<h4 class="text-center">${supportCharacterRandomList[randomOwSupportCharacter]}</h4>` + `<img class="bigImage", src="${supportCharacterRandomList[randomOwSupportCharacter]}.png"/>`
  owRoleButtons ()
});

