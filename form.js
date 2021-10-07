function validateUserName(reqEle){
   //console.log(reqEle.value);
   const errMsgEle = document.getElementById("errNameMsg");
   errMsgEle.innerText="";
   const valueLength = reqEle.value.length;
   if(valueLength<8){
    errMsgEle.innerText="Please enter above 8 charecters";
   }
}

function validatePwd(reqPwdEle){
    document.getElementById("errPwdMsg").innerText="";
    const pwdCount=reqPwdEle.value.length;
    if(pwdCount<6){
       document.getElementById("errPwdMsg").innerText="Please enter minimum 6 charecters"; 
    }
}

function showHobiesList(){
   const hobiesEle = document.getElementsByName("hobbies");
   const selectedHobies=[];
   hobiesEle.forEach((item)=>{
      if(item.checked){
         selectedHobies.push(item.value);
      }
   });
  // console.log(selectedHobies);
 // console.log(selectedHobies.toString());
  document.getElementById("hobiesList").innerText = selectedHobies.toString();
   
}

function selectAllHobies(){
   const hobiesEle = document.getElementsByName("hobbies");
   hobiesEle.forEach((item)=>{
      item.checked=true;
   })
}
function deselectAllHobies(){
   const hobiesEle = document.getElementsByName("hobbies");
   hobiesEle.forEach((item)=>{
      item.checked=false;
   })
}

function showSelectedGender(){
   const genderEle = document.getElementsByName("gender");
   let selectedGener="";
   // if(genderEle[0].checked){
   //    selectedGener=genderEle[0].value;
   // }else if(genderEle[1].checked){
   //    selectedGener=genderEle[1].value;
   // }

   genderEle.forEach((inpEle)=>{
      if(inpEle.checked){
         selectedGener=inpEle.value;
      }
   })
   document.getElementById("genderInfo").innerText = selectedGener;
}

function showSelectedFruit(reqEle){
   const selectedIndex= reqEle.selectedIndex;
   const selectedItem = reqEle[selectedIndex];
   console.log(reqEle);
   console.log("s.index",selectedIndex);
   console.log("option.s.item",selectedItem);
   console.log("s.value",selectedItem.value);
   document.getElementById("fruitInfo").innerText = selectedItem.value;
}

function showSelectedCar(reqEle){

}

const showDesc=()=>{
   const descText = document.getElementsByName("descrip");
   document.getElementById('showDescMsg').innerText = descText[0].value;
   console.log("descText:",descText[0].value);
}

function subMyForm(){
   alert("Hi");
   console.log("test");
}