const fixCasing = str => {
    str = str.split(' ')
    if(str[str.length - 1] === ''){
        str.pop()
    }
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
    }
    return str.join(' ')
}

const modalHTML = {
    'wishlist': `
        <button id="exit-modal" class="btn">X</button>
        <form id="wishlist-form" class="modal-form">
            <div class="select-container">
                <label for="countries" class="form-label">Select a Country:</label>
                <select name="countries" id="country-dropdwn" class="input-field" value="" required>
                    
                </select>
            </div>
            <input class="input-field" id="wishlist-input" type="text" placeholder="What do you want to see?" required>
            <button class="btn" id="wishlist-btn">Add to wishlist!</button>
        </form>
    `
}



// module.exports = {
//     fixCasing
// }