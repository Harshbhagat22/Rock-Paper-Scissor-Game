function submit(move){
        let yourMove = move
            let comMove = pickComputerMove() 
            let result = logic(yourMove,comMove)
                alert(`Result : ${result}\nYour Move : ${yourMove}\nComputer Move : ${comMove}`);

        }

        function logic(yourMove,comMove){
        let result = '';
            if(yourMove === comMove){
                result = 'Tie'
            }  else if((yourMove === 'Scissor' && comMove === 'Paper') || (yourMove === 'Paper' && comMove === 'Rock')|| (yourMove === 'Rock' && comMove === 'Scissor')){
                result = 'Win';
            } else {
                result = 'Lose'
            }

            return result;
        }

        function pickComputerMove(){
            let computerMove = Math.random()
            let comMove = '';
            if(computerMove <1/3){
                comMove = 'Rock'
            } else if(computerMove <2/3){
                    comMove = 'Paper'
            } else {
                comMove = 'Scissor'
            }
            return comMove;
        }