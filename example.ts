type TypeFn = (first: string, second: string) => void
const concat: TypeFn = (a, b) => a + b
concat('hello', 'world')
//---------------------------------------------------
type TsStrAndNumb = string | number
interface MyFirstInterface {
    howIDoIt: string,
    simeArray: TsStrAndNumb[],
}
interface MySecondInterface {
    howIDoIt: string,
    simeArray: TsStrAndNumb[],
    withData: MyFirstInterface[]
}
const myHometask: MySecondInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", '42'],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
//--------------------------------------------
interface MyArray<T> {
    [n: number]: T;
    reduce<U>(fn: (sum: T, el: T) => U): T;
}
const tsArr: MyArray<number> = [1, 2, 3, 4]
tsArr.reduce((sum, el) => sum + el)