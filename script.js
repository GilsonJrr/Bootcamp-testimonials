let photo = document.getElementById('photo')
let text = document.getElementById('Text')
let names = document.getElementById('Name')
let possition = document.getElementById('Possition')

let n = 0

let data = [
    {   
        id: 1,
        photo: './IMG/image-john.jpg',
        Text: '" If you want to lay the best foundation possible I`d recommend taking this course. The depth the instructors go into is incredible. I now fell so confident about starting up as a professional developer "',
        Name: 'John Tarkpor',
        Possition: 'Junior Front-end developer',
    },
    {   
        id: 2,
        photo: './IMG/image-tanya.jpg',
        Text: "'' I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future''",
        Name: 'Tanya Sinclair',
        Possition: 'UX Engineer',
    },
]

let long = data.length

function Load(){
    photo.src = data[n].photo,
    text.innerHTML = data[n].Text,
    names.innerHTML = data[n].Name
    possition.innerHTML = data[n].Possition
}


function prevnext(a){
    if(a == 1 && n > 0){
        n--
        Load()
    }
    if(a == 2 && n < long-1){
        n++
        Load()
    } 
}