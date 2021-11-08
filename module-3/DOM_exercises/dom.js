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
    link.textContent = 'Text generated from force ipsum';
    document.body.appendChild( link );

/**
 * Exercise 03
 * -----------
 * Split each new sentence on to a separate line on the paragraph of text. A sentence can be assumed to be a string of text terminated with a period (.).
 * 
 * 
 */

const splitp = paragraph.innerHTML.split('.')
.join('.</p><p> + </p>');

/**
 * Exercise 04
 * -----------
 *Count the number of words in the paragraph tag and display the count after the heading.
 You can assume that all words are separated by one singular white space.
 * 
 * 
 */

 const wordCount = paragraph.innerText.split(' ').length;
 const wordCountElem = document.createElement('div');
    wordCountElem.innerText = `${wordCount} words`; //271 words
    document.body.insertBefore( wordCountElem, paragraph);

/**
 * Exercise 05
 * -----------
 Replace all the question marks with a thinking face (🤔 ) and all the ! with an astonished face (😯).
 * 
 * 
 * 
 */
 
 Array.from(document.querySelectorAll('p') )
 .forEach( p =>{
    p.innerHTML = p.innerHTML
    .replace( /\?/g, '🤔')
    .replace( /\!/g, '😯')
 } )
