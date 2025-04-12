const input = document.querySelector("input");
const searchButton = document.getElementById("search");
const paragraphOut = document.getElementById("display");
const characters = ["banjo & kazooie", "bayonetta","bowser", "bowser jr.", "byleth", "captain falcon", "chrom", "cloud", "corrin", "daisy", "dark pit", "dark samus", "diddy kong", "donkey kong", "dr. mario", "duck hunt", "falco", "fox", "ganondorf", "greninja", "hero", "ice climbers", "ike", "incineroar", "inkling", "isabelle", "jigglypuff", "joker", "kazuya", "ken", "king dedede", "king k. rool", "kirby", "link", "little mac", "lucario", "lucas", "lucina", "luigi", "mario", "marth", "mega man", "meta knight", "mewtwo", "mii brawler", "mii gunner", "mii swordfighter", "min min", "mr. game & watch", "mythra", "ness", "olimar", "pac-man", "palutena", "peach", "pichu", "pikachu", "piranha plant", "pit", "pokemon trainer", "pyra", "r.o.b.", "richter", "ridley", "robin", "rosalina & luma", "roy", "ryu", "samus", "sephiroth", "sheik", "shulk", "simon", "snake", "sonic", "sora", "steve", "terry", "toon link", "villager", "wario", "wii fit trainer", "wolf", "yoshi", "young link", "zelda", "zero suit samus"];
const imageList = [document.getElementById("character1"),document.getElementById("character2"),document.getElementById("character3"),document.getElementById("map1"),document.getElementById("map2"),document.getElementById("map3")]
//associated data should be a literal object with the top three map names, their win %'s,
//top three characters and their win %'s
input.addEventListener('input', function (evt) {

});
searchButton.addEventListener("click", function (event) {
    const currentChar = input.value.toLowerCase();
    for (let i = 0; i < characters.length; i++) {
        if (currentChar === characters[i]) {
            getData(characters[i])
        }
    }
})


function getData(character){
    imageList[0].src = getImage(character);
    imageList[0].title = "skibidi";
    imageList[1].src = getImage(character);
    imageList[2].src = getImage(character);

    document.getElementById("counterCharacters").hidden = false;
}
function getImage(character) {
    return `./images/characters/${character}.png`;
}
