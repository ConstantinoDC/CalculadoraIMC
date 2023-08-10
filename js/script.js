    /*let currentValidations = document.querySelectorAll('form .submit-form')

    let form = document.getElementById("formulario");
    let submit = document.getElementById("btn-submit");*/

        /*
    let peso = document.getElementById("weigth");
    let altura = document.getElementById("heigth");*/

function calcular(){
    let peso = document.getElementById("peso-usu").value;
    let altura = document.getElementById("altura-usu").value;
    
    let imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");
    //resultado.innerHTML = imc

    if(imc < 18.5){
        resultado.style.color = 'red';
        resultado.innerHTML = 'Magreza';
    }
    else if(imc >= 18.5 && imc < 25){
        resultado.style.color = 'red';
        resultado.innerHTML = 'Normal';
    }
    else if(imc >= 25 && imc < 30){
        resultado.style.color = 'red';
        resultado.innerHTML = 'Sobrepeso';
    }
    else if(imc >= 30 && imc < 40){
        resultado.style.color = 'red';
        resultado.innerHTML = 'Obesidade';
    }
    else{
        resultado.style.color = 'red';
        resultado.innerHTML = 'Obesidade grave';
    }
}

