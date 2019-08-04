var dia = new Date();
var ano = dia.getFullYear();
var msg = document.getElementById("msg")
var sexoescolhido = document.getElementsByName("radsex")
var anodigitado =  document.getElementById("ano")

function verificar(){
    if(anodigitado.value.length == 0 || anodigitado.value > ano)
    {
        alert("[ERRO] Verifique os dados e tente novamente")
    }
    else
    {
        var idade = ano - Number(anodigitado.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        msg.style.textAlign = 'center'
        msg.style.padding = '10px'
        if(sexoescolhido[0].checked)
        {
            msg.innerHTML = `Foi verificado um homem com ${idade} anos`
            if(idade >=0 && idade <= 15)
            {
                img.setAttribute('src', './bebe-homem.png')
            }else if(idade <= 24)
            {
                img.setAttribute('src', './jovem-homem.png')
            }else if(idade < 60)
            {
                img.setAttribute('src', './adulto-homem.png')
            }else
            {
                img.setAttribute('src', './idoso-homem.png')
            }
        }
        else
        {
            msg.innerHTML = `Foi verificado uma mulher com ${idade} anos`
            if(idade >=0 && idade <= 15)
            {
                img.setAttribute('src', './bebe-mulher.png')
            }else if(idade <= 24)
            {
                img.setAttribute('src', './jovem-mulher.png')
            }else if(idade < 60)
            {
                img.setAttribute('src', './adulto-mulher.png')
            }else
            {
                img.setAttribute('src', './idoso-mulher.png')
            }
        } 
        msg.appendChild(img)
        
    }
}