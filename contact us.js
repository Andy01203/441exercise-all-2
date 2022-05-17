function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value; 
  var name1=document.myform.name1.value;  
  var name2=document.myform.name2.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }
  if (name1==null || name1==""){  
    alert("contact information can't be blank");  
    return false;  
  }
  if (name2==null || name2==""){  
    alert("E-mail can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  