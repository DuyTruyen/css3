
let nodea = document.querySelectorAll(".cot1");
let itemsl=document.querySelectorAll(".item");
let nodea2=document.querySelectorAll(".cot2");
let nodea3=document.querySelectorAll(".cot3");
let btn2=document.querySelector("#bt2");
//   console.log(solangoi);
//   console.log(nodea);
  
function randomColor (el) {
    return (el.style.background = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`);
  }; 




// function tinhVitri(els){
//   console.log(Array.from(els));
//   let arr1=Array.from(els)
//   arr1.reduce((init,currentValue)=>{
//     // let rect = el.getBoundingClientRect()
//     if(init.getBoundingClientRect().top<currentValue.getBoundingClientRect().top)
//     return currentValue    // .top;
//     // console.log(rect);
    



//   },els[0])


// }

// tinhVitri(nodea);


function soStopLuuLai(ivDaXuLy,soPhanTu){
    let arrSolangoi=[0];
    let indexStop;
    
    for (let i1=soPhanTu-1;i1>0;i1--){
        arrSolangoi.push(i1)
    }
console.log(arrSolangoi);

   arrSolangoi.forEach( (el,i)=>{
        if(ivDaXuLy==i+1){
            indexStop=el
        }
   })

   console.log(`index so stop luu lai ${indexStop}`);
   return indexStop
   
   
}

  
// console.log(`ivid la ${ivid}`);


  function swapel(solangoi, el) {

    const soPhanTu = el.length;
    const solanGoiLaySoDu= (solangoi%soPhanTu)||el.length;
    for (let i = 0; i < soPhanTu; i++) 
    {  randomColor(el[i]);
      for ( let j=1 ; j <= soPhanTu; j++) {
        if (i >= soPhanTu - solanGoiLaySoDu) {
          el[i].style.transform = `translateY(${(solanGoiLaySoDu - soPhanTu) * 100}%)`;
        } else {
          el[i].style.transform = `translateY(${solanGoiLaySoDu * 100}%)`;
        }
      }
    }
  }

  let iv=0;
  let iv2=0;
  let ivid,ividCot2,ividCot3;
  function interbalStart(){
    

     ivid=setInterval(()=>{
      console.log(iv);
      swapel(iv,nodea);
      iv++
      
  },300)
   ividCot2=setInterval(()=>{
      console.log(iv);
      swapel(iv,nodea2)
      iv++
      
  },400)
  
   ividCot3=setInterval(()=>{
      console.log(iv);
      swapel(iv,nodea3)
      iv++
      
  },500)
  }

  interbalStart();

  document.getElementById("bt1").addEventListener("click", function (e) {
    console.log('click button');
   
    clearInterval(ivid);
    clearInterval(ividCot2);
    clearInterval(ividCot3);
    // itemsl.style.transition=`transform 1.5s`;
    var ivid2=setInterval(()=>{
        swapel(iv2,nodea);

        //  console.log(`iv2 ${iv2}`);
        iv2++
        
    },1000);

    var ivid2Cot2=setInterval(()=>{
        swapel(iv2,nodea2);

        //  console.log(`iv2 ${iv2}`);
        iv2++
        
    },1200);

    var ivid2Cot3=setInterval(()=>{
        swapel(iv2,nodea3);

        //  console.log(`iv2 ${iv2}`);
        iv2++
        
    },1400)


    

    setTimeout( function() { 
        const solanGoiLaySoDu= ((iv+iv2)%nodea.length)||nodea.length;
        console.log(`solanGoiLaySoDu ${solanGoiLaySoDu}`);
        
        let indexLuuLai=soStopLuuLai(solanGoiLaySoDu,nodea.length)
        

        console.log(nodea[indexLuuLai]);
        clearInterval(ivid2);
        clearInterval(ivid2Cot2);
        clearInterval(ivid2Cot3);
    }, 5000);
    

  })
  


btn2.addEventListener("click",()=>{
  interbalStart()
})
