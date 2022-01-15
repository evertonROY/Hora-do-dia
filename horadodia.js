function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hdd = document.getElementById('hdd')
    var cop = document.getElementById('cop')
    var bnt = document.getElementById('bnt')

    const { hour, minute, second } = formatDate(new Date().toISOString())

    msg.innerHTML = `Agora são ${hour}:${minute}:${second}`

    // arrow function
    setInterval(() => {
        const { hour, minute, second } = formatDate(new Date().toISOString())

        if (hour < 4) {
            img.src = 'fotomadrugada.png'
            document.body.style.background = '#000'
            bnt.innerHTML = 'Tenha uma otima madrugada!'
        }
        else if (hour < 12) {
            img.src = 'fotomanha.png'
            document.body.style.background = '#FFE4B5'
            cop.style.color = 'black'
            hdd.style.color = 'black'
            bnt.innerHTML = 'Um bom dia para você!'
        } else if (hour < 18) {
            img.src = 'fototarde.png'
            document.body.style.background = '#FF8C00'
            cop.style.color = 'black'
            hdd.style.color = 'black'
            bnt.innerHTML = 'Tenha uma boa tarde!'
        } else {
            img.src = 'fotonoite.png'
            document.body.style.background = '#2F4F7F'
            bnt.innerHTML = 'Boa noite Zzz!'
        }
        msg.innerHTML = `Agora são ${hour}:${minute}:${second}`
    }, 100);//reload!
}

// NOTE: Formato de data
const formatDate = (time) => {
    const arrDate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false, second: '2-digit' });
    const [{ value: weekday }, , { value: day }, , { value: month }, , { value: year }, , { value: hour }, , { value: minute }, , { value: second }] = arrDate.formatToParts(new Date(time))
    console.log(arrDate.formatToParts(new Date(time)))
    return { weekday, day, month, year, hour, minute, second }

sdf
}sdfdsfdfdfdsfddsfsdf
dfsdfdffdf