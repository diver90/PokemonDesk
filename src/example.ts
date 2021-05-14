
const concat = (a:string, b:string): string => {
    return a + b;
}

interface myHomeTaskInterface {
    howIDoIt: string,
    simeArray: (string | number)[],
    withData: [{howIDoIt: string, simeArray:(string | number)[]}]
}

const myHometask: myHomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;

    // да-да, списывать не хорошо, но...
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;
}

