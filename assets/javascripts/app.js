
$(document).ready(function() {

  var $gameButton = $('.game_button');
  var $comChoice;
  var $userChoice;
  var $userScore;

  function comGen() {
    var $compNum = Math.floor(Math.random() * 3) + 1
    if($compNum === 1) {
      $comChoice = 'Rock'
    } else if($compNum === 2) {
      $comChoice = 'Paper'
    } else {
      $comChoice = 'Scissors'
    }
  }

  $gameButton.click(function(){
    $userChoice = $(this).attr('value');
    comGen()
    compare()
  });


  function compare() {
    console.log($userChoice + $comChoice)
      show1.innerHTML = 'You picked: ' + $userChoice
      show2.innerHTML = 'I picked: ' + $comChoice
    if($userChoice === $comChoice) {
      results.innerHTML = 'Its a tie!'
      $userScore += 0
      score.innerHTML = 'Your score is: ' + $userScore
    } else if($userChoice === 'Rock' && $comChoice === 'Paper'){
      results.innerHTML = 'You Lose!'
      $userScore -= 1
      score.innerHTML = 'Your score is: ' + $userScore
    } else if($userChoice === 'Rock' && $comChoice === 'Scissors'){
      results.innerHTML = 'You Win!'
    } else if($userChoice === 'Paper' && $comChoice === 'Rock'){
      results.innerHTML = 'You Win!'
    } else if($userChoice === 'Paper' && $comChoice === 'Scissors'){
      results.innerHTML = 'You Lose!'
    } else if($userChoice === 'Scissors' && $comChoice === 'Rock'){
      results.innerHTML = 'You Lose!'
    } else if($userChoice === 'Scissors' && $comChoice === 'Paper'){
      results.innerHTML = 'You Win!'
    }
  }

});
