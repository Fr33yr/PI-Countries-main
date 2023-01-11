// === Parametros === 
// 1. firstPageCards = cantidad de cards en la primer pagina
// 2. cardsPerPage = cards por pagina
// 3. arr = array de cards que recibe la funcion

export function Paginate(arr, cardsPerPage, firstPageCards) {
    if (arr.length <= firstPageCards || arr.length <= cardsPerPage) {
        return arr
    } else {
        let fisrtPage = [] // array de cartas que corresponde a la primer pagina
        for (let i = 0; i < firstPageCards; i++) {
            fisrtPage.push(arr[i])
        }
        let slicedArr = [] // array de cartas cortado en paginas
        for (let i = 0; i < arr.length; i += cardsPerPage) {
            const slicedPage = arr.slice(i, i + cardsPerPage)
            slicedArr.push(slicedPage)
        }
        slicedArr[0] = fisrtPage // reemplaza el primer elemento del array con la primer pagina

        return slicedArr
    }
}