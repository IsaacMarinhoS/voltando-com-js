 function verificar() {
            var a = new Date()
            var anodeHoje = a.getFullYear()
            var ano = window.document.getElementById("ano").value
            ano = Number(ano);
            var masculino = window.document.getElementById("masculino")
            var feminino = window.document.getElementById("feminino")
            var foto = window.document.getElementById("foto")
            var texto = window.document.getElementById("texto")
            masculino.addEventListener("change", verificar);
            feminino.addEventListener("change", verificar);
            var idade = anodeHoje - ano


            if (ano == "" ||  ano > anodeHoje || ano < 1930 ) {

                alert("Verifique os dados e tente novamente")

            } else if (idade >= 1 && idade <= 2) {

                if (masculino.checked) {
                    foto.src = 'https://assets.babycenter.com/ims/2017/07/iStock-523497638_4x3.jpg?width=722'
                    texto.innerHTML = `Você é um bebê masculino de ${idade} ano`
                } else if (feminino.checked) {
                    foto.src = 'https://media.istockphoto.com/id/182208813/pt/foto/ang%C3%A9lica-beb%C3%A9-menina.jpg?s=612x612&w=0&k=20&c=oiq2t7kr7NAFQFFMxP3LlQSHt8J7eMSi_weKjQiYHyo='
                    texto.innerHTML = `Você é uma bebê feminina de ${idade} ano`
                }

            } else if (idade > 2 && idade <= 12) {


                if (masculino.checked) {
                    foto.src = 'https://bemvestir.cdn.magazord.com.br/img/2023/12/blog/11872/look-infantil-masculino-estiloso.jpg'
                    texto.innerHTML = `Você é uma criança masculino de ${idade} ano`
                } else if (feminino.checked) {
                    foto.src = 'https://i.pinimg.com/736x/f7/d5/ec/f7d5ec80a8cd6fc7cdf13f213e9cc331.jpg'
                    texto.innerHTML = `Você é uma criança feminina de ${idade} ano`
                }

            } else if (idade > 12 && idade <= 18) {


                if (masculino.checked) {
                    foto.src = 'https://i.pinimg.com/736x/3d/dd/e9/3ddde9852ae6e7a1b87adb7a9c36352b.jpg'
                    texto.innerHTML = `Você é um adolecente masculino de ${idade} ano`
                } else if (feminino.checked) {
                    foto.src = 'https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    texto.innerHTML = `Você é uma adolecente feminina de ${idade} ano`
                }

            } else if (idade > 18 && ano <= 60) {


                if (masculino.checked) {
                    foto.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N_3HJ-rcCcWvHEWStfC-1ZrOY_OQqoU72A&s'
                    texto.innerHTML = `Você é um adulto masculino de ${idade} ano`
                } else if (feminino.checked) {
                    foto.src = 'https://get.pxhere.com/photo/people-young-adult-woman-girl-female-person-teen-teenager-beautiful-attractive-pretty-hat-student-outdoor-lifestyle-european-caucasian-fashion-stylish-cute-natural-closeup-white-dress-blouse-milkshake-freckles-beverage-drinking-enjoying-city-happy-smile-positive-expression-pleased-glad-summer-street-relaxed-modern-fun-funny-face-frowning-joy-joyful-amusing-grimace-photograph-beauty-snapshot-photography-headgear-sitting-vacation-fashion-accessory-drink-street-fashion-brown-hair-1630675.jpg'
                    texto.innerHTML = `Você é uma adulta feminina de ${idade} ano`
                }

            } else if (ano > 60) {


                if (masculino.checked) {
                    foto.src = 'https://conteudo.imguol.com.br/c/noticias/5f/2023/04/25/hissam-hussein-dehaini-de-65-anos-se-casou-em-abril-com-adolescente-de-16-1682426072334_v2_450x450.png'
                    texto.innerHTML = `Você é um idoso masculino de ${idade} ano`
                } else if (feminino.checked) {
                    foto.src = 'https://i.pinimg.com/736x/ba/5a/89/ba5a8925ed6464105c282c6e282f85a3.jpg'
                    texto.innerHTML = `Você é uma idosa feminina de ${idade} ano`
                }

            }

        }