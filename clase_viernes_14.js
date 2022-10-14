// // const etiqueta=document.getElementById('titulo');
// // const etiqueta=document.querySelector('');
const $=(q)=>document.querySelector(q)

// const input=$('#caja');
// const p=$('.texto')
// input.addEventListener('keyup',()=>{
//     p.textContent=input.value
// })

const inputName=$('.nombre');
const button=$('#btn')
const boxInfo=$('#info')

button.addEventListener('click',()=>{
    boxInfo.innerHTML=`
        <h2 class="warning">${inputName.value}</h2>
    `
})