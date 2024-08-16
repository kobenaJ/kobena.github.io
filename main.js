const openmenu = document.querySelector(".button-cache");
const slide = document.querySelector(".side-nav");
const closemenu = document.querySelector(".close-side");

openmenu.addEventListener('click', ()=> {
	slide.classList.toggle('menu');
})
closemenu.addEventListener('click', ()=> {
	slide.classList.toggle('menu');
})

console.log('oulala');

data=[
	{ source:'source/student.png',nom:'@none',prenom:'kobena junior',universite:'Una', contact:'00000000',email:'k@gmail.com' },
	{ source:'pp/risto.png',nom:'Kouadio',prenom:'Jean Evariste',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/mira.png',nom:'Sami2.0',prenom:'...',universite:'IUA', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/ru.png',nom:'Gahie',prenom:'Ruth Carmen',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/marc.png',nom:'Goue',prenom:'Loua Marc',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/fat.png',nom:'Ouattara',prenom:'Tehua Fat',universite:'Una', contact:'0000000',email:'KO@gmail.com' },
	{ source:'source/student.png',nom:'Nzue',prenom:'Othniel',universite:'Esatic', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/lu.png',nom:'Agbely',prenom:'Escar Ludivine',universite:'Pigier', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/syntyche.png',nom:'Ligbio',prenom:'Syntyche Emmanuela',universite:'...', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/ulysse.png',nom:'Ulysse',prenom:'Ange Elysee',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/messi.png',nom:'tymmysantos0123',prenom:'Messi',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ed.png',nom:'edmond',prenom:'Bi tra',universite:'Una', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/ahly.png',nom:'Bosson',prenom:'Ahly...',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/nexy.png',nom:'Kouakou',prenom:'nexy',universite:'UPGC', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/elie.png',nom:'...',prenom:'Jean Elie',universite:'...', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/fof.png',nom:'Fofana',prenom:'Aboubacar dj...',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ber.png',nom:'Kouakou',prenom:'Armel Berenger',universite:'UAO', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ach.png',nom:'Achille',prenom:'Eric',universite:'Una', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/couse.png',nom:'Couse',prenom:'Vianney',universite:'UAO', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/eddin.png',nom:'Yannick',prenom:'Eddin',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/frangine.png',nom:'Koffi',prenom:'frangine',universite:'...', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/risto.png',nom:'Apotre',prenom:'Risto',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ama.png',nom:'Kamal',prenom:'marie aimée',universite:'UAO', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/gauss.png',nom:'Gauss',prenom:'herman',universite:'UVCI', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/brice.png',nom:'brice',prenom:'jean...',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/krams.png',nom:'Krams',prenom:'...',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/alino.png',nom:'Alain',prenom:'Coeur dange',universite:'UFHB', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/heno.png',nom:'heno',prenom:'..v',universite:'Una', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ray.png',nom:'Ange',prenom:'raymond',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'pp/ib.png',nom:'ib',prenom:'ib',universite:'Una', contact:'0000000',email:'KO@gmail.com' },
	{ source:'source/person_search.png',nom:'Jum',prenom:'Aude Iris',universite:'...', contact:'0000000',email:'k@gmail.com' },
	{ source:'source/student.png',nom:'...',prenom:'dani',universite:'UFHB', contact:'0000000',email:'k@gmail.com' },
	{ source:'source/person_search.png',nom:'T...',prenom:'R',universite:'..', contact:'0000000',email:'KO@gmail.com' },
	{ source:'pp/ach.png',nom:'....',prenom:'françoise',universite:'UFHB', contact:'0000000',email:'k@gmail.com' },
	{ source:'source/student.png',nom:'Koffi',prenom:'kobena junior',universite:'Una', contact:'0000000',email:'k@gmail.com' },

]

const searchInput = document.querySelector("#search")
const searchResult = document.querySelector(".table-results")

let dataArray;

dataArray = OrderList(data)
creatUserList(dataArray)

function OrderList(data){
	const orderedData = data.sort( (a,b) => {
		if  (a.nom.toLowerCase()<b.nom.toLowerCase()){
			return -1;
		}
		if  (a.nom.toLowerCase()>b.nom.toLowerCase()){
			return 1;
		}
		return 0;
	})
	return orderedData;
}

function creatUserList(usersList) {
	usersList.forEach(user =>{

		const listItem = document.createElement("div");
		listItem.setAttribute("class","table-item")

		listItem.innerHTML = `

			<div class="container-img">
				<img src=${user.source}>
				<p class="name">${user.nom}</p>
			</div>

			<p class="surname">${user.prenom}</p>
			<p class="univ">${user.universite}</p>
			<p class="contact">${user.contact}</p>
			<p class="mail">${user.email}</p>

		  `
		  searchResult.appendChild(listItem)
	})
}

searchInput.addEventListener("input",filterData)

function filterData(e){
	searchResult.innerHTML = ""

	const searchedString = e.target.value.toLowerCase().replace(/\s/g,"");

	const filteredArr = dataArray.filter( el => el.nom.toLowerCase().includes(searchedString) || el.prenom.toLowerCase().includes(searchedString) || `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) || `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)  );
	
	creatUserList(filteredArr)
}
// console.log(dataArray)