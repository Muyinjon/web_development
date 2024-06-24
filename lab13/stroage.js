/* Survey form*/
const myform = document.querySelector('.myform');
const displayresult = document.querySelector('.displayresult');

myform.addEventListener('submit', function(event){
    //collect components
    const username = document.querySelector('#firstname').value;
    const fav_language = document.querySelector('input[name="fav_language"]:checked').value;
    
    // // to test if the data was collected, we cam set a prevent default
    // event.preventDefault();
    // displayresult.innerHTML = `Username: ${username} <br> and favorite language: ${fav_language}`;

    //save data, username and fav_language
    sessionStorage.setItem('firstname', username);
    sessionStorage.setItem('selection_language', fav_language);
    sessionStorage.setItem('product123',"Product 123");

})

// Shopping cart
//collect data
const itemname1 = document.querySelector('.itemname1').innerHTML;
const itemdiscription1 = document.querySelector('.itemdiscription1').innerHTML;
const salesprice1 = document.querySelector('.salesprice1').innerHTML;
const imgitem1 = document.querySelector('.imgitem1').src;
/////
const formitem1 = document.querySelector('.formitem1');
formitem1.addEventListener('submit', function(event){
    //collect tje quantity
    const quantityitem1 = document.querySelector('.quantityitem1').value;
    //set data into session storage
    sessionStorage.setItem('quantityitem1', quantityitem1);
    sessionStorage.setItem('itemname1', itemname1);
    sessionStorage.setItem('itemdiscription1', itemdiscription1);
    sessionStorage.setItem('salesprice1', salesprice1);
    sessionStorage.setItem('imgitem1', imgitem1);
})