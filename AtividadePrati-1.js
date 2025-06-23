const prompt = require('prompt-sync')()

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){

    if( mes >= 1 && mes <= 12){
        
        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){

            if(dia >=1 && dia <= 31){
                return true
            }else return false  

        }else if( mes == 4 || mes == 6 || mes == 9 || mes == 11){

            if(dia >=1 && dia <= 30){
                return true
            }else return false  

        }else{

            if ( ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0) ) {
                if(dia >=1 && dia <= 29){
                return true
            }else{
                 return false
            }
            } else{
                
                if(dia >=1 && dia <= 28){
                return true
            }else return false
        }
        }
    }else{
        return false
    }
}

let dia = parseInt(prompt("Digite o dia: "))
let mes = parseInt(prompt("Digite o mês: "))
let ano = parseInt(prompt("Digite o ano: "))

if (isNaN(dia) || isNaN(mes) || isNaN(ano)){

    console.log("Digite apenas números para a data.")

}else{

    let ehValido = ehDataValida(dia, mes, ano)
    
    if(ehValido){
        console.log( `A data: ${dia}/${mes}/${ano} é válida` )
    }else{
        console.log( `A data: ${dia}/${mes}/${ano} é inválida` )
    }

}