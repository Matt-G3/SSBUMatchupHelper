const input = document.querySelector("input");
const searchButton = document.getElementById("search");
const paragraphOut = document.getElementById("display");
const characters = ["banjo kazooie", "bayonetta","bowser", "bowser jr.", "byleth", "captain falcon", "chrom", "cloud", "corrin", "daisy", "dark pit", "dark samus", "diddy kong", "donkey kong", "dr. mario", "duck hunt", "falco", "fox", "ganondorf", "greninja", "hero", "ice climbers", "ike", "incineroar", "inkling", "isabelle", "jigglypuff", "joker", "kazuya", "ken", "king dedede", "king k. rool", "kirby", "link", "little mac", "lucario", "lucas", "lucina", "luigi", "mario", "marth", "mega man", "meta knight", "mewtwo", "mii brawler", "mii gunner", "mii swordfighter", "min min", "mr. game & watch", "mythra", "ness", "olimar", "pac-man", "palutena", "peach", "pichu", "pikachu", "piranha plant", "pit", "pokemon trainer", "pyra", "r.o.b.", "richter", "ridley", "robin", "rosalina & luma", "roy", "ryu", "samus", "sephiroth", "sheik", "shulk", "simon belmont", "snake", "sonic", "sora", "steve", "terry", "toon link", "villager", "wario", "wii fit trainer", "wolf", "yoshi", "young link", "zelda", "zero suit samus"];
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

const tableButton = document.getElementById("showTable1");
const charTableDiv = document.getElementById("charTableHolder");
tableButton.addEventListener("click", function (event) {
    if (charTableDiv.getAttribute("hidden")==="hidden") {
        charTableDiv.removeAttribute("hidden");
        tableButton.innerHTML = "Hide";
    }
    else {
        charTableDiv.setAttribute("hidden","hidden");
        tableButton.innerHTML = "Show";
    }
})
async function getData(character) {
    let lines = await fetch(`./characterCounterData/${character}.txt`)
        .then(r => r.text())
        .then(text => {
            let lines = text.split("\n")
            imageList[0].src = `./images/characters/${lines[0].toLowerCase()}.png`
            imageList[0].title = `${Math.round(lines[1] * 100)}%`;
            console.log(lines[2])
            imageList[1].src = `./images/characters/${lines[2].toLowerCase()}.png`
            imageList[1].title = `${Math.round(lines[3] * 100)}%`;
            imageList[2].src = `./images/characters/${lines[4].toLowerCase()}.png`
            imageList[2].title = `${Math.round(lines[5] * 100)}%`;
            return lines
        })
    console.log(lines)
    console.log(lines.length)
    addStuffToTable(character, lines)
    document.getElementById("counterCharacters").hidden = false;
}
var oldTBody
function addStuffToTable(character,lines) {
    console.log(lines)
    const table = document.getElementById("extraCharactersTable");
    let tbody = document.createElement("tbody");
    for (let i = 0;i < lines.length;i+=2){
        const row = document.createElement("tr");
        for (let j = 0; j < 2;j++){
            const cell = document.createElement("td");
            if (j%2==0)
            {
                cell.innerHTML = lines[i+j];
            }
            else {
                cell.innerHTML = Math.round(lines[i+j]*1000)/10 + "%";
            }

            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.removeChild(table.lastChild)
    tbody.setAttribute("id", "oldTable");
    table.appendChild(tbody);
}
function getImage(character) {
    return `./images/characters/${character}.png`;
}
