let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;
let a = 20;
let numbers : number[] = [1,2,3];

function calculateTax(income: number, taxYear: number): number { 
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
    //Js by defaul returns undefined, so in case if 'if' condition is not true, it returns 'not number'
}