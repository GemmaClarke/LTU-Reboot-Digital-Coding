const active = document.querySelector('.active');
const buttons = document.querySelectorAll('button');

const imageSource = document.querySelectorAll('.image img');

const allImages = document.querySelectorAll('.image');

function toggleImages( dataClass ){
 if ( dataClass === 'all' ){
    allImages.forEach(image => image.style.display = 'flex' );
 } else {
     allImages.forEach( image => {
         if(image.dataset.class ){
             
         }
     })
 }
}



// const main = document.querySelector('main');

// const newDiv = document.createElement('div');
//     newDiv.classList.add('image');
//     newDiv.setAttribute('data-class', 'people');

//     const newImage = document.createElement('img');
//         newImage.setAttribute('src', 'https://images.unsplash.com/photo-1611948357031-ef7bce1e44f0')
//         newDiv.appendChild(newImage);

// main.appendChild( newImage );



