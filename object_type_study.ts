// let poet: {
//     born: number;
//     name: string;
// } = {
//     born: 1935,
//     name: "Mary Oliver"
// }


// console.group(poet['born'])
// // 이것들을 출력하는게 안됨
// // poet.end
// // poet.end()
// // poet.born = "1953";

// // 어떤 객체인지 모르니까 에러가 나는 이유는 객체 타입 때문
// const someObject: object = {
//     someProp1 : "hello"
// }

// console.log()


// // 직접적으로 대입은 안됨 간접 대입은 가능
// // let widthFirstName: WithFirstName = hashBoth;

// type User = {
//     name: string;
//     age: number;
// }

// // // 케이스 1: 초과된 속성이 포함된 객체 리터럴 값의 할당은 불가
// // const john: User = {
// //     name: "John",
// //     age: 30,
// //     occupation: "developer" // 에러 발생 => 초과 속성 검사에 걸림
// // };

// // 케이스 2: 중간 변수를 통한 할당
// // (johnObj는 User 타입이 아님을 유의!)
// const johnObj = {
//     name: "John",
//     age: 30,
//     occupation: "developer"
// };

// const john2: User = johnObj; // 간접 대입이라 가능능

// // 직접적으로 대입하는 건 실수라고 판단함. 간접적인건 실수가 아니라고 판단/
// // console.log(john2.occupation); // 안됨 업캐스팅 개념과 비슷 부모타입으로 업 캐스팅 하면 부모 타입만 쓸 수 있기 때문


// // 타입이 아닌 구조를 봄 ( 좀 더 관대함 )
// type WithFirstName = {
//     firstName: string;
// };
// type WithLastName = {
//     lastName: string;
// };

// // hasBoth가 WithFirstName, WithLastName 둘 중 어떠한 타입도 아닌 객체 리터럴 타입임을 유의
// // (단, 두 타입에서 요구하는 값을 모두 가지고 있긴 함)
// const hasBoth = {
//     firstName: "Lucille",
//     lastName: "Clifton",
// };

// type Book = {
//     author?: string;
//     pages: number;
// };
// // ?는 undifined 
// // author : string | undefined 로 하게 되면 필수가 됨

