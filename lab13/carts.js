//collect the elements
const unitprice_display = document.querySelector('.unitprice_display');
const quantityitem_display = document.querySelector('.quantityitem_display');
const totalitemprice_display = document.querySelector('.totalitemprice_display');
const itemname_display = document.querySelector('.itemname_display');
const itemdiscription_display = document.querySelector('.itemdiscription_display');
const imgitem_display = document.querySelector('.imgitem_display');
//get values for quantity and unitprice
const priceitem = sessionStorage.getItem('salesprice1')
const quantityitem = sessionStorage.getItem('quantityitem1')

const totalitemprice = priceitem * quantityitem;
const itemname = document.querySelector('.itemname1')
const itemdiscription = document.querySelector('.itemdiscription1')
const imgitem = document.querySelector('.imgitem1')
//set the values
unitprice_display.innerHTML = priceitem;
quantityitem_display.innerHTML = quantityitem;
totalitemprice_display.innerHTML = totalitemprice;
itemname_display.innerHTML = itemname;
itemdiscription_display.innerHTML = itemdiscription;
imgitem_display.src = imgitem