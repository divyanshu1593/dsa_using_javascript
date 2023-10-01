// Program to Perform Peep Operation on Stack

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

    peep(i){
        if (i > this.items.length) throw new Error('i greated than stack size');
        return this.items[this.items.length - i];
    }
}

let stack = new Stack();

stack.push('1293');
stack.push('152');
stack.push('34621');
stack.push('142');

stack.show();

console.log(stack.peep(3));
console.log(stack.peep(1));

/*
Output

│  142  │
│ 34621 │
│  152  │
│ 1293  │
└───────┘
152
142
*/