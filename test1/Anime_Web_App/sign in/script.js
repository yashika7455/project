const lables = document.querySelectorAll('.form-control label')

lables.forEach(lable =>{
     lable.innerHTML = lable.innerText
     .split('')
     .map((letter, idx) =>`<span style="tarnsition-delay:${idx * 50 }ms">${letter}</span>`)
     .join('')
})