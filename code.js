const input = document.querySelector("input");
const paragraphOut = document.getElementById("display");
const characters = ["banjo & kazooie", "bayonetta", "byleth", "captain falcon", "chrom", "cloud", "corrin", "daisy", "dark pit", "dark samus", "diddy kong", "donkey kong", "dr. mario", "duck hunt", "falco", "fox", "ganondorf", "greninja", "hero", "ice climbers", "ike", "incineroar", "inkling", "isabelle", "jigglypuff", "joker", "kazuya", "ken", "king dedede", "king k. rool", "kirby", "link", "little mac", "lucario", "lucas", "lucina", "luigi", "mario", "marth", "mega man", "meta knight", "mewtwo", "mii brawler", "mii gunner", "mii swordfighter", "min min", "mr. game & watch", "mythra", "ness", "olimar", "pac-man", "palutena", "peach", "pichu", "pikachu", "piranha plant", "pit", "pokémon trainer", "pyra", "r.o.b.", "richter", "ridley", "robin", "rosalina & luma", "roy", "ryu", "samus", "sephiroth", "sheik", "shulk", "simon", "snake", "sonic", "sora", "steve", "terry", "toon link", "villager", "wario", "wii fit trainer", "wolf", "yoshi", "young link", "zelda", "zero suit samus"];
const imageList = [document.getElementById("character1"),document.getElementById("character2"),document.getElementById("character3"),document.getElementById("map1"),document.getElementById("map2"),document.getElementById("map3")]

const characterImagePair = {"mario":"https://mario.nintendo.com/static/a5f7fe49f4862aa68eaba347ee05c336/02be2/mario.png","luigi":"https://static.wikia.nocookie.net/ssb/images/c/cb/Luigi_-_Super_Smash_Bros._Ultimate.png/revision/latest?cb=20180612204957"}
console.log(characterImagePair["mario"])
function mapImagePair(mapName, imageLink) {
    this.mapName = mapName;
    this.imageLink = imageLink;
}
function characterCounterGroup(characterName,map1,map2,map3,char1,char2,char3,winPercentages){
    this.characterName = characterName;
    this.map1 = map1;
    this.map2 = map2;
    this.map3 = map3;
    this.char1 = char1;
    this.char2 = char2;
    this.char3= char3;
    this.winPercentages = winPercentages;
}
//associated data should be a literal object with the top three map names, their win %'s,
//top three characters and their win %'s
input.addEventListener('input', function (evt) {
    const currentChar = input.value.toLowerCase();
    for (let i = 0; i < characters.length; i++) {
        if (currentChar === characters[i]) {
            getData(characters[i])

        }
    }
});

function getData(character){

}
