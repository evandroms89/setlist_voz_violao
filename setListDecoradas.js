let textoPorArtista = document.getElementById('artistaProcurar')
let botaoPesquisar = document.getElementById('pesquisar')
let botaoListaCompleta = document.getElementById('listaCompleta')
let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')
let contem = document.getElementById('contem')



let musicasNacionais = [
 
    {
        Artista: 'Adoniran Barbosa',
        Música: 'Trem das Onze'
    },
    {
        Artista: 'Aerosmith',
        Música: 'Dream on'
    },
    {
        Artista: 'Alceu Valença',
        Música: 'Anunciação'
    },
    {
        Artista: 'Alceu Valença',
        Música: 'Coração Bobo'
    },
    {
        Artista: 'Baden Powell',
        Música: 'Tempo de amor'
    },
    {
        Artista: 'Belchior',
        Música: 'A Palo Seco'
    },
    {
        Artista: 'Belchior',
        Música: 'Velha Roupa Colorida'
    },
    {
        Artista: 'Belchior',
        Música: 'Sujeito de Sorte'
    },
    {
        Artista: 'Bob Dylan',
        Música: 'Blowin in the wind'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Alegria Alegria'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Cajuína'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Desde que o samba é samba'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Sampa'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Sonhos'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Sozinho'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'Você não entende nada'
    },
    {
        Artista: 'Caetano Veloso',
        Música: 'You dont know me'
    },
    {
        Artista: 'Capital Inicial',
        Música: 'À sua maneira'
    },
    {
        Artista: 'Capital Inicial',
        Música: 'Fátima'
    },
    {
        Artista: 'Capital Inicial',
        Música: 'O Passageiro'
    },
    {
        Artista: 'Carlos Posada',
        Música: 'Norte'
    },
    {
        Artista: 'Cartola',
        Música: 'Preciso me encontrar'
    },
    {
        Artista: 'Cartola',
        Música: 'O mundo é um moinho'
    },
    {
        Artista: 'Cássia Eller',
        Música: 'Malandragem'
    },
    {
        Artista: 'Cássia Eller',
        Música: 'Por enquanto'
    },
    {
        Artista: 'Cazuza',
        Música: 'Exagerado'
    },
    {
        Artista: 'Cazuza',
        Música: 'O tempo não para'
    },
    {
        Artista: 'Cazuza',
        Música: 'Só pro meu prazer'
    },
    {
        Artista: 'Chico César',
        Música: 'À primeira Vista'
    },
    {
        Artista: 'Criolo',
        Música: 'Menino Mimado'
    },
    {
        Artista: 'Criolo',
        Música: 'Não existe amor em SP'
    },
    {
        Artista: 'Daniela Mercury',
        Música: 'Nobre Vagabundo'
    },
    {
        Artista: 'Djavan',
        Música: 'Açaí'
    },
    {
        Artista: 'Djavan',
        Música: 'Azul'
    },
    {
        Artista: 'Djavan',
        Música: 'Flor de Lis'
    },
    {
        Artista: 'Djavan',
        Música: 'Meu bem querer'
    },
    {
        Artista: 'Djavan',
        Música: 'Oceano'
    },
    {
        Artista: 'Djavan',
        Música: 'Samurai'
    },
    {
        Artista: 'Djavan',
        Música: 'Sina'
    },
    {
        Artista: 'Djavan',
        Música: 'Te devoro'
    },
    {
        Artista: 'Dominguinhos',
        Música: 'De volta pro aconchego'
    },
    {
        Artista: 'Eagle-Eye Cherry',
        Música: 'Save Tonight'
    },
    {
        Artista: 'Falamansa',
        Música: 'Rindo à toa'
    },
    {
        Artista: 'Geraldo Azevedo',
        Música: 'Caravana'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'A Novidade'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'A Paz'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'Esperando na Janela'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'Lamento Sertanejo'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'Não chores mais'
    },
    {
        Artista: 'Gilberto Gil',
        Música: 'Palco'
    },
    {
        Artista: 'Gilsons',
        Música: 'Várias Queixas'
    },
    {
        Artista: 'Gonzaguinha',
        Música: 'Comportamento Geral'
    },
    {
        Artista: 'Jack Johnson',
        Música: 'Sitting, Waiting, Wishing'
    },
    {
        Artista: 'Jack Johnson',
        Música: 'Upside Down'
    },
    {
        Artista: 'Jorge Ben Jor',
        Música: 'Chove Chuva'
    },
    {
        Artista: 'Jorge Ben Jor',
        Música: 'Fio Maravilha'
    },
    {
        Artista: 'Jorge Mautner',
        Música: 'Lágrimas Negras'
    },
    {
        Artista: 'Lenine',
        Música: 'A Rede'
    },
    {
        Artista: 'Lenine',
        Música: 'Candeeiro Encantado'
    },
    {
        Artista: 'Lenine',
        Música: 'Jack Soul Brasileiro'
    },
    {
        Artista: 'Lenine',
        Música: 'Paciência'
    },
    {
        Artista: 'Lenine',
        Música: 'Relampiano'
    },
    {
        Artista: 'Lenine',
        Música: 'Silêncio das Estrelas'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Eu Sei'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Geração Coca-Cola'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Hoje a noite não tem luar'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Mais do mesmo'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Pais e Filhos'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Será'
    },
    {
        Artista: 'Legião Urbana',
        Música: 'Tempo Perdido'
    },
    {
        Artista: 'Lô Borges',
        Música: 'Paisagem da Janela'
    },
    {
        Artista: 'Lô Borges',
        Música: 'Trem Azul'
    },
    {
        Artista: 'Lô Borges',
        Música: 'Um girassol da cor de seu cabelo'
    },
    {
        Artista: 'Los Hermanos',
        Música: 'Anna Julia'
    },
    {
        Artista: 'Los Hermanos',
        Música: 'Condicional'
    },
    {
        Artista: 'Los Hermanos',
        Música: 'Último Romance'
    },
    {
        Artista: 'Maria Rita',
        Música: 'Encontros e Despedidas'
    },
    {
        Artista: 'Mutantes',
        Música: 'Ando meio desligado'
    },
    {
        Artista: 'Nando Reis',
        Música: 'Por onde andei'
    },
    {
        Artista: 'Nando Reis',
        Música: 'Resposta'
    },
    {
        Artista: 'Natiruts',
        Música: 'Presente de um Beija-Flor'
    },
    {
        Artista: 'Novos Baianos',
        Música: 'Mistério do Planeta'
    },
    {
        Artista: 'O Rappa',
        Música: 'Pescador de Ilusões'
    },
    {
        Artista: 'Paralamas do Sucesso',
        Música: 'Aonde quer que eu vá'
    },
    {
        Artista: 'Paralamas do Sucesso',
        Música: 'Ela disse adeus'
    },
    {
        Artista: 'Paralamas do Sucesso',
        Música: 'Meu erro'
    },
    {
        Artista: 'Raul Seixas',
        Música: 'Cowboy fora da Lei'
    },
    {
        Artista: 'Raul Seixas',
        Música: 'Maluco Beleza'
    },
    {
        Artista: 'Raul Seixas',
        Música: 'S.O.S'
    },
    {
        Artista: 'Rita Lee',
        Música: 'Manias de Você'
    },
    {
        Artista: 'Rodrigo Amarante',
        Música: 'Tardei'
    },
    {
        Artista: 'Tim Maia',
        Música: 'Dia de Domingo'
    },
    {
        Artista: 'Tim Maia',
        Música: 'Ela Partiu'
    },
    {
        Artista: 'Tim Maia',
        Música: 'Gostava tanto de você'
    },
    {
        Artista: 'Zé Ramalho',
        Música: 'Admirável gado novo'
    },
]

function Modelo(Artista, Música){
    return {
        Artista,
        Música
    }
}


musicasNacionais.push(Modelo('Lenine', 'O último por do sol'))




function musicaPorArtista() {
    let resultadoCerto = []
    let artista = textoPorArtista.value
    let array = musicasNacionais
   

    resposta.innerHTML = ''
    resposta2.innerHTML = ''
    

    if(artista.length == 0) {
        alert('Escolha um artista!')
    } else {
    
        for(let i of array) {
            if (i.Artista.toUpperCase() == artista.toUpperCase()) {
                resultadoCerto.push(i)    
            }
        }

        resultadoCerto.sort(function (a, b) {
            if(a.Música > b.Música) {
                return 1
            }
            if(a.Música < b.Música) {
                return -1
            } else {
                return 0
            }
        })

        for(let a = 0; a < resultadoCerto.length; a++) {
            
            if((a % 2) == 0) {
                let d1 = document.createElement('div')
                let d1b = document.createElement('div')
                d1.setAttribute('class', 'd0 d1')
                d1b.setAttribute('class', 'd1b')
                resposta.appendChild(d1)
                d1.appendChild(d1b)
                d1b.innerHTML += `<a href="http://youtube.com/results?search_query=${resultadoCerto[a].Artista}+${resultadoCerto[a].Música}"
                 target="_blank">${resultadoCerto[a].Música}</a>`
            } else {
                let d2 = document.createElement('div')
                let d2b = document.createElement('div')
                d2.setAttribute('class', 'd0 d1')
                d2b.setAttribute('class', 'd1b')
                d2.appendChild(d2b)
                resposta.appendChild(d2)
                d2b.innerHTML += `<a href="http://youtube.com/results?search_query=${resultadoCerto[a].Artista}+${resultadoCerto[a].Música}"
                target="_blank">${resultadoCerto[a].Música}</a>`
            }
        }
        
        //for(let i of resultadoCerto) {
        //    
        //    p1.innerHTML += `${i.Artista}:` + ` ${i.Música}<br>`
        //}
        
        if(resultadoCerto.length > 1){
            contem.innerHTML = ''
            contem.innerHTML += `<br><h1>Contém ${resultadoCerto.length} músicas <br> do ${resultadoCerto[0].Artista}.</h1><br>`
        } else {
            contem.innerHTML = ''
            contem.innerHTML += `<br><h1>Contém ${resultadoCerto.length} música do ${resultadoCerto[0].Artista}.</h1><br>`
        }
    }
    
}

function listaCompleta() {
    musicasNacionais.sort(function (a, b) {
        if(a.Artista > b.Artista) {
            return 1
        }
        if(a.Artista < b.Artista) {
            return -1
        } else {
            return 0
        }
    })

    musicasNacionais.sort(function (a, b) {
        if(a.Artista == b.Artista) {
            if(a.Música > b.Música) {
                return 1
            }
            if(a.Música < b.Música) {
                return -1
            } else {
                return 0
            }
        }
    })
    
    textoPorArtista.value = ''
 
    resposta.innerHTML = ''
    resposta2.innerHTML = ''
    contem.innerHTML = ''

    resposta2.innerHTML += `<br><h1>Total de ${musicasNacionais.length} músicas, aproximadamente ${((musicasNacionais.length * 2.5)/60).toFixed(2)} horas.</h1><br><br>`

    for(let a = 0; a < musicasNacionais.length; a++) {
            
        if((a % 2) == 0) {
            let l1 = document.createElement('div')
            l1.setAttribute('class', 'l1')
            resposta2.appendChild(l1)
            l1.innerHTML += `<strong><a href="http://www.letras.mus.br/?q=${musicasNacionais[a].Artista}+${musicasNacionais[a].Música}" target="_blank"><h3>
            ${musicasNacionais[a].Artista}:</strong>` + ` ${musicasNacionais[a].Música}</h3></a>
            <a href="http://www.cifraclub.com.br/${musicasNacionais[a].Artista.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("-")}/${musicasNacionais[a].Música.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("-")}/" target="_blank"><img class="logo" src="imagens/cifraclub1.png"></a> 
            <a href="http://youtube.com/results?search_query=${musicasNacionais[a].Artista}+${musicasNacionais[a].Música}" target="_blank"><img class="logo" src="imagens/youtube1.png"></h2></a><br>`
        } else {
            let l2 = document.createElement('div')
            l2.setAttribute('class', 'l2')
            resposta2.appendChild(l2)
            l2.innerHTML += `<strong><a href="http://www.letras.mus.br/?q=${musicasNacionais[a].Artista}+${musicasNacionais[a].Música}" target="_blank"><h3>
            ${musicasNacionais[a].Artista}:</strong>` + ` ${musicasNacionais[a].Música}</h3></a>
            <a href="http://www.cifraclub.com.br/${musicasNacionais[a].Artista.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("-")}/${musicasNacionais[a].Música.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("-")}/" target="_blank"><img class="logo" src="imagens/cifraclub1.png"></a> 
            <a href="http://youtube.com/results?search_query=${musicasNacionais[a].Artista}+${musicasNacionais[a].Música}" target="_blank"><img class="logo" src="imagens/youtube1.png"></h2></a><br>`
        }
    }

    

    //for(let i of musicasNacionais) {
    //    resposta2.innerHTML += `<strong>${i.Artista}:</strong>` + ` ${i.Música}<br><br>`
    //}
}

    

listaCompleta()

botaoPesquisar.onclick = musicaPorArtista

botaoListaCompleta.onclick = listaCompleta
