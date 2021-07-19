let mainslide= document.getElementById("main_slide");
let slidearray = ["1.jpg", "2.jpg","3.jpg", "4.jpg", "5.jpg","6.jpg","7.jpg","8.jpg"]
let imageindex=0;
// ------Rightbutton------
rightbutton.addEventListener("click", function(){
    
    if(imageindex === slidearray.length-1)
    {
        imageindex =0; 
        // imageindex++; (chutiyapanti to remember)
        mainslide.setAttribute("src", slidearray[imageindex]);
        
    }
    else{
        imageindex++;
        mainslide.setAttribute("src", slidearray[imageindex]);
    
    }
    console.log(imageindex);

});

  // ------Leftbutton------
  leftbutton.addEventListener("click", function(){
    //   let counter =0;
    if(imageindex ===0 )
    {
        imageindex = slidearray.length-1;
        mainslide.setAttribute("src", slidearray[imageindex]);
        // imageindex--;
    
    }
    else{
        imageindex--;
        mainslide.setAttribute("src", slidearray[imageindex]);
   
    }
    console.log(imageindex);

});
// ------------------------------Canvas Animation---------------------

// const canvas = document.getElementById("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;



// window.addEventListener("resize", function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;  
// })

// const context= canvas.getContext("2d");

// c.fillRect(100,100,20,20);

// ------line----

// c.beginPath();
// c.moveTo(30,30);
// c.lineTo(60,60);
// c.lineTo(400,500);
// c.stroke();

//-----circle
// context.beginPath();
// context.arc(30, 30, 30, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
// context.stroke();



// for(var i=0 ;i<100; i++){
    

//     context.beginPath();
//     context.arc(x, y, 30, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
//     context.stroke();
// }

// function Circle(x,y,dx,dy,radius){
//     this.x=x;
//     this.y= y;
//     this.dx=dx;
//     this.dy=dy;
//     this.radius=radius;
    
//     this.draw = function(){
       
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
//         context.stroke();

//     };

//     this.update = function(){
//         if(this.x+this.radius>innerWidth || this.x+this.radius<0){
//         this.dx=-this.dx;
        
//     }else if( this.y+this.radius>innerHeight||this.y+this.radius<0){
//         this.dy=-this.dy;
//     }
//     this.y+=this.dy;
//     this.x+=this.dx;

//     this.draw(); 
//     };

    
// }

// var circle = new Circle(20,20,2,2,20);

// var carray = [];
// console.log(carray);


// for(var i = 0; i < 100; i++)
// {

//     var x = Math.random() * innerWidth;
//     var y = Math.random() * innerHeight;
//     var dx= (Math.random()-0.5) * 3;
//     var dy= (Math.random()-0.5) * 3;
//     var radius=5;
    
//     carray.push(new Circle(x,y,dx,dy,radius));
//     circleArray.push(i);
// }

// console.log(carray);



// function animate(){
//     requestAnimationFrame(animate);
//     context.clearRect(0, 0, window.innerWidth, window.innerHeight);

//     for (var i= 0; i < carray.length; i++) {
        
//         carray[i].update();
         
//      };
    //  circle.update();
 
     
// }

// animate();

