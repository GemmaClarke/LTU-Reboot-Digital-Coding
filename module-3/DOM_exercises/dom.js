/**
 * Exercise 01
 * -----------
 * Highlight all of the words that are over 8 characters long in the paragraph text (with a yellow background)
 * 
 *  
 * 
 */

const paragraph = document.querySelector('p');

paragraph.innerHTML = paragraph.innerHTML.split(' ')
.map( word => word.length > 8 ?
`   <span style="background-color: yellow"> ${word} </span>`: 
    word ).join(' ');


/**
 * Exercise 02
 * -----------
 * Add link to source of the text after the paragraph tag.
 * (https://forcemipsum.com/)
 * 
 * 
 */

const link = document.createElement('a');
    link.setAttribute('href', 'https://forcemipsum.com/');
    link.textContent = 'Text generated from forcemipsum';
    document.bodyappendChild( link );