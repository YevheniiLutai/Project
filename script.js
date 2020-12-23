class Tournaments {
    constructor(name, type, date, number) {
        this.name = name;
        this.type = type;
        this.date = date;
        this.number = number;
    };

    lineSumInGrid() {
    
    };

    showTournamets() {

    };

    addTeam() {

    };

    addPlayer() {

    };

    creatTeamFromPlayer() {
        
    }

    addPosition() {

    };
};

class simpleGrid extends Tournaments {
    constructor() {
        super();
    };
};

class classicGrid extends Tournaments {
    constructor() {
        super();
    };
};

class classicAdvencGrid extends Tournaments {
    constructor() {
        super();
    };
};


//document.getElementsByClassName('among_us').style.backgroundImage = "url('images/Tournaments/Among_Us_2.jpg'); ";

function addTournament() {
    let tour_name = document.getElementById('tournamentName').value;
    let tour_type = document.getElementById('tournamentType').value;
    let tour_date = document.getElementById('dateOfStart').value;
    let tour_number = document.getElementById('tournamentNumberPlayers').value;

    //let tour = tour_name;
    document.getElementById('current').firstElementChild.insertAdjacentHTML("afterend", `<div class="tourBoxText" id="tour_1">${tour_name}</div>`)

    tour_name = new Tournaments(tour_name, tour_type, tour_date, tour_number);
    console.log(Object.getPrototypeOf(tour_name).constructor.name);
    console.log(tour_name)
}


function addCheckbox() {
    	
    $('<input type="checkbox" id="checkbox1" name="checkbox1">' ).insertBefore( ".listGridBorder" );

}
function addInformation() {
    $('<input type="text" id="tournamentName">' ).insertBefore( ".listGridBorder" );
}
//document.getElementById('tour_1') = this.tour_name;
//document.getElementById('creatTour').addEventListener('click', addTournament);
//console.log(addTournament);

//document.getElementById('Change_1').addEventListener('click', addCheckbox);
//document.getElementById('Add_1').addEventListener('click', addInformation);

function addTournament() {
    let tour_name = document.getElementById('tournamentName').value;
    let tour_type = document.getElementById('tournamentType').value;
    let tour_date = document.getElementById('dateOfStart').value;
    let tour_number = document.getElementById('tournamentNumberPlayers').value;

    //let tour = tour_name;
    document.getElementById('current').firstElementChild.insertAdjacentHTML("afterend", `<div class="tourBoxText" id="tour_1">${tour_name}</div>`)

    tour_name = new Tournaments(tour_name, tour_type, tour_date, tour_number);
    console.log(Object.getPrototypeOf(tour_name).constructor.name);
    console.log(tour_name)
}


const listPlayers = [
    "Thanh Balicki",
    "Ronni Fanning",
    "Sherri Glasscock",
    "Ilse Vale",
    "Marlo Charlton",
    "Candida Bruckner",
    "Annabelle Sullen",
    "Jennette Meier",
    "Earlie Amaral",
    "Thomasine Yamada",
    "Larita Steptoe",
    "Azucena Raposa",
    "Tiesha Rollison",
    "Miriam Howze",
    "Winston Coghlan",
    "Adriana Schultheis",
    "Veta Helsel",
    "Eufemia Carew",
    "Sanora Cilley",
    "Maple Bilbrey",
    "Blossom Claybrook",
    "Susana Pastore",
    "Terrence Iler",
    "Maryam Lona",
    "Stefan Bromberg",
    "Sharyn Peredo",
    "Jerold Littles",
    "Elva Fripp",
    "Annmarie Heiney",
    "Ceola Pippins",
    "Clotilde Clonts",
    "Regine Petillo",
    "Tobias Deschamps",
    "Chanda Trinkle",
    "Maudie Giuliani",
    "Nubia Fucci",
    "Lesha Kwiatkowski",
    "Gerardo Caple",
    "Casandra Canavan",
    "Keitha Darling",
    "Ezequiel Miler",
    "Jesica Fromm",
    "Ione Laffoon",
    "Lenore Orndorff",
    "Tomasa Kennedy",
    "Loria Bachman",
    "Cecily Alberty",
    "Gwenda Brimer",
    "Marty Josephs",
    "Latricia Statton"
  ];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let arrListofPlayer = [];

// Create a new list item when clicking on the "Add" button
function addNewPlayer() {
    let listofPlayer = new Object();

   // let new_ul = document.getElementById('myUl').cloneNode(false);

    ul1 = document.getElementById('myUl');

    // Add all lis to an array


    listofPlayer.name = listPlayers[Math.floor(Math.random()*listPlayers.length)];
    listofPlayer.kills = randomInteger(0, 45);
    listofPlayer.assistent = randomInteger(0, 45);
    listofPlayer.death = randomInteger(0, 45);
    listofPlayer.adr = randomInteger(50, 150);

    let differ = listofPlayer.kills - listofPlayer.death;

    if(differ == 0) {
        listofPlayer.differString = differ;
    } else if(differ > 0){
        listofPlayer.differString = '+' + differ;
    } else if(differ < 0) {
        listofPlayer.differString = differ;
    }

    if(listofPlayer.death == 0) {
        listofPlayer.ratting = listofPlayer.kills;
    } else {
        listofPlayer.ratting = listofPlayer.kills / listofPlayer.death;
    }

    arrListofPlayer.push(listofPlayer);
    console.log(listofPlayer);
   
    //arrListofPlayer.sort((a, b) => (b.ratting - a.ratting))
    arrListofPlayer.sort((a, b) => parseFloat(a.ratting) - parseFloat(b.ratting));
    console.log(arrListofPlayer);
    //console.log(arrListofPlayer.sort((a, b) => parseFloat(a.ratting) - parseFloat(b.ratting)));


    let f = document.getElementById("myUL");
        f.insertAdjacentHTML(
         "beforeend",
         "<div class='listGridBorder' id='listGrid'>" +
            `<li id='playerName'>${listofPlayer.name}</li>` +
            `<li id='playerkills'>${listofPlayer.kills}</li>` +
            `<li id='playerAssistent'>${listofPlayer.assistent}</li>` +
            `<li id='playerDeath'>${listofPlayer.death}</li>` +
            `<li id='playerDiffer'>${listofPlayer.kills + '/' + listofPlayer.death + ' ' + listofPlayer.differString}</li>` +
            `<li id='playerRaiting'>${listofPlayer.ratting.toFixed(2)}</li>` +
         "</div>"
    );

};

document.getElementById('Change_3').addEventListener('click', addNewPlayer);
console.log(arrListofPlayer);

function addNewGroup() {
    let listofTeam = new Object();

   // let new_ul = document.getElementById('myUl').cloneNode(false);

    ul1 = document.getElementById('myUl');

    // Add all lis to an array


    listofTeam.name = listPlayers[Math.floor(Math.random()*listPlayers.length)];
    listofTeam.kills = randomInteger(0, 45);
    listofTeam.assistent = randomInteger(0, 45);
    listofTeam.death = randomInteger(0, 45);
    listofTeam.adr = randomInteger(50, 150);

    let differ = listofTeam.kills - listofTeam.death;

    if(differ == 0) {
        listofTeam.differString = differ;
    } else if(differ > 0){
        listofTeam.differString = '+' + differ;
    } else if(differ < 0) {
        listofTeam.differString = differ;
    }

    if(listofTeam.death == 0) {
        listofTeam.ratting = listofTeam.kills;
    } else {
        listofTeam.ratting = listofTeam.kills / listofTeam.death;
    }

    arrListofPlayer.push(listofTeam);
    console.log(listofTeam);
   
    //arrListofPlayer.sort((a, b) => (b.ratting - a.ratting))
    arrListofPlayer.sort((a, b) => parseFloat(a.ratting) - parseFloat(b.ratting));
    console.log(listofTeam);
    //console.log(arrListofPlayer.sort((a, b) => parseFloat(a.ratting) - parseFloat(b.ratting)));


    let f = document.getElementById("myUL");
        f.insertAdjacentHTML(
         "beforeend",
         '<ul id="myUL" class="Group">' +
         '<div class="groupGridStage">' +
             '<li class="groupName1Stage">Group B</li>' +
             '<li class="groupName1Stage">Match</li>' +
             '<li class="groupName1Stage">Win</li>' +
             '<li class="groupName1Stage">Lose</li>' +
             '<li class="groupName1Stage">Draw</li>' +
             '<li class="groupName1Stage">Point</li>' +
         '</div>' +
         '<div class="groupGridStage"> ' +
             `<li class="groupName1Stage">Hit the gym</li>` +
             `<li class="groupName1Stage">Pay bills</li>` +
             `<li class="groupName1Stage">Meet George</li>` +
             `<li class="groupName1Stage">Buy eggs</li>` +
             `<li class="groupName1Stage">Read a book</li>` +
             `<li class="groupName1Stage">Organize office</li>` +
         '</div>' +
         '<div class="groupGridStage"> ' +
             `<li class="groupName1Stage">Hit the gym</li>` +
             `<li class="groupName1Stage">Pay bills</li>` +
             `<li class="groupName1Stage">Meet George</li>` +
             `<li class="groupName1Stage">Buy eggs</li>` +
             `<li class="groupName1Stage">Read a book</li>` +
             `<li class="groupName1Stage">Organize office</li>` +
         '</div>' +
         '<div class="groupGridStage">' +
             `<li class="groupName1Stage">Hit the gym</li>` +
             `<li class="groupName1Stage">Pay bills</li>` +
             `<li class="groupName1Stage">Meet George</li>` +
             `<li class="groupName1Stage">Buy eggs</li>` +
             `<li class="groupName1Stage">Read a book</li>` +
             `<li class="groupName1Stage">Organize office</li>` +
         '</div>'  +
     '</ul>'
    );
   let savedGridListArr = localStorage.setItem('savedGridListArr', listofTeam);
   console.log(savedGridListArr);
};


//Save to Local Storage
let savedGridList = document.getElementById('myUL');

document.getElementById('Change_3').addEventListener('click', function (event) {

	localStorage.setItem('savedGridList', savedGridList.innerHTML);

}, false);

// Check for saved wishlist items
let saved = localStorage.getItem('savedGridList');

// If there are any saved items, update our list
if (saved) {
	savedGridList.innerHTML = saved;
}


document.getElementById('Clear').addEventListener('click', () => {
    storage.removeItem(savedGridList);
});

let arrListOfTournament = [];

//console.log(savedGridListArr);