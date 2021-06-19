let messages = [];

const steveQuotes = [
    '"I want to put a ding in the universe." - Steve Jobs',
    '"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs',
    '"Sometimes life is going to hit you in the head with a brick. Don\'t lose faith." - Steve Jobs',
    '"Innovation distinguishes between a leader and a follower." - Steve Jobs'
];

const elonQuotes = [
    '"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk',
    '"Failure is an option here. If things are not failing, you are not innovating enough." - Elon Musk',
    '"Persistence is very important. You should not give up unless you are forced to give up." - Elon Musk',
    '"I don\'t create companies for the sake of creating companies, but to get things done." - Elon Musk'
];

const gatesQuotes = [
    '"Life is not fair; get used to it." - Bill Gates',
    '"It\'s fine to celebrate success but it is more important to heed the lessons of failure." - Bill Gates',
    '"Your most unhappy customers are your greatest source of learning." - Bill Gates',
    '"As we look ahead into the next century, leaders will be those who empower others." - Bill Gates'
];

messages.push(steveQuotes);
messages.push(elonQuotes);
messages.push(gatesQuotes);

// Prints three random messages (quotes)
const createMessage = arr => {
    let msg1 = getMessage(arr);
    do {
       var msg2 = getMessage(arr);
    } while (msg1 === msg2);
    do {
        var msg3 = getMessage(arr);
     } while (msg1 === msg3 || msg2 === msg3);
    
    console.log(msg1);
    console.log(msg2);
    console.log(msg3);
};

// Returns a single quote by randomly choosing person and quote index
const getMessage = arr => {
    let personIndex = Math.floor(Math.random() * arr.length);
    let quoteIndex = Math.floor(Math.random() * arr[personIndex].length);
    return arr[personIndex][quoteIndex];
};

createMessage(messages);