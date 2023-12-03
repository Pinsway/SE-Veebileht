//// Kood pärineb https://github.com/StevenTamberg/Ryhm_Duo_veebileht
//// Animatsioonile on lisasime logo tausta


//JS Connor Bailey poolt (youtube.com/watch?v=2ak37WrbSDg),
//Kood animeerib lehe "Sissejuhatus" alguses olena n.ö. "intro".
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener("DOMContentLoaded", ()=> {
    //Funktsioon kus logo tuleb nähtavale.
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=> {
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1 ) * 400)
        });
        //Funktsioon kus logo kaob.
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);
        //Hall osa liigub lehelt üles, nähtavale tuleb lehe sisu.
        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})