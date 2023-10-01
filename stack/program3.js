// Program to Check if Stack is Empty

class Stack {
    items = [];

    push(item){
        this.items.push(item);
    }

    pop(){
        if (this.items.length == 0) throw new Error('StackError: Underflow');
        return this.items.pop();
    }

    show(){
        console.log();

        let maxNumberOfDigits = getNumberOfDigits(Math.max(...this.items));
        let maxSpace = Math.max(5, maxNumberOfDigits + 2);

        for (let i = this.items.length - 1; i >= 0; i--){
            let paddingLength = maxSpace - getNumberOfDigits(this.items[i]);
            console.log('│' + getNumberOfSymbols(Math.floor(paddingLength / 2)) + this.items[i] + getNumberOfSymbols(Math.ceil(paddingLength / 2)) + '│');

        }

        if (this.items.length) console.log('└' + getNumberOfSymbols(maxSpace, '─') + '┘');

        function getNumberOfDigits(number){
            return Math.floor(Math.log10(number)) + 1;
        }

        function getNumberOfSymbols(num, symbol = ' '){
            return Array(num + 1).join(symbol);
        }
    }

    isEmpty(){
        return this.items.length == 0;
    }
}

let stack = new Stack();

if (stack.isEmpty()){
    console.log('The stack is Empty');
}

/*
Output

The stack is Empty
*/