//Browse all articles
const allArticlesBtn = document.querySelector('.btn-articles');
const showArticles = document.querySelectorAll('.articles-card-hide');

allArticlesBtn.addEventListener('click', (e) => {
    for (let i = 0; i < showArticles.length; i++){
        showArticles[i].classList.add('show');
    }
});