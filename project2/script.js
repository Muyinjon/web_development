document.addEventListener('DOMContentLoaded', function() {
    const cookform = document.querySelector('.cookform');
    const maidform = document.querySelector('.maidform');
    const guardform = document.querySelector('.guardform');
    const assistantform = document.querySelector('.assistantform')

    if (cookform) {
        cookform.addEventListener('submit', function(event) {
            
            let cookinput = document.getElementById('cookinput');
            let cookprice = document.querySelector("#cookprice");
            
            if (cookinput && cookprice) {
                sessionStorage.setItem('cookinput', cookinput.value);
                sessionStorage.setItem('cookprice', cookprice.innerHTML);
                
                alert('Order submitted successfully!');
                // Optionally, redirect to the page where you want to display the values
                window.location.href = 'display_page.html';
            } else {
                alert('Error: Some form elements are missing.');
            }
        });
    }

    if (maidform) {
        maidform.addEventListener('submit', function(event) {
            
            let maidinput = document.getElementById('maidinput');
            let Maidprice = document.querySelector("#Maidprice");
            
            if (maidinput && Maidprice) {
                sessionStorage.setItem('maidinput', maidinput.value);
                sessionStorage.setItem('Maidprice', Maidprice.innerHTML);
                
                alert('Order submitted successfully!');
                // Optionally, redirect to the page where you want to display the values
                window.location.href = 'display_page.html';
            } else {
                alert('Error: Some form elements are missing.');
            }
        });
    }

    if (guardform) {
        guardform.addEventListener('submit', function(event) {
            
            let guradinput = document.getElementById('guradinput');
            let guardprice = document.querySelector("#guardprice");
            
            if (guradinput && guardprice) {
                sessionStorage.setItem('guradinput', guradinput.value);
                sessionStorage.setItem('guardprice', guardprice.innerHTML);
                
                alert('Order submitted successfully!');
                // Optionally, redirect to the page where you want to display the values
                window.location.href = 'display_page.html';
            } else {
                alert('Error: Some form elements are missing.');
            }
        });
    }

    if (assistantform) {
        assistantform.addEventListener('submit', function(event) {
            
            let assistantinput = document.getElementById('assistantinput');
            let assistantprice = document.querySelector("#assistantprice");
            
            if (assistantinput && assistantprice) {
                sessionStorage.setItem('assistantinput', assistantinput.value);
                sessionStorage.setItem('assistantprice', assistantprice.innerHTML);
                
                alert('Order submitted successfully!');
                // Optionally, redirect to the page where you want to display the values
                window.location.href = 'display_page.html';
            } else {
                alert('Error: Some form elements are missing.');
            }
        });
    }




}); 
