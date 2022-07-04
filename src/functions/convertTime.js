export default function ConvertTImer(segundos){

    var min =  Math.floor(segundos/60)
    var secons = Math.floor(segundos % 60)
    return `${min}:${secons.toString().padStart(2,"0")}`

}