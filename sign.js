document.getElementById('signup').addEventListener('click',(e) =>{
    e.preventDefault()
    
    const g = document.getElementById("gender").value
    const naam = document.getElementById('name').value
    const eMail = document.getElementById('email').value
    const pNo = document.getElementById('phoneno').value
    const dateofbirth = document.getElementById('dob').value
    const password = document.getElementById('pwd').value
    if(naam==""|| eMail=="" ||pNo==""||dateofbirth==""||password==""||g=="")
    {
      const warning = "Please enter the details."
      document.getElementById("notify").innerHTML= warning
      return;
    }
    if(pNo<1000000000)
    {
      document.getElementById('phonediv').innerHTML = "Enter Valid Phone no"
      return;
    }
    if(password.length<6)
    {
      document.getElementById('pwddiv').innerHTML = "Minimum Character Length is 6"
      return;
    }
   
    const user = {	
      dob:dateofbirth,
      email:eMail,
      gender:g,
      name:naam,
      phoneno:pNo,
      pwd:password
     
   }
  
   console.log(user)
  
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8082/students')
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("gender").value = ""
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("phoneno").value = ""
            document.getElementById("dob").value = ""
            document.getElementById('pwd').value=""
            document.getElementById("notify").innerHTML= "Sign Up Success"
            const response = JSON.parse(xhr.responseText)
            console.log(response)
        }
    } 
    xhr.send(JSON.stringify(user))
   });
  function afterclick() {
    window.location.href = "./login.html"
  }
   
  
  