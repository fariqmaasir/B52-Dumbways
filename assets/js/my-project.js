const myProject = [];

function addProject(e) {
  e.preventDefault();

  const project = document.getElementById("name").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const node = document.getElementById("node").checked;
  const next = document.getElementById("next").checked;
  const react = document.getElementById("react").checked;
  const type = document.getElementById("type").checked;
  const description = document.getElementById("desc").value;
  const image = document.getElementById("image").files;

  const imageLink = URL.createObjectURL(image[0]);

  const projects = {
    project,
    start,
    end,
    node,
    next,
    react,
    type,
    description,
    image: imageLink,
  };

  myProject.unshift(projects);
  renderProject();

  console.log("myProject", project);

  console.log("project", project);
  console.log("description", description);
  console.log("image", imageLink);
}

function renderProject() {
  let html = "";

  for (let index = 0; index < myProject.length; index++) {
    html += ` <div class="card">
    <img src="${myProject[index].image}" alt="Dumbways Mobile App">
    <a href="my-project-detail.html">${myProject[index].project}</a>
    <p>durasi: 3 bulan</p>
    <p>${myProject[index].description}</p>
    <div class="logo">
      <i class="fa-brands fa-google-play"></i>
      <i class="fa-brands fa-android"></i>
      <i class="fa-brands fa-java"></i>
    </div>
    <div class="options">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div> `;
  }
  document.getElementById("grid").innerHTML += html;
}   