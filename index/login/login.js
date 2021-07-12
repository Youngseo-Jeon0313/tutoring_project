import Axios from "axios";

function onLoggin(){

    
    const email = document.getElementById("email");
    const password = document.getElementById('pw')
    axios({
        method:"POST",
        url: 'https://563b6495-f5a0-4c1e-84ac-07ee115581d2.mock.pstmn.io',
        data:{
            "email": email.value,
            "password": password.value
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
        throw new Error(error);
    });
}

