let ipt = document.querySelectorAll('input')
for (i = 0; i < ipt.length; i++) {
    ipt[i].addEventListener('click', function (e) {
        this.value = ''
    })
}

let register = document.querySelector('.register')
let registerLi = register.querySelector('li')
let boxLis = document.querySelectorAll('.box-lis')
let num = true
registerLi.addEventListener('click', function (e) {
    if (num) {
        registerLi.innerHTML = '去登录'
        boxLis[2].style.display = 'block'
        num = !num
        return;
    }
    registerLi.innerHTML = '注册账号'
    boxLis[2].style.display = 'none';
    num = !num
})