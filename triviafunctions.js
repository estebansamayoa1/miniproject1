

function printquestions(){
    fetch('preguntas.json')
    .then(function (response) {
            return response.json();
    })
    .then(function (data) {
            appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });
    var setpreguntas = document.getElementById("questionss");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].q;
        setpreguntas.appendChild(div);
      }
}

