document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick);
    })
})

function handleClick(event) {

    console.log(event.target);

    let square = event.target;
    let position = square.id;
    let winner= document.getElementById("vencedor")

    if(handonMove(position)){

        setTimeout(()=>{
            winner.style.display="block"
            winner.innerHTML=("o vencedor foi o jogador " + playerTime)
        },20);

    };
    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let simbol = board[position]
    square.innerHTML = `<div class='${simbol}'></div>`
}