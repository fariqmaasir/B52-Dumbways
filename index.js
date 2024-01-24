const express = require('express')
const dbPool = require('./src/connection/index')
const app = express()
const port = 5000
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

const ProjectModel = require('./src/models/project')

app.set('view engine','hbs')
app.set('views','src/views')

app.use('/assets',express.static('src/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', home)

// app.get('/api/test',async (req,res)=>{
//   // 1. ambil data project dari db

//   const result = (await dbPool.query('SELECT * FROM project')).rows;
//   // 2. kembalikan / kasih response ke client
  
//   res.json({ success : 'haiii ini path test' , data : result})
// })

app.get('/contact', contact)

app.post('/project', getProject)
app.get('/project', project)

app.get('/add-project', addProject)

app.get('/testimonial', testimonial)

app.get('/project-detail/:id',  projectDetail) 

app.get('/delete/:id', deleteProject)

app.post('/reproject/:projectId', editProject)
app.get('/reproject/:id', editProjectView)


const technologiesIcon = {
    ReactJs: 'fa-brands fa-react fa-2x',
    Javascript: 'fa-brands fa-js fa-2x',
    NodeJs: 'fa-brands fa-node-js fa-2x',
    Golang: 'fa-brands fa-golang fa-2x'
}

function home (req,res){
    res.render('index')
}

function contact (req,res){
    res.render('contact')
}

async function project (req,res)
{   
    const query = "SELECT * FROM projects"
    const objProjects = await sequelize.query(query, { type: QueryTypes.SELECT });
    res.render('project' , {arrCards : objProjects})
}

function addProject (req,res){
    res.render('add-project')
}

function testimonial (req,res){
    res.render('testimonial')
}

async function projectDetail (req,res){
    const { id } = req.params

    const query = `SELECT * FROM projects WHERE id=${id}`;
    const objProjects = await sequelize.query(query, { type: QueryTypes.SELECT });

    const monthList = [
      "January",
      "Febuary",
      "March",
      "Apil",
      "May",
      "Juny",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let firstDate = new Date(objProjects[0].start_date);
    const dateStart = firstDate.getDate();
    const monthStart = firstDate.getMonth();
    const yearStart = firstDate.getFullYear();
  
    let endDate = new Date(objProjects[0].end_date);
    const dateEnd = endDate.getDate();
    const monthEnd = endDate.getMonth();
    const yearEnd = endDate.getFullYear();
    
    const dateOne = `${dateStart} ${monthList[monthStart]} ${yearStart}`;
    const dateTwo = `${dateEnd} ${monthList[monthEnd]} ${yearEnd}`;
    res.render('project-detail',{arrCards : objProjects[0],dateOne,dateTwo})
}

async function deleteProject(req,res) {
    const {id} = req.params

    const query = `DELETE FROM projects WHERE id=${id}`
    const objProjects = await sequelize.query(query, { type:QueryTypes.DELETE})

    res.redirect('/project')
}

async function editProject(req,res) {
    let { title,startDate,endDate,description,technologies } = req.body
    const { projectId } = req.params

    const id = Number(projectId)
    const iconList = technologies ? String(technologies).split(',') : [];
    const renderIcon =  iconList.map( currentIcon => technologiesIcon[currentIcon] )

    const dateOne = new Date(startDate);
    const dateTwo = new Date(endDate);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(time / (1000 * 60 * 60 * 24) / 365);

    let duration = ''

    if (days < 30) {
      duration += days + " Hari";
    } else if (months < 12) {
      duration += months + " Bulan";
    } else if (years < 365) {
      duration += years + " Tahun";
    }
    
    const query = `UPDATE projects SET title='${title}',start_date='${startDate}',end_date='${endDate}',description='${description}',technologies='{${technologies}}',duration='${duration}' WHERE id=${id}`
    const objProjects = await sequelize.query(query, { type: QueryTypes.UPDATE });

    res.redirect('/project')
}
async function editProjectView(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM projects WHERE id=${id}`
  const objProjects = (await sequelize.query(query, { type: QueryTypes.SELECT}))[0]
  
  if(!objProjects){
    res.render('add-project')
  }

  res.render("edit-project", { ...objProjects });
}

async function getProject (req,res) {
    const { title,startDate,endDate,description,technologies } = req.body
    const iconList = technologies ? String(technologies).split(',') : [];
    const renderIcon =  iconList.map( currentIcon => technologiesIcon[currentIcon] )
    let tech = Object.values(technologies); 
    console.log("==================================" + tech)
    const dateOne = new Date(startDate);
    const dateTwo = new Date(endDate);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(time / (1000 * 60 * 60 * 24) / 365);

    let duration = ''

    if (days < 24) {
      duration += days + " Hari";
    } else if (months < 12) {
      duration += months + " Bulan";
    } else if (years < 365) {
      duration += years + " Tahun";
    }
    const query = `INSERT INTO projects (title,start_date,end_date,description,technologies,duration, "createdAt", "updatedAt")VALUES ('${title}','${startDate}','${endDate}','${description}','{${tech}}','${duration}',NOW(),NOW())`
    const objProjects = await sequelize.query(query, { type: QueryTypes.INSERT });

    res.redirect('/project')

}
app.listen(port, () => {
  console.log(`server berjalan diport ${port}`)
})