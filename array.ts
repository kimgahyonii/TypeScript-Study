// // 원래는 js에서 가능
// // const elements: any= [true, null, undefined, 42];
// // const elements = [true, null, undefined, 42];
// // elements.push("even", ["more"]);

// // const stringArray: string[] = ["a", "b", "c"];
// // stringArray.push("d");
// // stringArray.push(1); 

// // const numberArray = [1, 2, 3];
// // numberArray.push(4);
// // // 에러 발생
// // numberArray.push("Hello");

// // const numberArray: Array<number> = [1, 2, 3];

// // 타입추론을 어떻게 해? 배열에 들어간 모든 값들을 유니언으로 엮고 판단
// // const namesMaybe1: (string | undefined)[] = ["Aqualtune", "Blenda", undefined];
// // const namesMaybe2 = ["Aqualtune", "Blenda", undefined];

// // let anyArray: any[] = [];
// // let anyArray: string[] = [];

// // function calculateSum(numbers: readonly number[]): number {
// //     // 따라서, 함수 내부에서는 내용 수정 불가
// //     // numbers.push(5); // 실수 방지
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++) {
// //         sum += numbers[i];
// //     }
// //     return sum;
// // }

// // const arr = [1, 2, 3, 4];
// // const sum = calculateSum(arr);
// // console.log(sum); // 10
// // arr.push(5); // 함수 안에서만 변동이 안되고 밖에서는 가능함함

// // 바굴 수 있는 걸 readonly에 대입하는 건 가능하지만 readonly를 바꿀 수 있는거에 대입은 불가능

// let point: [number, number] = [10, 20];
// let point3D: [number, number, number] = [10, 20, 30];
// let nameAge: [string, number] = ["Alice", 25];

// // 좌표를 나타내는 튜플 타입 정의
// type Point = [number, number];
// type UserInfo = [string, number, boolean];

// // 사용 예시
// let point1: Point = [10, 20];
// let point2: Point = [30, 40];

// let user1111: UserInfo = ["Alice", 25, true];
// let user2222: UserInfo = ["Bob", 30, false];

// // 애초에 이 함수도 튜플이라고는 하지만 막상 따져보면 배열
// function convertCoordinates(point: [number, number]): [number, number] {
//     return [point[0] * 2, point[1] * 2];
// }

// // 배열 비구조화 let a = [ 1, 2, 3] let b = 'a', 'b', 'c' a는 1 b 2 c 3
// const [newX, newY] = convertCoordinates([10, 20]);
// console.log(newX);
// console.log(newY);

// const [userName, userAge] = user1111
// user1111[0] = "Sam"
// const pairConst = [1157, "Tomoe"] as const;

// // 읽기 전용 튜플로 설정하였으므로, 값을 변경 할 수 없음
// pairConst[0] = 1158; // 에러
// pairConst[1] = "Hattori"; // 에러
