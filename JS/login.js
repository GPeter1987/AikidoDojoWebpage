// Form Validáció (Login)
function validateLogin(){
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event){
        /* Addig nem küldjük el az adatot amíg nem ellenőriztük. */
        event.preventDefault(); 
        
        let userName = document.getElementById('user').value;
        let pass     = document.getElementById('pass').value;

        /* Felhasználónév és Jelszó kitöltöttségének ellenőrzése */
        if(userName !== '' ){
            if(pass == ''){
                alert('A jelszót kötelező megadni!');
            };
        } else{
            alert('A felhasználó nevet kötelező megadni!');
        };
    });
};
validateLogin();