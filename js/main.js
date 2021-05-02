

function make_list() {
  const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    }//, <--dont forget the comma in between array elements
  ]
  links.forEach((link)=> {
  
  document.getElementById("activity_list").innerHTML += "<a href=\"" + link.url + "\">" + link.label + "<br>";
  });
}

make_list();

// Quiz Ninja Project 
function quizNinjaGame() {
  const quiz = [
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonder Woman's real name?","Diana Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
  ];
  function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
    return prompt(question);
    }
    function check(response,answer){
    if(response === answer){
    alert('Correct!');
    score++;
    } else {
    alert(`Wrong! The correct answer was ${answer}`);
    }
    }
    function gameOver(){
    alert(`Game Over, you scored ${score} point${score !== 1 ?
    's' : ''}`);
    }
  }
  start(quiz);

}

