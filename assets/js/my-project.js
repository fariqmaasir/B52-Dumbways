const myProject = [];

function addProject(e) {
  e.preventDefault();

  const project = document.getElementById("name").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const node = document.getElementById("node").checked;
  const js = document.getElementById("js").checked;
  const react = document.getElementById("react").checked;
  const type = document.getElementById("type").checked;
  const description = document.getElementById("desc").value;
  const image = document.getElementById("image").files;
  const imageLink = URL.createObjectURL(image[0]);

  let tech = []

    for (let x = 0; x < technologies.length; x++) {
        if (technologies[x].checked) {
            tech.push(technologies[x].value)
        }
    }

  const startDate = new Date(start);
  console.log("awal" + startDate);
  const endDate = new Date(end);
  console.log("akhir" + endDate);
  const day = Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24 /30);
  console.log("tanggal nya adalah" + day);

  const projects = {
    project,
    start,
    end,
    day,
    node,
    js,
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

// Project Detail //
function renderProjectDetail() {
  let html = "";

  for (let index = 0; index < myProject.length; index++) {
    let renderTechIcons = ''

        if (blogs[index].node) {
            renderTechIcons += `<i class="fa-brands fa-node-js"></i>node js`
        }

        if (blogs[index].js) {
            renderTechIcons += `<i class="fa-brands fa-js"></i>javascript`
        }
        if (blogs[index].react) {
            renderTechIcons += `<i class="fa-brands fa-react"></i>react`
        }
    html += `<div class="image">
    <img src="${myProject[index].image}" alt="img">
  </div>
  <div class="details">
    <p>Duration</p>
    <ul class="time">
      <li><i class="fa-regular fa-calendar-days"></i>${myProject[index].start} - ${myProject[index].end}</li>
      <li><i class="fa-regular fa-clock"></i>${myProject[index].day}</li>
    </ul>
    <h>Technologies</h>
    <ul class="tech">
      <li><i class="fa-brands fa-react"></i>react js</li>
      <li><i class="fa-brands fa-js"></i>java script</li>
      <li><i class="fa-brands fa-node-js"></i>node js</li>
      <li></li>
    </ul>
  </div>
</div>
<div class="description">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus morbi diam, sed elementum semper luctus. Venenatis laoreet id morbi amet, sit volutpat pulvinar scelerisque tempor. Integer pulvinar ultrices fermentum proin quam fermentum interdum eu. Sapien nulla gravida imperdiet eget tincidunt. Dictum venenatis urna, quam feugiat malesuada arcu quam. Congue id auctor blandit felis pulvinar tincidunt erat nec volutpat. Tellus quisque tortor oenan neque, neque dolor justo. Nec facilisis morbi ac condimentum odio. Dolor, dignissim viverra iaculis consectetur integer ipsum,</p>
  <p>Quis ipsum suspendisse ultrices gravida dictum fusce ut. Purus in mollis nunc sed id semper risus. Et magnis dis parturient montes nascetur ridiculus. Vulputate ut pharetra sit amet aliquam id diam. Natoque penatibus et magnis dis parturient montes nascetur. Massa vitae tortor condimentum lacinia quis. Urna neque viverra justo nec ultrices dui sapien eget mi. Quis eleifend quam adipiscing vitae proin. Donec adipiscing tristique risus nec. Ac tincidunt vitae semper quis lectus. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Et malesuada fames ac turpis. In hendrerit gravida rutrum quisque non tellus. Nisl vel pretium lectus quam id leo in. Justo nec ultrices dui sapien eget mi. Eu facilisis sed odio morbi. Odio aenean sed adipiscing diam donec adipiscing. Cras semper auctor neque vitae tempus quam pellentesque nec.</p>
  <p>Quam quisque id diam vel quam elementum pulvinar. At in tellus integer feugiat scelerisque varius morbi enim. Etiam tempor orci eu lobortis elementum. Et sollicitudin ac orci phasellus. Nunc sed augue lacus viverra vitae congue eu consequat. Volutpat ac tincidunt vitae semper quis lectus nulla. Massa sed elementum tempus egestas sed sed risus pretium. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Volutpat commodo sed egestas egestas fringilla phasellus. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Condimentum lacinia quis vel eros donec ac odio tempor. At imperdiet dui accumsan sit amet nulla. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Volutpat sed cras ornare arcu dui vivamus arcu.</p>
</div>
</div>`
    
  }
}