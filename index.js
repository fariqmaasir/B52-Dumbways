const express = require('express')

const app = express()
const port = 5000

app.set('view engine','hbs')
app.set('views','src/views')

app.use('/assets',express.static('src/assets'))

app.get('/', home)
app.get('/contact', contact)
app.get('/project', project)
app.get('/add-project', addProject)
app.get('/testimonial', testimonial)
app.get('/project-detail/:id',  projectDetail) 

const arrCards = [
    {
        title : 'Dumbways Mobile App - 2021',
        img : 'https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/6193dca3e8165c52e89c7f2b_florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
        duration : 3,
        description : 'App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download'
    },
    {
        title : 'Dumbways Mobile App - 2021',
        img : 'https://awsimages.detik.net.id/community/media/visual/2022/04/14/ilustrasi-smartphone.jpeg?w=650&q=80',
        duration : 3,
        description : 'App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download'
    },
    {
        title : 'Dumbways Mobile App - 2021',
        img : 'https://cdn.idntimes.com/content-images/post/20210921/ayzp5pqupuyrandxq9fhj-df0ae4fa7399bd541273bed4e010bc78_600x400.jpg',
        duration : 3,
        description : 'App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download'
    }
]

function home (req,res){
    res.render('index')
}

function contact (req,res){
    res.render('contact')
}

function project (req,res){
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

app.listen(port, () => {
  console.log(`server berjalan diport ${port}`)
})
