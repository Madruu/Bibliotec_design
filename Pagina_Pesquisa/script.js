let availableKeyWords = 
[
    'Cálculo Com Fatos Históricos',
    'Históricos',
    'Cálculo',
]

const resultBox = document.querySelector(".barra_resultados")
const inputBox = document.querySelector("#searchInput")


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if(input.length)
    {
        result = availableKeyWords.filter((keyword)=>
        {
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result)
{
    if (result.length > 0) {
        resultBox.style.display = "block";
    } else {
        resultBox.style.display = "none";
    }

    const content = result.map((list)=>
    {
        return `<li>${list}.</li>`
    })

    resultBox.innerHTML = "<h1>" + content.join('') + "</h1>";
}

/*inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    /*if (inputBox.value === "") {
        barraResultados.classList.add("esconder");
    } else {
        barraResultados.classList.remove("esconder");
    }

    if(input.length)
    {
        result = availableKeyWords.filter((keyword)=>
        {
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}


function display(result)
{
    const content = result.map((list)=>
    {
        return `<li>${list}.</li>`
    })

    resultBox.innerHTML = "<h1>" + content.join('') + "</h1>";
}*/