const good_send = document.getElementById('good-send')
if (good_send) {
    good_send.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('#popup_01 .popup__wrap-form').classList.remove('show')
        document.querySelector('#popup_01 .popup__successfully').classList.add('show')
    })
}
const good_send_ok = document.getElementById('good-send-ok')
if (good_send_ok) {
    good_send_ok.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('#popup_01 .popup__successfully').classList.remove('show')
            document.querySelector('#popup_01 .popup__wrap-form').classList.add('show')
        }, 1000);
    })
}