const loadCatagory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category)
}

const displayCatagory = catagories =>{
    const catagoriesContainer = document.getElementById('catagories-container');
    catagories.forEach(category =>{
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('col');
        catagoryDiv.innerHTML = `
        <div class="container-fluid mt-5">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="#">${category.category_name}</a>
                      </li>
                    </ul>
                  </div>
                </div>
        `;
        catagoriesContainer.appendChild(catagoryDiv);
    })
}
loadCatagory();

const loadAllCatagory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
}

const displayAllCatagory = allCatagories =>{
    const allCatagoriesContainer = document.getElementById('catagories-container');
    allCatagories.forEach(allcategory =>{
        const allCatagoryDiv = document.createElement('div');
        allCatagoryDiv.classList.add('col');
        allCatagoryDiv.innerHTML = `
        <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${allcategory.author.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${allcategory.title}</h5>
                      <p class="card-text">${allcategory.details}</p> 
                    </div>
                  </div>
                </div>
        `;
        allCatagoriesContainer.appendChild(allCatagoryDiv);
    })
} 

loadAllCatagory();