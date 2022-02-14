

let questions={
    1:{
       "question": "What is the second Harry Potter book called?",
       "answerChoices": ["Harry Potter and the Philosopher's stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Half Blood Prince"],
       "correctAnswerIndex": 1
    },
    2:{
       "question": "Which prolific US author wrote It, The Shining and Misery?",
       "answerChoices": ["Shirley Jackson", "Stephen King", "Neil Gaiman", "Veronica Roth"],
       "correctAnswerIndex": 1
    },
    3:{
       "question": "Who is the protagonist in The Catcher in the Rye?",
       "answerChoices": ["Holden Caulfield", "Jay Gatsby", "Percy Jackson", "Achilles"],
       "correctAnswerIndex": 0
    },
    4:{
       "question": "What is the name of the protagonist in Rick Riordan's The Lightning Thief and other subsequent books in The Olympians series?",
       "answerChoices": ["Katniss Everdeen", "Beatrice Prior", "Percy Jackson", "Nico Di Angelo"],
       "correctAnswerIndex": 2

    },
    5:{
       "question": "Which district is home to Katniss Everdeen in The Hunger Games?",
       "answerChoices": ["District 13", "District 12", "District 5", "District 1"],
       "correctAnswerIndex": 1

    },
    6:{
       "question": "What is the best selling novel of all time?",
       "answerChoices": ["Harry Potter and the Philosopher's stone", "The Hobbit", "Moby Dick", "Don Quixote"],
       "correctAnswerIndex": 3

    },
    7:{
       "question": "What dystopian novel by George Orwell told of life in a future totalitarian state dominated by 'Big Brother'?",
       "answerChoices": ["1984", "Animal Farm", "Brave New World", "Fahrenheit 451"],
       "correctAnswerIndex": 0

    },
    8:{
       "question": "What was the original title of Ray Bradbury's Fahrenheit 451?",
       "answerChoices": ["The Burning Books", "Celsius 233", "Fire in the Hole", "The Fireman"],
       "correctAnswerIndex": 3

    },
    9:{
       "question": "What is the subtitle of Mary Shelley's Frankenstein?",
       "answerChoices": ["Life among the Lowly", "The Modern Prometheus", "A novel without a hero", "'The misfortunes of virtue"],
       "correctAnswerIndex": 1

    },
    10:{
       "question": "Which book takes place in the Roarin' 20`s?",
       "answerChoices": ["The Book Thief", "Catcher in the Rye", "The Great Gatsby", "The Picture of Dorian Gray"],
       "correctAnswerIndex": 2

    },
    11:{
       "question": "Which is the second book the Giver Quartet?",
       "answerChoices": ["The Giver", "Son", "The Messenger", "Gathering Blue"],
       "correctAnswerIndex": 3

    },
    12:{
       "question": "In what language was The Alchemist originally written?",
       "answerChoices": ["Portuguese", "Spanish", "English", "Italian"],
       "correctAnswerIndex": 0

    },
    13:{
       "question": "What is the name of the protagonist of The Count of Monte Cristo?",
       "answerChoices": ["Edmond Dantes", "Alexandre Dumas", "Mercedes", "Fernand"],
       "correctAnswerIndex": 0

    },
    14:{
       "question": "Which book was NOT written by Fredrik Backman?",
       "answerChoices": ["Beartown", "A man called Ove", "Us Against You", "Wildman"],
       "correctAnswerIndex": 3

    },
    15:{
       "question": "What Robert Frost Poem does Johnny recite to Ponyboy in The Outsiders?",
       "answerChoices": ["Mending Wall", "Nothing Gold Can Stay", "The Road not taken", "There is no poem"],
       "correctAnswerIndex": 1

    },
    16:{
       "question": "How does Dorian destroy the painting in The Picture of Dorian Gray?",
       "answerChoices": ["Burns it", "Tosses it on a cliff", " Stabs it with a knife", "Destroys it by hand"],
       "correctAnswerIndex": 2

    },
    17:{
       "question": "Which book inspired the TV series 'The Haunting of Bly Manor'?",
       "answerChoices": ["The turn of the Screw", "The haunting of Hill House", "Midnight Mass", "Salem's Lot"],
       "correctAnswerIndex": 0

    },
    18:{
       "question": "What is the name of the first published Stephen King novel?",
       "answerChoices": ["Carrie", "It", "The Shining", "Misery"],
       "correctAnswerIndex": 0

    },
    19:{
       "question": "Who is the hero of Douglas Adams's Hitchhiker's Guide to the Galaxy series?",
       "answerChoices": ["Paul Atreides", "Arthur Dent", "Winston Smith", "Rick Deckard"],
       "correctAnswerIndex": 1 

    },
    20:{
       "question": "Which author wrote the 1960 novel To Kill a Mockingbird?",
       "answerChoices": [
           "Arthur Hailey", 
           "Allen Drury", 
           "Harper Lee", 
           "Edwin O'Connor"
       ],
        "correctAnswerIndex": 2 

    }
};

let points=0;

let arr = [];





function printquestions(questions){
    document.getElementById("questionss").innerHTML = "";
    document.getElementById("pointscounter").innerHTML = points;
    arr.length=0;
    while(arr.length < 6){
        var r = Math.floor(Math.random() * 20) + 1;
        arr.push(r);
    }
    var button = document.createElement("button");
    button.innerHTML='Submit Answers';
    button.setAttribute('id','submitbutton', 'label','Submit Answers');
    document.getElementById('questionss').appendChild(button);
    document.getElementById('submitbutton').setAttribute('onclick','submitAnswer(questions,points,arr)');
    for (var i=1;i<6;i++){
        var tag = document.createElement("ol");
        var text = document.createTextNode(questions[arr[i]].question);
        tag.appendChild(text);
        var element = document.getElementById("questionss");
        element.appendChild(tag);
        for (var j=0;j<4;j++){
            var label = document.createElement("label");
            var radio = document.createElement("input");
            var br = document.createElement("br");
            radio.setAttribute('name','choice'+i);
            label.appendChild(document.createTextNode(questions[arr[i]].answerChoices[j]));
            radio.setAttribute('type','radio');
            radio.appendChild(label);
            document.getElementById('questionss').appendChild(radio);
            document.getElementById('questionss').appendChild(label);
            element.appendChild(br);   
        }
    }
    
}

function submitAnswer(questions,points,arr) {
   var incorrectas=[];
    for (var i=1;i<6;i++){
        var choices=document.getElementsByName('choice'+i); 
        for (var j=0;j<4;j++){
            if (choices[j].checked==true){
                if (j==questions[arr[i]].correctAnswerIndex){
                    points+=10;
                    document.getElementById("pointscounter").innerHTML = points;
                }
                else{
                   incorrectas.push(questions[arr[i]].question);
                }
            }
        }
    }
    alert('Game finished\nPoints:'+points);
    alert('Preguntas Incorrectas:\n'+incorrectas);
  
    
};


