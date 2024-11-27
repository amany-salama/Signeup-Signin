window.onload=function(){
    let email=document.getElementById('email')
    let psw=document.getElementById('password')
    let btnlog=document.querySelector("button")
    
    btnlog.addEventListener('click',(checklogin)=>
        { checklogin.preventDefault();
        let emailval=email.value;
        console.log(emailval)
        let pswval=psw.value;
        console.log(pswval)
        if (emailval==localStorage.getItem("email") && pswval==localStorage.getItem("psw")){
           console.log(localStorage.getItem("email")) 
           location.href="home.html"
            // localStorage.clear();
        }
        else {
            alert("you must sign up frist")
            location.href="signup.html"
      }

    })
    

    }
        
   
    

