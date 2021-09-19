// function loadData() {
//     var url = "https://reqres.in/api/users?page=2"
//     var httpReq = new XMLHttpRequest();
//     httpReq.onreadystatechange = function () {
//         console.log(this.status, XMLHttpRequest.DONE, this.readyState, XMLHttpRequest.LOADING);
//         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//             console.log("repobnse info", this.responseText);
//             document.getElementById("container").innerText = this.responseText;
//         }
//     }
//     httpReq.open("GET", url);
//     httpReq.send();
// }


function loadDataFromSer(){
    const apiUrl="https://reqres.in/api/users/2"
    var httpReq= new XMLHttpRequest();
    httpReq.open("GET",apiUrl);
    httpReq.send();
    httpReq.onreadystatechange=function(){
        console.log("api call status:",this.readyState);
        console.log("this.status :",this.status);
        if(this.readyState==4 && this.status === 200){
            
            displayData(this.responseText);
        }
    }
}


function displayData(apiResponse){
    const response = JSON.parse(apiResponse);
    console.log(response.data);
    for(p in response.data){
       
      if(p=="avatar"){
        document.getElementById(p).src=response.data[p];
      }else{
        document.getElementById(p).value=response.data[p];
      }
    }

    // var stuObjArr=[{sname:'raju',rolll:30,lastname:'kumar'},
    //               {sname:'mohan',rolll:31,lastname:'reddy'},
    //               {sname:'suresh',rolll:33,lastname:'kumar'}
    //             ]
    // var stuObjArr1=[20,40,50]
    
    // // for(pro in stu){
    // //     console.log(pro+':'+stu[pro]);
    // // }
    // stuObjArr1.forEach((ele)=>{
    //     console.log(ele);
    // })
  

}
function pageIdLoaded(){
    console.log("page loaded");
    loadDataFromSer();
}