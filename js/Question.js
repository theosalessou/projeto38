class Question {

  constructor() {
    this.title = createElement("h1");
    this.input1 = createInput("").attribute("placeholder", "Seu nome");
    this.input2 = createInput("").attribute("placeholder", "Opção");
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.button = createButton("Enviar");
    this.button.addClass("button");
  }

  hide() {
    this.title.hide();
    if (contestantCount == 0 && gameState == 0) {
      this.input1.hide();
      this.button.removeClass("hidden"); // remove a classe "hidden" do botão
      this.input2.hide();
    }
  }

  display() {
    this.title.html("Meu Questionário");
    this.title.position(350, 0);

    this.question.html("Pergunta: O que é que está no meio do começo, no começo do meio, e no final do fim?");
    this.question.position(100, 50);

    this.option1.html("1: A letra E");
    this.option1.position(100, 140);

    this.option2.html("2: A letra I");
    this.option2.position(100, 160);

    this.option3.html("3: A letra M");
    this.option3.position(100, 180);

    this.option4.html("4: A letra O");
    this.option4.position(100, 200);

    this.input1.position(100, 280);
    this.input2.position(400, 280);

    this.button.position(320, 350);

    this.button.mousePressed(() => {
      this.input1.attribute("disabled", true); // desativa a capacidade de clicar no input1
      this.input2.attribute("disabled", true); // desativa a capacidade de clicar no input2
      this.button.addClass("hidden"); // adiciona a classe "hidden" ao botão
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.updateCount(contestantCount);
    });
  }
}