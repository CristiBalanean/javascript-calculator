let equation = '';
const display = document.querySelector('.display');

function addElement(element)
{
    display.value += element;
    equation += element;
}

function computeResult() {
    let correctedEquation = equation.replace('x', '*');

    display.value = eval(correctedEquation);
    equation=eval(correctedEquation);
}

function deleteEverything()
{
    display.value = '';
    equation = '';
}