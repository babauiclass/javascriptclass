function sendUserData(){
  const name=document.getElementsByName("name")[0].value;
  const job=document.getElementsByName("job")[0].value;
  var userObj={"name":name,"job":job};
  sendData(JSON.stringify(userObj));
 
}
function sendData(reqUserObj){
    const apiUrl="https://reqres.in/api/users";
    let senduserDataHttpObj = new XMLHttpRequest();
    senduserDataHttpObj.open("post",apiUrl);
    senduserDataHttpObj.send(reqUserObj);
    console.log("reqUserObj:",reqUserObj);
    senduserDataHttpObj.onreadystatechange=function(){
        console.log("api call status:",this.readyState);
        console.log("this.status :",this.status);
        if(this.readyState==4 && this.status === 201){
            
            console.log(this.responseText);
            displyResponse(this.responseText);
        }
    }
}
function displyResponse(response){
    const resObj = JSON.parse(response);
    document.getElementById("userId").value=resObj.id;
    document.getElementById("createdAt").value=resObj.createdAt;
}

