
let projects = [
    {
        name: 'GITHUB Fetch API',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero doloremque, voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/bGKbWWz',
        number: 0
    },
    {
        name: 'Clock',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/BaPWKBM',
        number: 1
    },
    {
        name: 'Wikipedia Search',
        description: 'voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/eYKVodL',
        number: 2
    },
    {
        name: 'Calculator',
        description: 'calculate tjhe number',
        link: 'calculator link',
        number: 3
    },
    {
        name: 'To do app',
        description: 'list of things to do',
        link: 'to do app link',
        number: 4
    },
    {
        name: 'Movie Ticket app',
        description: 'select movie and calculate movie ticket',
        link: 'https://codepen.io/angkamilama/pen/RwBBKYX',
        number: 5
    }

]

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const projectInfo = document.querySelector('.project-info');
const openProject = document.querySelector('.open-projects');

let index = 0;

const showAnotherProject = (nextIndex) => {
  if (nextIndex < 0) {
    index = projects.length - 1 ;

} else if (nextIndex >= projects.length){
    index = 0;
} else {
    index = nextIndex;
}
  
  displayProject()
}

prevBtn.addEventListener('click', () => showAnotherProject(index - 1));
nextBtn.addEventListener('click', () => showAnotherProject(index + 1));
openProject.addEventListener('click', () => {
    displayProject();
} )

function displayProject() {
    projectInfo.innerHTML = `<h2 class="project-title">${projects[index].name}</h2>
    <p class="project-description">${projects[index].description}</p>
    <div class="project-number"><i class="fa-solid fa-angles-left"></i> <span class="project-index">${projects[index].number + 1}</span> of ${projects.length} <i class="fa-solid fa-angles-right"></i></div>
    <a href=${projects[index].link} class="project-link" target="_blank">Checkout this project !!!</a>`;
}