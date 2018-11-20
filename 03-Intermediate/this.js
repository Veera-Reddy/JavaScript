
/** Objects in JavaScript */
let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting : function (num) {
        this.meetings = this.meetings + num 
    },

    summary : function () {
        return `You have ${this.meetings} meeings today`
    },

    reset : function () {
        this.meetings = 0
    }
}

myTodos.addMeeting(10)
console.log(myTodos.summary());
myTodos.reset()
console.log(myTodos.summary());