$(document).ready(function() { /* Função em Jquery, todo o javascript foi usado com jquery, por isso a sintaxe diferente */
    $('#mobile-btn').on('click', function () {
       $('#mobile-menu').toggleClass('active')
       $('#mobile-btn').find('i').toggleClass('fa-x') 
    });

    const sections = $('section')
    const navItens = $('.nav-item')

    $(window).on('scroll', function () { /*Função para pegar o valor de quando a página é scrollada */
        const header = $('header')
        const scrollPosition = $(window).scrollTop() - header.outerHeight () /* Variável criada para pegar a posição do scroll da página, para saber se está em cima, no meio, embbaixo... */

        let activeSectionIndex = 0

        if (scrollPosition <= 0) { /*Verifica a posição da navbar, se a página estiver no topo, ela não tem sombra, porém, quando scrollada,  navbar ganha uma leve sombra embaixo */
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '3px 1px 3px rgba(0, 0, 0, 0.1)')
        }

        sections.each(function(i) { /* Função para mover a barrinha da navbar, de acordo com a  seção que o usuário está */
            const section = $(this)
            const sectionTop = section.offset().top - 61
            const sectionBottom = sectionTop+ section.outerHeight()

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) { /* Verifica a posição em que a página está */
                activeSectionIndex = i
                return  false;
            }
        })

        navItens.removeClass('active') /* Remove o traço debaixo dos nomes, quando a seção muda */
        $(navItens[activeSectionIndex]).addClass('active') /* Adiciona o  traço embaixo dos nomes */
    })

    ScrollReveal().reveal('#cta', { /* Animação para aparecer os itens  da página. Após importar a biblioteca "ScrollReveal" (https://scrollrevealjs.org/), pode-se editar os detallhes da maneira abaixo */
        origin: 'left',
        duration: 2000,
        distance: "20%"
    })

    ScrollReveal().reveal('.prato', { 
        origin: 'right',
        duration: 2000,
        distance: "20%"
    })

    ScrollReveal().reveal('#feedbacks', { 
        origin: 'right',
        duration: 2000,
        distance: "20%"
    })

    ScrollReveal().reveal('.chef-img', { 
        origin: 'left',
        duration: 2000,
        distance: "20%"
    })
    
    
})