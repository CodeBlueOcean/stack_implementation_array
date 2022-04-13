class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.array = [0];
    }

    peek() {
        return this.array[this.array.length-1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
    //isEmpty
}


const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();



console.log(myStack)

//Discord
//Udemy
//google