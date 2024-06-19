// let myNumber: number;
// myNumber = '5';
// const squared = (num: number): number => {
//     return num * num;
// }

// const myArr1: number[] = [5,23];

// const myArr2: (string|number)[] = [32,'Dgo',18,'Hello'];
// console.log(myArr1,"\n",myArr2);

// creating an object in TS
const stud1: {
    name: string,
    age: number,
    enrolled: boolean
} = {
    name: 'Saleh',
    age: 15,
    enrolled: true
};

// console.log(stud1); //before updating
// stud1.enrolled = false;
// stud1.course = 'math';
// console.log(stud1); // after updating

// Using interface instead to solve the new attribute type problem

// interface Student {
//     name: string,
//     age: number,
//     enrolled: boolean,
// }
// const stud2: Student {
//     name: 'kara', age: 16, enrolled: false;
// };

interface Student {
    course?: string;
}
const stud2: Student {
    name: 'kara', age: 16,
    enrolled: false, course: 'math'
}