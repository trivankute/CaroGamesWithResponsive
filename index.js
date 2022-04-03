var squares=document.querySelectorAll('.box div');
var currentPlayer=document.querySelector('#currentPlayerNumber');
var currentPlayerColor=document.querySelector('.currentPlayerColor1')
var squaresId =0
squares.forEach(i => i.addEventListener('click',addToBoardAndCheck))
function addToBoardAndCheck()
    {
        squaresId++;
        if(currentPlayer.textContent == 1 && !this.classList.contains('currentPlayerColor1')
        && !this.classList.contains('currentPlayerColor2')
        )
        {
            currentPlayer.textContent=2;
            currentPlayerColor.classList.remove('currentPlayerColor1')
            currentPlayerColor.classList.add('currentPlayerColor2')
            this.classList.add('currentPlayerColor1')
        }
        else if(!this.classList.contains('currentPlayerColor1')
        && !this.classList.contains('currentPlayerColor2')
        ){
            currentPlayer.textContent=1;
            currentPlayerColor.classList.remove('currentPlayerColor2')
            currentPlayerColor.classList.add('currentPlayerColor1')
            this.classList.add('currentPlayerColor2')
        }
        if(squaresId===100){
            setTimeout(()=>alert("Het Board r cdl"),500)
            setTimeout(resetBoard,500)
        }
        checkColumnAndRow();
        checkDiagonal();
    }

function checkDiagonal()
{
    for(let i=0;i<6;i++)
    {
        for(let j=0;j<6-i;j++)
        {
            if(squares[i+10*(j)+j].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+1)+j+1].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+2)+j+2].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+3)+j+3].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+4)+j+4].classList.contains('currentPlayerColor1')
        )
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i+10*(j-1)+j-1].classList.contains('currentPlayerColor2')
            &&squares[i+10*(j+5)+j+5].classList.contains('currentPlayerColor2')){}
            else if((j-1)<0&&squares[i+10*(j+5)+j+5].classList.contains('currentPlayerColor2')){}
            else if((j+5)>9&&squares[i+10*(j-1)+j-1].classList.contains('currentPlayerColor2')){}
            else{
            currentPlayer.textContent='Player1 Win'
            currentPlayerColor.classList.remove('currentPlayerColor2')
            currentPlayerColor.classList.add('currentPlayerColor1')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player1 is the winner"),500)
            setTimeout(resetBoard,500)
        }
        }
        else if(squares[i+10*(j)+j].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+1)+j+1].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+2)+j+2].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+3)+j+3].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+4)+j+4].classList.contains('currentPlayerColor2'))
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i+10*(j-1)+j-1].classList.contains('currentPlayerColor1')
            &&squares[i+10*(j+5)+j+5].classList.contains('currentPlayerColor1')){}
            else if((j-1)<0&&squares[i+10*(j+5)+j+5].classList.contains('currentPlayerColor1')){}
            else if((j+5)>9&&squares[i+10*(j-1)+j-1].classList.contains('currentPlayerColor1')){}
            else{
            currentPlayer.textContent='Player2 Win'
            currentPlayerColor.classList.remove('currentPlayerColor1')
            currentPlayerColor.classList.add('currentPlayerColor2')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player2 is the winner"),500)
            setTimeout(resetBoard,500)
        }
    }
        else if(squares[(9-i)+10*(j)-j].classList.contains('currentPlayerColor1')
        && squares[(9-i)+10*(j+1)-(j+1)].classList.contains('currentPlayerColor1')
        && squares[(9-i)+10*(j+2)-(j+2)].classList.contains('currentPlayerColor1')
        && squares[(9-i)+10*(j+3)-(j+3)].classList.contains('currentPlayerColor1')
        && squares[(9-i)+10*(j+4)-(j+4)].classList.contains('currentPlayerColor1')
        )
        {
            if((j-1)>=0&&(j+5)<=9&&squares[(9-i)+10*(j-1)-j+1].classList.contains('currentPlayerColor2')
            &&squares[(9-i)+10*(j+5)-j-5].classList.contains('currentPlayerColor2')){}
            else if((j-1)<0&&squares[(9-i)+10*(j+5)-j-5].classList.contains('currentPlayerColor2')){}
            else if((j+5)>9&&squares[(9-i)+10*(j-1)-j+1].classList.contains('currentPlayerColor2')){}
            else{
            currentPlayer.textContent='Player1 Win'
            currentPlayerColor.classList.remove('currentPlayerColor2')
            currentPlayerColor.classList.add('currentPlayerColor1')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player1 is the winner"),500)
            setTimeout(resetBoard,500)
        }
    }
        else if(squares[(9-i)+10*(j)-j].classList.contains('currentPlayerColor2')
        &&squares[(9-i)+10*(j+1)-(j+1)].classList.contains('currentPlayerColor2')
        &&squares[(9-i)+10*(j+2)-(j+2)].classList.contains('currentPlayerColor2')
        &&squares[(9-i)+10*(j+3)-(j+3)].classList.contains('currentPlayerColor2')
        &&squares[(9-i)+10*(j+4)-(j+4)].classList.contains('currentPlayerColor2'))
        {
            if((j-1)>=0&&(j+5)<=9&&squares[(9-i)+10*(j-1)-j+1].classList.contains('currentPlayerColor1')
            &&squares[(9-i)+10*(j+5)-j-5].classList.contains('currentPlayerColor1')){}
            else if((j-1)<0&&squares[(9-i)+10*(j+5)-j-5].classList.contains('currentPlayerColor1')){}
            else if((j+5)>9&&squares[(9-i)+10*(j-1)-j+1].classList.contains('currentPlayerColor1')){}
            else{
            currentPlayer.textContent='Player2 Win'
            currentPlayerColor.classList.remove('currentPlayerColor1')
            currentPlayerColor.classList.add('currentPlayerColor2')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player2 is the winner"),500)
            setTimeout(resetBoard,500)
        }
    }
}
}
}
function checkColumnAndRow()
{
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<6;j++)
        {
        if(squares[i+10*j].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+1)].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+2)].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+3)].classList.contains('currentPlayerColor1')
        && squares[i+10*(j+4)].classList.contains('currentPlayerColor1')
        )
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i+10*(j-1)].classList.contains('currentPlayerColor2')
            &&squares[i+10*(j+5)].classList.contains('currentPlayerColor2')){}
            else if((j-1)<0&&squares[i+10*(j+5)].classList.contains('currentPlayerColor2')){}
            else if((j+5)>9&&squares[i+10*(j-1)].classList.contains('currentPlayerColor2')){}
            else {
            currentPlayer.textContent='Player1 Win'
            currentPlayerColor.classList.remove('currentPlayerColor2')
            currentPlayerColor.classList.add('currentPlayerColor1')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player1 is the winner"),500)
            setTimeout(resetBoard,500)
            }
        }
        else if(squares[i+10*j].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+1)].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+2)].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+3)].classList.contains('currentPlayerColor2')
        &&squares[i+10*(j+4)].classList.contains('currentPlayerColor2'))
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i+10*(j-1)].classList.contains('currentPlayerColor1')
            &&squares[i+10*(j+5)].classList.contains('currentPlayerColor1')){}
            else if((j-1)<0&&squares[i+10*(j+5)].classList.contains('currentPlayerColor1')){}
            else if((j+5)>9&&squares[i+10*(j-1)].classList.contains('currentPlayerColor1')){}
            else{
            currentPlayer.textContent='Player2 Win'
            currentPlayerColor.classList.remove('currentPlayerColor1')
            currentPlayerColor.classList.add('currentPlayerColor2')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player2 is the winner"),500)
            setTimeout(resetBoard,500)
        }
        }
        else if(squares[i*10+j].classList.contains('currentPlayerColor1')
        && squares[i*10+(j+1)].classList.contains('currentPlayerColor1')
        && squares[i*10+(j+2)].classList.contains('currentPlayerColor1')
        && squares[i*10+(j+3)].classList.contains('currentPlayerColor1')
        && squares[i*10+(j+4)].classList.contains('currentPlayerColor1'))
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i*10+(j-1)].classList.contains('currentPlayerColor2')
            &&squares[i*10+(j+5)].classList.contains('currentPlayerColor2')){}
            else if((j-1)<0&&squares[i*10+(j+5)].classList.contains('currentPlayerColor2')){}
            else if((j+5)>9&&squares[i*10+(j-1)].classList.contains('currentPlayerColor2')){}
            else{
            currentPlayer.textContent='Player1 Win'
            currentPlayerColor.classList.remove('currentPlayerColor2')
            currentPlayerColor.classList.add('currentPlayerColor1')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player1 is the winner"),500)
            setTimeout(resetBoard,500)
        }
        }
        else if(squares[i*10+j].classList.contains('currentPlayerColor2')
        &&squares[i*10+(j+1)].classList.contains('currentPlayerColor2')
        &&squares[i*10+(j+2)].classList.contains('currentPlayerColor2')
        &&squares[i*10+(j+3)].classList.contains('currentPlayerColor2')
        &&squares[i*10+(j+4)].classList.contains('currentPlayerColor2'))
        {
            if((j-1)>=0&&(j+5)<=9&&squares[i*10+(j-1)].classList.contains('currentPlayerColor1')
            &&squares[i*10+(j+5)].classList.contains('currentPlayerColor1')){}
            else if((j-1)<0&&squares[i*10+(j+5)].classList.contains('currentPlayerColor1')){}
            else if((j+5)>9&&squares[i*10+(j-1)].classList.contains('currentPlayerColor1')){}
            else{
            currentPlayer.textContent='Player2 Win'
            currentPlayerColor.classList.remove('currentPlayerColor1')
            currentPlayerColor.classList.add('currentPlayerColor2')
            squares.forEach(i => i.removeEventListener('click',addToBoardAndCheck))
            setTimeout(()=>alert("Player2 is the winner"),500)
            setTimeout(resetBoard,500)
        }
    }
    }
}
}

function resetBoard()
{
    currentPlayer.textContent='1'
    currentPlayerColor.classList.add('currentPlayerColor1')
    squares.forEach(square=>square.classList.remove('currentPlayerColor1'))
    squares.forEach(square=>square.classList.remove('currentPlayerColor2'))
    squares.forEach(i => i.addEventListener('click',addToBoardAndCheck))
}