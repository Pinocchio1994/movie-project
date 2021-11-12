function Movie(title,description,rate,img){
    this.title = title;
    this.description = description;
    this.rate = rate;
    this.img = img;
}
const moviesInfo = []
moviesInfo.push(new Movie('عشقولانس','irani1',10,'./img/tizer/eshghoolans.jpg'))
moviesInfo.push(new Movie('لازانیا','irani1',8.7,'./img/tizer/IMG_20190407_155348_263.jpg'))
moviesInfo.push(new Movie('خرکوش','irani1',6.5,'./img/tizer/kharg.jpg'))
moviesInfo.push(new Movie('منشی مخصوص من','irani1',8,'./img/tizer/monshi-makhsoose-man-iranian-movie.jpg'))
moviesInfo.push(new Movie('تخت گاز','irani1',5,'./img/tizer/TakhteGaz-Poster.jpg'))
moviesInfo.push(new Movie('یکی برای همه','irani1',7.5,'./img/tizer/unnamed.jpg'))
moviesInfo.push(new Movie('وای آمپول','irani1',4.9,'./img/tizer/VayAmpol.jpg'))
moviesInfo.push(new Movie('در مدت معلوم','irani1',8,'./img/tizer/در-مدت-معلوم.jpg'))
const cardView = (cardInfo) => {
    return `
<div class="card col-3">
        <div>
            <img src=${cardInfo} class="photo" alt="cardInfo.title"/>
        </div>
        <div>
            <h3 class="title">
                ${cardInfo.title}
                ${cardInfo.rate}
            </h3>
            <h4 class="dec">
                ${cardInfo.description}
            </h4>
        </div>
</div> `
}
const generatorCards = (cardsInfoList) => {
    return cardsInfoList.map(cardInfo => {
        return cardView(cardInfo)
    })
}
const coedCotainer = document.getElementById("container");
coedCotainer.innerHTML = generatorCards(moviesInfo)

function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = moviesInfo.filter(card=>{
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })
    coedCotainer.innerHTML = generatorCards(filteredCards)
}


