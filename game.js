let boxes=document.querySelectorAll(".box");
let restebtn=document.querySelector("#reset");
 let turn0=true;
 let newgameBtn=document.querySelector("#new-btn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");
 
 



 const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
 ];
 const resetGame =()=>
    {
        turn0=true;
        enableBoxes();
        msgContainer.classList.add("hide")

    }
 boxes.forEach((box) => 
{
    box.addEventListener("click",()=>
    {
        console.log("clicked");
        if(turn0===true)
            {
                box.innerText="O";
                turn0=false;
            }
            else
            {
                box.innerText="X";
                turn0=true;
            }
        box.disabled=true;
        checkWinner();
    });
});
    const showWinner=(winner)=>
    {
        if(winner!==0)
        {
        msg.innerText=`congratulations, winner is ${winner}`;
        }
        else
        {
        msg.innerText= "The game was Drown";
        }
        msgContainer.classList.remove("hide");
        disabledBoxes();
    };
 
 const disabledBoxes=()=>
    {
        for( let box of boxes)
            {
                box.disabled=true;
            }
    };
    const enableBoxes=()=>
        {
            for( let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }
        }
    
 const checkWinner=()=>
    {
        for(let pattern of winPatterns)
            {
                // console.log(pattern[0],pattern[1],pattern[2]);
                 let pos1val = boxes[pattern[0]].innerText;
                 let pos2val = boxes[pattern[1]].innerText;
                 let pos3val = boxes[pattern[2]].innerText;
                 if(pos1val!="" && pos2val!="" && pos3val!="")
                    {
                        if(pos1val===pos2val && pos2val===pos3val)
                            {
                                console.log("winner", pos1val);
                                showWinner(pos1val);
                            }
                    }
                    

            }
            
    }
    
 newgameBtn.addEventListener("click" , resetGame);
 restebtn.addEventListener("click",resetGame);