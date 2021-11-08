const buttons = document.querySelectorAll('button');

const allImages = document.querySelectorAll('.image');
// Collect all image and save in a variable called allImages


const toggleImages = dataClass => {
    // Ternary operator
    dataClass === 'all' 
    ? allImages.forEach( image => image.style.display = 'flex' ) 
    : allImages.forEach( image => {
    image.dataset.class === dataClass 
    ? (image.style.display = 'flex')
    : ( image.style.display = 'none' );

});

}

   

const toggleActiveClass = ( active ) => {
    buttons.forEach( button => {
        button.classList.remove('active');
    })

    active.classList('active');
}

buttons.forEach ( button=> {
    button.addEventListener('click', () => {
        toggleImages(button.dataset.class);
        toggleActiveClass( button );

    });
})

// const main = document.querySelector('main');

// const newDiv = document.createElement('div');
//     newDiv.classList.add('image');
//     newDiv.setAttribute('data-class', 'people');

//     const newImage = document.createElement('img');
//         newImage.setAttribute('src', 'https://images.unsplash.com/photo-1611948357031-ef7bce1e44f0')
//         newDiv.appendChild(newImage);

// main.appendChild( newDiv );



