console.log('vacanza')

// creo un array di oggetti con i dati forniti

const containerElement = document.querySelector('.container')
console.log(containerElement)

const team = [
    {
        nome : 'Wayne Barnett',
        ruolo:'Founder & CEO',	
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    
    {
        nome :'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg',
    },

    {
        nome :'Walter Gordon',
        ruolo:'Office Manager',	
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome :'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg',
    },

    {
        nome :'Scott Estrada',
        ruolo:'Developer	',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome :'Barbara Ramos',
        ruolo:'Graphic Designer',	
        foto: 'barbara-ramos-graphic-designer.jpg',
    },

   
    
]
console.log(team)

const teamMember = []
console.log(teamMember)

// stampo nella console per ogni membro del team le sue informazione
// - ciclo l'array 
for (i = 0; i < team.length; i++) {
// - ottengo singolarmente gli elementi dell' array
    const currentInformation = team[i]
    console.log(currentInformation)
// - creo una variabile information con ltre informazioni nome,ruolo,immaggine
   const informationTeamMember = `${currentInformation.nome} ${currentInformation.ruolo} ${currentInformation.foto}`
// pusho le stringhe in un nuovo array di nome teamMember   
   teamMember.push(informationTeamMember)
// - stampo in console
      console.log(informationTeamMember)

    containerElement.innerHTML += `<div class = "card> <figure class= "role-member">${currentInformation.foto}</figure> <div class= "information-member"><span>${currentInformation.nome}</span><span> ${currentInformation.ruolo}<span></div></div>`
}

// // ciclo l'array team member 
// for (i = 0; i < teamMember.length; i++) {
//     const currentMember = teamMember[i]
//     console.log(currentMember)

//     containerElement.innerHTML += 

// }

