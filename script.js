////////// Fetch Data////////// 
function fetchData (locations){
    let errMessage = document.querySelector("#error-message");
    if(locations !== "Enter a Location"){
        errMessage.textContent = "";
        fetch(`https://wttr.in/${locations}?format=j1`)
        .then((res)=>{
            return res.json();  
        })
        .then((data)=>{
            console.log(data);


let search =document.querySelector("#search-city");
let area = data.nearest_area[0].areaName[0].value;
let region =data.nearest_area[0].region[0].value;
let country = data.nearest_area[0].country[0].value;
let currentFeel = data.current_condition[0].FeelsLikeF;


})
    
    
    
    
    
    
    
    
    
    
    }
}








