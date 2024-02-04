

// var body=document.querySelector('body');
// document.addEventListener("click",function(e){
//     var r=Math.round(Math.random()*255);
//     var g=Math.round(Math.random()*255);
//     var b=Math.round(Math.random()*255);
//     body.style.backgroundColor=`rgb(${r},${g},${b})`
// })

// var imgs=Array.from(document.querySelectorAll(".item img"));
// var lightboxcontainer=document.querySelector(".lightbox-container");
// var closeicon=document.getElementById('close');
// var nexticon=document.getElementById('next');
// var previcon=document.getElementById('prev');
// var lightboxitem=document.querySelector('.lightbox-items');
// var currentsrc=0;
// for(var i=0; i<imgs.length;i++){
//     imgs[i].addEventListener("click",function(e){
//         currentindex=imgs.indexOf(e.target);
//         var currentsrc= e.target.src;
//         lightboxcontainer.style.display="flex";
//         lightboxitem.style.backgroundImage=`url(${currentsrc})`;

//      console.log(imgs.indexOf(e.target));   
//     })
// }
//     closeicon.addEventListener("click",function(){
//         lightboxcontainer.style.display="none"
//     })
//     nexticon.addEventListener("click",getnextslide)
//         function getnextslide(){
//             currentindex++;
//         if(currentindex==imgs.length){
//             currentindex=0; 
//         }
//         var currentsrc = imgs[currentindex].src;
//         lightboxitem.style.backgroundImage=`url(${currentsrc})`;
//         }
    
//     previcon.addEventListener("click",getnextslide)
//         function getnextslide(){
//             currentindex--;
//         if(currentindex<0){
//             currentindex=imgs.length-1; 
//         }
//         var currentsrc = imgs[currentindex].src;
//         lightboxitem.style.backgroundImage=`url(${currentsrc})`;
//         }
    
    
        
        
    var img=Array.from(document.querySelectorAll('.item img')) 
    var lightboxcontainer=document.querySelector(".lightbox-container");
    var lightboxitem=document.querySelector(".lightbox-items");
    var closeIcon=document.getElementById('close')
    var nexticon=document.getElementById('next')
    var previcon=document.getElementById('prev')
    var currentindex=0
    for(var i=0; i<img.length; i++)
    {
        img[i].addEventListener('click',function(e){
          currentindex = img.indexOf(e.target);
            var currentsrc = e.target.src;
            
            lightboxcontainer.style.display = "flex";
            lightboxitem.style.backgroundImage = `url(${currentsrc})`
        })
    }
    closeIcon.addEventListener('click',closeSlider)
    function closeSlider()
    {
        lightboxcontainer.style.display = "none"
    }
    nexticon.addEventListener('click',getnextslide)
        
        function getnextslide(){
            currentindex++;
        if(currentindex ==img.length){
            currentindex =0;
        }
        var currentsrc=img[currentindex].src
        lightboxitem.style.backgroundImage = `url(${currentsrc})`
        }
    previcon.addEventListener('click',getnextslide)
        
        function getlastslide(){
            currentindex--;
        if(currentindex <0){
            currentindex =img.length-1;
        }
        var currentsrc=img[currentindex].src
        lightboxitem.style.backgroundImage = `url(${currentsrc})`
        }
        document.addEventListener('keydown',function(e){
            if(e.key== 'ArrowRight')
            {
                getnextslide()
            }
            else if(e.key== 'ArrowLeft')
            {
                getlastslide()
            }
            else if(e.key=='Escape')
            {
                closeSlider()
            }

        })