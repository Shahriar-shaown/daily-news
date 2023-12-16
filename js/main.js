const loadContainer = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    const res = await fetch(url);
    const data = await res.json();
    displayContainer(data.data.news_category)
}
const displayContainer = newss => {
    const allContainer = document.getElementById('all-container')
    for (const news of newss) {
        const categoryNames = news.category_name;
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('categoryclass')
        categoryDiv.innerHTML = `
        <button onclick="categoryClick('${news.category_id}')">${categoryNames}</button>
        `;
        allContainer.appendChild(categoryDiv)
    }
}
const categoryClick = async (Id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${Id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data)
}

const displayDetails = (details) => {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.textContent = '';
    for (const detail of details) {
        console.log(detail)
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="row mb-4">
            <div class="col-md-4">
                <img src="${detail.image_url}" class="img-fluid rounded-start m-3" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">${detail.title}</h5>
                    <p class="card-text">${detail.details.slice(0, 200)}...</p>
                    <div class="d-flex">
                        <img src="${detail.author.img}" id="author" class="img-fluid rounded-start m-3" alt="...">
                        <div>
                            <p class="card-text">${detail.author.name}</p>
                            <p class="card-text">${detail.author.published_date.slice(0,10)}</p>
                        </div>
                        <div class="text-center ml-5">
                            <i class="fa-regular fa-eye"></i>
                            <p class="card-text">${detail.total_view}</p>
                        </div>
                        <div class="text-center ml-5 mt-3 mr-5">
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <button onclick = "newsDetails('${detail._id}')" class="ml-5 bg-primary text-white rounded p-2"> More details </button>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv)
    }
}
const newsDetails = async(Id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${Id}`
    const res = await fetch(url);
    const data = await res.json();
    showNewsDetails(data.data)
}
const showNewsDetails = (datas) =>{
    for(const data of datas){
        console.log(data)
    }
}
loadContainer()