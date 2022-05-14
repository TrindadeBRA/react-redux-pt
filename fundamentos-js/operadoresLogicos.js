/*

t e t -> t
t e f -> f
f e ? -> f

t ou ? -> t
f ou t -> t
f ou f -> f

t xor t -> f
t xor f -> t
f xor t -> t
f xor f -> f

!t -> f
!f -> t


|| = 'ou'
&& = 'e'


!! -> Converte para boolean

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))