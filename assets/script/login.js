const loginBtn = document.getElementById('login');
let mobileNumber = document.getElementById('mobile-number');
let pin = document.getElementById('digit-pin');

loginBtn.addEventListener('click', function(event){
    event.preventDefault();
    if(mobileNumber.value == '01711467185' && pin.value == '1515'){
        mobileNumber.value = '';
        pin.value = '';
        window.location.href ='/home.html';
    }
    else{
        mobileNumber.value = '';
        pin.value = '';
        my_modal_1.showModal()
    }
})