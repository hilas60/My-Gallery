console.log('Starting up');

// init();

$(document).ready(function(){
    renderProjects();
    $('.portfolio-item > a').click(function(){
        renderModal(+this.dataset.id);
    })
    // $(form).submit(function() {
    //     // $("form")
    // })

    }
)

function renderProjects() {
    var projects = getProjects();
    var strHTMLs = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" data-id="${project.id}" href="#portfolioModal${project.id}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="${project.img}" alt="">
                    </a>
                    <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.labels}</p>
                    </div>
                </div>`
    })
    $('.proj-container').html(strHTMLs.join(''));
}

function renderModal(projectId) {
    var project = getProjects().find(function (project) {
        return project.id === projectId
    });
    $(".portfolio-modal").attr("id",`portfolioModal${project.id}`); //proj ID
    $(".modal-body>h2").text(project.name); //title
    $(".modal-body>.item-intro").text(project.labels); //labels
    $(".modal-body>img").attr("src", `${project.img}`); //image
    $(".modal-body>.proj-description").text(project.desc); //desc
}

function onContactMe() {

}