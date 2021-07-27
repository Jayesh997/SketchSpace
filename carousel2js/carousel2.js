let mainslide= document.getElementById("main_slide");
let slidearray = ["../carousel2html/1.jpg", "../carousel2html/2.jpg","../carousel2html/3.jpg", "../carousel2html/4.jpg", "../carousel2html/5.jpg","../carousel2html/6.jpg","../carousel2html/7.jpg","../carousel2html/8.jpg"]
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