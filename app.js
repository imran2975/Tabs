const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if(id){
        // active from other btns
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide other article
        articles.forEach((article) => {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    } 
})