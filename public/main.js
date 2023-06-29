const form = document.querySelector('#wishlist-form')
const input = document.querySelector('#wishlist-input')
const lists = document.querySelectorAll('.place-list')
const modalBtns = document.querySelectorAll('.modal-btn')
const modal = document.querySelector('#modal')

const openModal = evt => {
    modal.style.display = 'flex'
    modal.style.justifyContent = 'center'
    modal.style.alignItems = 'center'

    let type = evt.target.id.split('-')[0]
    console.log(type)
    populateModal(type)
}

const exitModal = evt => {
    console.log('hit')
    modal.style.display = 'none'
    modal.innerHTML = ''
}

const populateModal = type => {
    modal.innerHTML = modalHTML[type]

    const exitModalBtn = document.querySelector('#exit-modal')
    exitModalBtn.addEventListener('click', exitModal)
}

const clearList = () => {
    for(let i = 0; i < lists.length; i++){
        lists[i].innerHTML = ''
    }
}

const getPlaces = () => {
    clearList()

    axios.get('/api/place')
        .then(response => {
            displayPlaces(response.data)
        }).catch(err => console.log(err))
}

const displayPlaces = placeArr => {
    clearList()
    
    placeArr.forEach((place,index) => {
        const {visited,name,flag,alt,description} = place

        let listItem = document.createElement('li')
        listItem.innerHTML = `
            <div class="place-container">
                <header class="country-header">
                    <img src="${flag}" alt="${alt}" class="flag-img"/>
                    <span class="country-name">${name}</span>
                </header>
                ${visited ? `<p class="visit-description">${description}</p>` : ``}
                ${visited ? `<button class="btn" id="${index}">Unvisit</button>` : `<button class="btn" id="${index}">Visit</button>`}
                <button class="btn">Delete</button>
            </div>
        `
        
        if(place.visited){
            lists[1].appendChild(listItem)
        } else {
            lists[0].appendChild(listItem)
        }
    })
}
        
        // const addPlace = evt => {
            //     evt.preventDefault()
            //     let place = fixCasing(input.value)
            //     let bodyObj = {
                //         place,
                //         visited: false
                //     }
                
                //     axios.post('/api/place',bodyObj)
                //         .then(response => {
                    //             displayPlaces(response.data)
                    //         }).catch(err => console.log(err))
// }


// form.addEventListener('submit', addPlace)

for(let i = 0; i < modalBtns.length; i++){
    modalBtns[i].addEventListener('click', openModal)
}
getPlaces()