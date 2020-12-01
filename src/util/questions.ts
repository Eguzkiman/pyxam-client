import { easyQuestions, medQuestions, hardQuestions } from 'util/questionBank'

export function getRandomQuestions() {
    let [a1] = getNRandomElemsNoRepeat(easyQuestions, 1)
    let [a2, a3] = getNRandomElemsNoRepeat(medQuestions, 2)
    let [a4, a5] = getNRandomElemsNoRepeat(hardQuestions, 2)

    return { a1, a2, a3, a4, a5 }
}

function getNRandomElemsNoRepeat<T>(arr: T[], total: number): T[] {
    let arrCopy = [...arr]
    let res: T[] = []

    while (res.length < total) {
        let randomIndex = Math.floor(Math.random() * arrCopy.length)
        let [elem] = arrCopy.splice(randomIndex, 1)

        res.push(elem)
    }

    return res
}
