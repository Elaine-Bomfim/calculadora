function inserir(numeroDigitado) 
{
    const resultadoAtual = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultadoAtual + numeroDigitado;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";  // essa função é para limpar a calculadora //
}    

function back()
{
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
 {
    const resultado = document.getElementById('resultado').innerHTML;

    try {
        if (resultado) {
            const resultadoCalculado = eval(resultado);
            
            // Verificar se o resultado é um número finito
            if (isFinite(resultadoCalculado)) 
            {
                document.getElementById('resultado').innerHTML = resultadoCalculado;
            } else {
                document.getElementById('resultado').innerHTML = "Erro";
            }
        }
    } catch (error) {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}
