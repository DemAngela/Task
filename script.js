
// СКОБКИ

const brackets = '{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{{'
// const brackets = '{}}{}{}{}{{}{}{}}}{{}{{{}}{}'
// const brackets = '{{{{{{{{{{{{{}{{{{{{{}{{{{'
// const brackets = '{}{}{}{}{}}}}}}{{{{}}}}}}'



let openBrackets = brackets.split('{').length - 1;
let closeBrackets = brackets.split('}').length - 1;

function counting () {
    if (openBrackets === closeBrackets) {
        return 'Парные. {}'
    } else if (openBrackets > closeBrackets) {
        return `Не парные. ОТКРЫВАЮЩИХ скобок БОЛЬШЕ "${openBrackets}", чем закрывающих "${closeBrackets}"`
    } else if (openBrackets < closeBrackets) {
        return `Не парные. ЗАКРЫВАЮЩИХ скобок БОЛЬШЕ "${closeBrackets}", чем открывающих "${openBrackets}"`
    }
}

// console.log(counting())


//голубой вагон бежит качается, Скорый поезд набирает ход...


// const way ='...........A......................B...........'
// const way ='...A.....................................B.....'
const way = '...........A..................B..'


let ATrain = 0
let BTrain = 0
function trainPath () {
        for (let i = 0; i < way.length; i++) {
            if  (way[i] === 'A') {
                ATrain = i
                console.log(ATrain)
            } else if (way[i] === 'B') {
                BTrain = i
                console.log(BTrain)
            }
        }

        let meetingPoint = (ATrain + BTrain) /2
        console.log(meetingPoint)

        let res = way.slice(0, meetingPoint) + 'C' + way.slice(meetingPoint + 1);
        console.log(res)

}

trainPath()


