window.onload=function(){
    let email=document.getElementById('email')
    let psw=document.getElementById('password')
    let btnsign=document.querySelector("button")
    
    btnsign.addEventListener('click',(checklogin)=>{
        checklogin.preventDefault();
        let emailval=email.value;
        let pswval=psw.value;
        // console.log(localStorage.getItem("email")==emailval)
        // console.log(localStorage.getItem("psw")==pswval)
        if (localStorage.getItem("email")==emailval && localStorage.getItem("psw")==pswval)
        {
            alert("You are sign befor")
            location.href="login.html"   
        }
        else {
            // localStorage.clear();
            localStorage.setItem("email",email.value)
            localStorage.setItem("psw",psw.value)
            alert(" you are sign up successfully")
            location.href="login.html"  
            // localStorage.clear();
      }

    })
    

    }
        
   
    

