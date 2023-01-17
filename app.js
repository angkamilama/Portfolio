let projects = [
    {
        name: 'GITHUB Fetch API',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero doloremque, voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/bGKbWWz'
    },
    {
        name: 'Clock',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/BaPWKBM'
    },
    {
        name: 'Wikipedia Search',
        description: 'voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
        link: 'https://codepen.io/angkamilama/pen/eYKVodL'
    },
    {
        name: 'Calculator',
        description: 'calculate tjhe number',
        link: 'calculator link'
    },
    {
        name: 'To do app',
        description: 'list of things to do',
        link: 'to do app link'
    },

]
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const projectInfo = document.querySelector('.project-info');

prevBtn.addEventListener('click', previousProject);
nextBtn.addEventListener('click', nextProject);

let index = 0;


function nextProject() {
    if (index < projects.length - 1) {
        index++;  
        projectInfo.innerHTML = `<h2 class="project-title">${projects[index].name}</h2>
        <p class="project-description">${projects[index].description}</p>
        <a href=${projects[index].link} class="project-link" target="_blank">Checkout this project !!!</a>`;
        } else {
        index = 0;
        projectInfo.innerHTML = `<h2 class="project-title">${projects[index].name}</h2>
        <p class="project-description">${projects[index].description}</p>
        <a href=${projects[index].link} class="project-link" target="_blank">Checkout this project !!!</a>`;
        }
}




function previousProject() {
    if (index >= 1) {
        index--;
        projectInfo.innerHTML = `<h2 class="project-title">${projects[index].name}</h2>
        <p class="project-description">${projects[index].description}</p>
        <a href=${projects[index].link} class="project-link" target="_blank">Checkout this project !!!</a>`;
    } else {
        index = projects.length - 1;
        projectInfo.innerHTML = `<h2 class="project-title">${projects[index].name}</h2>
        <p class="project-description">${projects[index].description}</p>
        <a href=${projects[index].link} class="project-link" target="_blank">Checkout this project !!!</a>`;

    }
}