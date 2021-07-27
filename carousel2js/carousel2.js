let mainslide= document.getElementById("main_slide");
let slidearray = ["./1.jpg", "./2.jpg","./3.jpg", "./4.jpg", "./5.jpg","./6.jpg","./7.jpg","./8.jpg"]
let imageindex=0;
// ------Rightbutton------
rightbutton.addEventListener("click", function(){
    
    if(imageindex === slidearray.length-1)
    {
        imageindex = 0; 
        // imageindex++; (chutiyapanti to remember)
        mainslide.setAttribute("src", slidearray[imageindex]);
        
    }
    else{
        imageindex++;
        mainslide.setAttribute("src", slidearray[imageindex]);
    
    }
    // console.log(imageindex);

});

  // ------Leftbutton------
  leftbutton.addEventListener("click", function(){
   
    if(imageindex ===0 )
    {
        imageindex = slidearray.length-1;
        mainslide.setAttribute("src", slidearray[imageindex]);
       
    
    }
    else{
        imageindex--;
        mainslide.setAttribute("src", slidearray[imageindex]);
   
    }
    console.log(imageindex);

});