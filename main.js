
function openIt() {
    const form = document.querySelector("#form1")

    form.addEventListener("submit", (e) => {
        e.preventDefault();  
        const data =  new FormData(e.target);
        var name = data.get("name");
        const text = 'Дорогая ' + name + ', поздравляю вас с 8 марта! В Международный женский день желаю вам от всей души побольше света, тепла, легкости, улыбок и прекрасного настроения. Пусть сбываются желания, а в семьях будут счастье и мир. Пусть в вашей жизни случаются только радостные события и яркие моменты. Будьте любимы, любите, вдохновляйте своих родных и близких'; 
        document.write('<style> body {background-color: pink;} </style>')
        document.write('<style> body {color: palevioletred} </style>')
        document.write(text)
    });

}









