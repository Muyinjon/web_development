
//collect th elements
const usernamecollect = document.querySelector('.usernamecollect');
const languagecollect = document.querySelector('.languagecollect');
//set the value stored in sessionstorage to each collected element
usernamecollect.innerHTML = sessionStorage.getItem('firstname');
languagecollect.innerHTML = sessionStorage.getItem('selection_language');
