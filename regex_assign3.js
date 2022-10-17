function check_email(str)
{
var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(pattern.test(str))
{  
console.log("It is a valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

check_email('suresh-09@gmail.com');