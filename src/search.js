const searchForm = document.querySelector('#searchForm'),
searchInput = searchForm.querySelector('#search')


searchForm.addEventListener('submit' , (event) =>{
    event.preventDefault();
    let search = searchForm.querySelector('#search').value
    if (search.length > 0){
        document.querySelector('#hero #searchData').classList.remove('hidden')
        document.querySelector('#searchData').classList.add('flex')
        getAnime(search)
    }
})

searchInput.addEventListener('keyup' , e =>{
    let search = e.target.value;
    if (search.length > 0){
        document.querySelector('#hero #searchData').classList.remove('hidden')
        document.querySelector('#searchData').classList.add('flex')
        getAnime(search)
    }else{
        document.querySelector('#hero #searchData').classList.remove('flex')
        document.querySelector('#searchData').classList.add('hidden')

    }


})



function getAnime(anime){

    let url = `https://api.jikan.moe/v4/anime?q=${anime}`;

    fetch(url).then(res => res.json()).then(data =>{
        document.querySelector('#hero #searchData').innerHTML=`<span id="close" class="close  text-boor text-2xl cursor-pointer "><i class='bx bx-window-close'></i></span>`;

        data.data.forEach(anime => {

            let SearchAnime = `
            
            
            <a href=${anime.url} class="anime flex w-full  h-[83px]  gap-4 items-center bg-bgColor1 rounded border-boor border-2 overflow-hidden">
            <img class="h-[83px]" src=${anime.images.jpg.image_url}>
            <div class="conent w-1/2 flex flex-col space-y-3">
                <p class="name truncate overflow-hidden text-white">${anime.title}</p>
                <span class="text-gray-500 w-full flex justify-between items-center"><p class="year w-1/2 ">${anime.year}</p><p class="w-1/2 score space-x-5 flex items-center"><i class='bx bxs-star-half text-boor'></i>${anime.score}</p></span>
            </div>
        </a>

            `
            document.querySelector('#hero #searchData').innerHTML+=SearchAnime


        });
        document.querySelector('#searchData #close').addEventListener('click' , ()=>{
            document.querySelector('#hero #searchData').classList.remove('flex')
            document.querySelector('#searchData').classList.add('hidden')
        
        })
        
    })
}