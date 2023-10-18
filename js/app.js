console.log('vacanza')

// creo un array di oggetti con i dati forniti

const containerElement = document.querySelector('.container')
console.log(containerElement)

const team = [
	{
		nome: "Wayne Barnett",
		ruolo: "Founder & CEO",
		foto: "wayne-barnett-founder-ceo.jpg",
	},

	{
		nome: "Angela Caroll",
		ruolo: "Chief Editor",
		foto: "angela-caroll-chief-editor.jpg",
	},

	{
		nome: "Walter Gordon",
		ruolo: "Office Manager",
		foto: "walter-gordon-office-manager.jpg",
	},

	{
		nome: "Angela Lopez",
		ruolo: "Social Media Manager",
		foto: "angela-lopez-social-media-manager.jpg",
	},

	{
		nome: "Scott Estrada",
		ruolo: "Developer	",
		foto: "scott-estrada-developer.jpg",
	},

	{
		nome: "Barbara Ramos",
		ruolo: "Graphic Designer",
		foto: "barbara-ramos-graphic-designer.jpg",
	},
];
console.log(team);

let teamMemberAll = "";

// stampo nella console per ogni membro del team le sue informazione
// - ciclo l'array
for (i = 0; i < team.length; i++) {
	// - ottengo singolarmente gli elementi dell' array
	const currentInformation = team[i];
	console.log(currentInformation);
	// - creo una variabile information con ltre informazioni nome,ruolo,immaggine
	informationTeamMember = `${currentInformation.nome} ${currentInformation.ruolo} ${currentInformation.foto}`;
	teamMemberAll += informationTeamMember;
	// - stampo in console
	console.log(informationTeamMember);
	// stampo nel dom le stringhe con le informazioni dei singoli membri
	containerElement.innerHTML += `<div class = "card> <figure class= "role-member">${currentInformation.foto}</figure> <div class= "information-member"><span>${currentInformation.nome}</span><span> ${currentInformation.ruolo}<span></div></div>`;
}
console.log(teamMemberAll);
