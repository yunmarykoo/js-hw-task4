var login = prompt('Введите ваш логин');
var password = prompt('Введите ваш пароль');

var login1 = 'ivan';
var password1 = '334455';

var login2 = 'alex';
var password2 = '777';

var login3 = 'petr';
var password3 = 'b5678';


if (login === login1 && password === password1){
    alert('Добро пожаловать!')
}else if (login === login2 && password === password2){
    alert('Добро пожаловать!')
}else if (login === login3 && password === password3){
    alert('Добро пожаловать!')
}else {
    alert ('Ошибка входа, повторите попытку!');
}