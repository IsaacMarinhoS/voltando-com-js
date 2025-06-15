        var horaAgora = new Date()
        var hora = horaAgora.getHours()
        var minutos = horaAgora.getMinutes()
        var segundos = horaAgora.getSeconds()
        var horaNaTela = window.document.getElementById("horaNaTela")
        var imagem = window.document.getElementById("imagem")

        horaNaTela.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

        if (hora >= 0 && hora < 12) {
            window.document.body.style.background = "#eede86";
            imagem.src = "https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2021/06/horses-5716127__340-e1623757162228.jpg";
        } else if (hora >= 12 && hora < 18) {
            window.document.body.style.background = "#9b6436";
            imagem.src = "https://images.unsplash.com/photo-1544665216-ef253385d3a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        } else if (hora >= 18 && hora < 23.59) {
             window.document.body.style.background = "#353535";
            imagem.src = "https://img.freepik.com/fotos-premium/ceu-noturno-com-estrelas_445280-1218.jpg?ga=GA1.1.1410876660.1749832135&semt=ais_hybrid&w=740";
        }
