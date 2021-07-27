let mainslide= document.getElementById("main_slide");
let slidearray = ["./1.JPG", "./2.JPG","./3.JPG", "./4.JPG", "./5.JPG","./6.JPG","./7.JPG","./8.JPG"]
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