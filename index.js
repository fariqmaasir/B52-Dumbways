const express = require('express')

const app = express()
const port = 5000

app.set('view engine','hbs')
app.set('views','src/views')

app.use('/assets',express.static('src/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', home)
app.get('/contact', contact)
app.get('/project', project)
app.get('/add-project', addProject)
app.get('/testimonial', testimonial)
app.get('/project-detail/:id',  projectDetail) 
app.get('/delete/:id', deleteProject)
app.get('/edit-project/:id', editProject)
app.post('/project', postProject)

const arrCards = [
  
]
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

function project (req,res)
{   
    console.log({arrCards})

    res.render('project',{arrCards})
}

function addProject (req,res){
    res.render('add-project')
}

function testimonial (req,res){
    res.render('testimonial')
}

function projectDetail (req,res){
    const { id } = req.params
    const data = arrCards[id]
    
    res.render('project-detail' , data)
}

function deleteProject(req,res) {
    const {id} = req.params

    arrCards.splice(id, 1)
    res.redirect('/project')
    console.log('berhasil')
}

function editProject(params) {
    const { title,startDate,endDate,description,technologies } = req.body
    const iconList = technologies ? String(technologies).split(',') : [];
    const renderIcon =  iconList.map( currentIcon => technologiesIcon[currentIcon] )

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
    
    arrCards.push({ title,startDate,endDate,description,duration ,icon : renderIcon })

    res.redirect('/project')
}
function postProject (req,res) {
    const { title,startDate,endDate,description,technologies } = req.body
    const iconList = technologies ? String(technologies).split(',') : [];
    const renderIcon =  iconList.map( currentIcon => technologiesIcon[currentIcon] )

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
    
    arrCards.push({ title,startDate,endDate,description,duration ,icon : renderIcon })

    res.redirect('/project')

}
app.listen(port, () => {
  console.log(`server berjalan diport ${port}`)
})