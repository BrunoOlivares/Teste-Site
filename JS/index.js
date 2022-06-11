document.addEventListener('DOMContentLoaded', function() {

    //iterações com os botões iniciais 

    let botao=document.querySelector('.Cursos')
    let botao2=document.querySelector('.Eventos')
    let botao3=document.querySelector('.Instituições')

    botao.addEventListener('touchstart', claro)
    botao.addEventListener('touchend', escuro)
    botao2.addEventListener('touchstart', claro)
    botao2.addEventListener('touchend', escuro)
    botao3.addEventListener('touchstart', claro)
    botao3.addEventListener('touchend', escuro)
    botao.addEventListener('mouseover', claro)
    botao.addEventListener('mouseout', escuro)
    botao2.addEventListener('mouseover', claro2)
    botao2.addEventListener('mouseout', escuro2)
    botao3.addEventListener('mouseover', claro3)
    botao3.addEventListener('mouseout', escuro3)
    function claro(){botao.style.backgroundColor='#90d3ee'}
    function escuro(){botao.style.backgroundColor='#3bacd9'}
    function claro2(){botao2.style.backgroundColor='#90d3ee'}
    function escuro2(){botao2.style.backgroundColor='#3bacd9'}
    function claro3(){botao3.style.backgroundColor='#90d3ee'}
    function escuro3(){botao3.style.backgroundColor='#3bacd9'}

})