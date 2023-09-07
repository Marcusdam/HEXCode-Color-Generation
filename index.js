const colorCode = document.querySelectorAll('.color-box');
const btn = document.getElementById('btn');
const copyBtn = document.querySelectorAll('.copyBtn');




btn.addEventListener('click',  () => {
        colorCode.forEach((color) => {
                let randomNumber = Math.floor(Math.random() * 16777215);
                let randomCode = "#" + randomNumber.toString(16);
                color.style.backgroundColor = randomCode;
                color.querySelector('span').innerHTML= randomCode
                color.querySelector('input').value = randomCode;


        })});

        copyBtn.forEach(copy =>{
                copy.addEventListener('click',  function() {
                        let copyText = this.parentElement.querySelector('input');
                        copyText.select();
                        navigator.clipboard.writeText(copyText.value);
                        
           
        });

        })
        



       
