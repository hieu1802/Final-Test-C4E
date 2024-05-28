let data = [
    {id:1, name:'Bầu', link:'./img/bau.png'},
    {id:2, name:'Cua', link:'./img/cua.png'},
    {id:3, name:'Tôm', link:'./img/tom.png'},
    {id:4, name:'Cá', link:'./img/ca.png'},
    {id:5, name:'Hươu', link:'./img/huou.png'},
    {id:6, name:'Gà', link:'./img/ga.png'},
]


document.getElementById('btnResut').addEventListener("click",function hello(){
    
    function getNumber(){
        
        let randomNumber = ''
        for (let i = 0; i <= 100; i++){
            let number = Math.floor(Math.random() * 6);
            randomNumber = number
        }
        if(randomNumber === 0){
            let link = './img/bau.png'
           return link
            
        } if(randomNumber === 1){
            let link = './img/cua.png'
            return link
        }if(randomNumber === 2){
            let link = './img/tom.png'
            return link
        }if(randomNumber === 3){
            let link = './img/ca.png'
            return link
        }if(randomNumber === 4){
            let link = './img/huou.png'
            return link
        } if(randomNumber === 5 || randomNumber === 6){
            let link = './img/ga.png'
            return link
        } 
    }

  
        


 
    let setIntervalDice01 = setInterval(() => {
        
        let dice01 = document.getElementById('dice01')
        dice01.src = getNumber()
    },100);
    setTimeout(() => { clearInterval(setIntervalDice01) }, 2000);

    let setIntervalDice02 = setInterval(() => {
        let dice02 = document.getElementById('dice02')
        dice02.src = getNumber() 
    }, 100);
    
    setTimeout(() => { clearInterval(setIntervalDice02) }, 2000);

    let setIntervalDice03 = setInterval(() => {
        let dice03 = document.getElementById('dice03')
        dice03.src = getNumber()    
    }, 100);
    setTimeout(() => { clearInterval(setIntervalDice03) }, 2000);
    
    if(setIntervalDice01){
        document.getElementById('btnResut').disabled = true;
        document.getElementById('btnReset').disabled = true;
       
    
      
    }
    setTimeout(() => { document.getElementById('btnResut').disabled = false;
                       document.getElementById('btnReset').disabled = false;
     }, 2000);
    
   
})


function checkSelect(){

    let clickBox1 = 0
    let clickBox2 = 0
    let clickBox3 = 0
    let clickBox4 = 0
    let clickBox5 = 0
    let clickBox6 = 0
    let sum = 0

    document.getElementById('box1').addEventListener('click',function(){
        sum = sum +1 
        if(sum < 4){
            document.getElementById('selectNumber01').innerHTML = clickBox1 = clickBox1 +1
            return
        }
    })
    document.getElementById('box2').addEventListener('click',function(){
        sum = sum + 1
        if(sum < 4){
            document.getElementById('selectNumber02').innerHTML = clickBox2 = clickBox2 +1
          
           
            return
        }

    })
    document.getElementById('box3').addEventListener('click',function(){
        sum = sum + 1
   
        if(sum < 4){
            document.getElementById('selectNumber03').innerHTML = clickBox3 = clickBox3 +1
          
            
            return
        }

    })
    document.getElementById('box4').addEventListener('click',function(){
        sum = sum + 1
    
        if(sum < 4){
            document.getElementById('selectNumber04').innerHTML = clickBox4 = clickBox4 +1
         
         
            return
        }

    })
    document.getElementById('box5').addEventListener('click',function(){
        sum = sum + 1
    
        if(sum < 4){
            document.getElementById('selectNumber05').innerHTML = clickBox5 = clickBox5 +1
        
          
            return
        }

    })
    document.getElementById('box6').addEventListener('click',function(){
        sum = sum + 1
    
        if(sum < 4){
            document.getElementById('selectNumber06').innerHTML = clickBox6 = clickBox6 +1
         
           
            return
        }

    })
}
checkSelect()

function reload(){
   
    document.getElementById('btnReset').addEventListener('click',function(){
           window.location.reload()
     
       
    })
}
reload()


 
