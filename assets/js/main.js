const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];
console.log(team);

const teamSection = document.getElementById("main_team");

for (let i = 0; i < team.length; i++) {
  const teamMember = team[i];
  // console.log(teamMember.name);
  const name = teamMember.name;
  // console.log(name);

  const role = teamMember.role;
  // console.log(role);

  const img = teamMember.image;
  // console.log(img);

  const markup =
    `<li class="col">
    ${name} | ${role} | 
    <img src="assets/img/${img}" alt="">
  </li>`

  console.log(markup);

  teamSection.insertAdjacentHTML('beforeend', markup);
}