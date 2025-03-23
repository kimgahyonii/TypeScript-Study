// // 오버로드 시그니처
// function add(a: number, b: number): number;
// function add(a: string, b: string): string; // 원하는 타입을 써줘야함 이게 좀 트깅한점
// // 구현부부
// function add(a: number | string, b: number | string) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;  // 숫자 더하기
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;  // 문자열 연결
//     }
//     throw new Error("인자는 모두 숫자이거나 모두 문자여야 합니다");
// }

// // 오버로드 시그니처
// function calculateArea(radius: number): number;

// // 직사각형의 면적 계산용 함수 시그니쳐 (가로, 세로)
// function calculateArea(width: number, height: number): number;

// // 실제 구현부
// function calculateArea(a: number, b?: number): number {
//     if (b === undefined) {
//         // 원의 면적
//         return Math.PI * a * a;
//     } else {
//         // 직사각형의 면적
//         return a * b;
//     }
// }

// // 사용 예시
// // console.log(calculateArea(5));       // 원의 면적
// // console.log(calculateArea(4, 6));    // 직사각형의 면적

// // // 에러 케이스
// // calculateArea();              // 에러: 최소한 하나의 인자는 필요
// // calculateArea(2, 3, 4);       // 에러: 최대 두 개의 인자만 허용

// type Animal = {
//     name: string;
// };

// type Dog = Animal & { // &는 둘다 가지고 있
//     isBark: boolean;
// };

// type Cat = Animal & {
//     isScratch: boolean;
// };

// function isDog(animal: Animal): animal is Dog {
//     return 'isBark' in animal;
// }
// function isCat(animal: Animal): animal is Cat{
//     return 'isScratch' in animal;
// }
// const myPet: Animal = { name: "정체불명" };
// const myDog: Dog = { name: "정체불명", isBark: true };
// function f(myPat: Animal){
//     if(isDog(myPet)){
//         console.log(myPet.isBark);
//     }
//     if(isCat(myPet)){
//         console.log(myPet.isScratch);
//     }
// }

// f(myDog);