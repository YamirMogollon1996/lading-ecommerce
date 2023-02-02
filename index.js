const hamburgeuza =  document.getElementById("hamburgeuza")
const  Modal =  document.querySelector(".secnter_2")
hamburgeuza.addEventListener('click' ,  e =>{
            Modal.classList.toggle('añadir')

})


//TODO MATCH TECNICAL UBER ENGENIER
const ride_time =  30
const ride_distance =  7
const coste_por_minute =[ 0.2,0.35,0.4,0.45]
const cost_por_mile =  [  1.1 ,1.8,2.3,3.5]
const minute_coste = [  "Uberx" ,"uberpremiun","UberCoste","UBerxxL"]

const  Buscamenor = ( pasaje )=>{
    return   cost_por_mile.map(  (item , index ) =>{
            const indeisocarro =   coste_por_minute[index]
            const molde  =   JSON.parse ((indeisocarro  * item).toFixed(2)) 
            const jackson =   molde 
            if (molde  > pasaje){
                return {
                    indice : jackson ,
                    molde
                }
            }
    }).filter(item => item != undefined)    
}
console.log(Buscamenor(1))

// const fucnionObtener = (ride_time  , ride_distance  , coste_por_minute ,  cost_por_mile   )  =>{
//         return cost_por_mile.map(  ( item,index) =>{
//                 const ridemer =  coste_por_minute[index] 
//               const valortiem =  ( ridemer * ride_time)  +  (item * ride_distance)
//               return  JSON.parse (valortiem.toFixed(1))


//         } )

// }

// console.log( fucnionObtener(ride_time , ride_distance ,coste_por_minute,  cost_por_mile ) )

