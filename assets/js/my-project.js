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

  const startDate = new Date(start);
  console.log("awal" + startDate);
  const endDate = new Date(end);
  console.log("akhir" + endDate);
  const day = Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24 /30);
  console.log("tanggal nya adalah" + day);

  const projects = {
    project,
    day,
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
  console.log();
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
    <p>durasi: ${myProject[index].day} bulan</p>
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
