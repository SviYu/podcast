//Browse all episodes
const allEpisodesBtn = document.querySelector('.btn-episodes');
const showAllEpisodes = document.querySelectorAll('.episodes-card-hide');

allEpisodesBtn.addEventListener('click', (e) => {
    for (let i = 0; i < showAllEpisodes.length; i++) {
        showAllEpisodes[i].classList.add('show-episodes');
    }
});

//Browse all articles
const allArticlesBtn = document.querySelector('.btn-articles');
const showArticles = document.querySelectorAll('.articles-card-hide');

allArticlesBtn.addEventListener('click', (e) => {
    for (let i = 0; i < showArticles.length; i++){
        showArticles[i].classList.add('show');
    }
});