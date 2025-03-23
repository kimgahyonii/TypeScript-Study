// // // * 구별자를 먼저 찾자 * : 그게 제일 중요

// // // // 구분된 유니언으로 쓰려면 속성이 구분자로 구별이 됨
// // // // 보통 구분자는 리터럴 타입

// // // type PoemWithPages = {
// // //     type: 'pages';
// // //     name: string;
// // //     pages: number;
// // // };

// // // type PoemWithRhymes = {
// // //     type: 'rhymes';
// // //     name: string;
// // //     rhymes: boolean;
// // // };

// // // type Poem = PoemWithPages | PoemWithRhymes;

// // // // 경우에 따라 pages 속성을 가지거나 rhymes 속성을 가질 수 있음
// // // const poem: Poem = Math.random() > 0.5 ? { name: "The Double Image", pages: 7, type: "pages" } : { name: "Her Kind", rhymes: true, type: "rhymes" };

// // // // in보다 구별자로 구분하는게 좋음
// // // if(poem.type === "pages"){
// // //     console.log(poem.pages);
// // // }
// // // if(poem.type === "rhymes"){
// // //     console.log(poem.rhymes);
// // // }

// // // kind가 구별자
// // type Circle = {
// //     kind: "circle";
// //     radius: number;
// // }
// // type Square = {
// //     kind: "square";
// //     sideLength: number;
// // }

// // // 대입에 의한 타입 좁히기기
// // type Shape = Circle | Square;
// // let c1 : Shape = { kind: 'circle', radius: 8};
// // let s1 : Shape = { kind: 'square', sideLength: 8};

// // // 원래는 에러가 나야함
// // console.log(c1.radius);
// // console.log(s1.sideLength);

// // // 에러가 남 : 맥락 정보가 없기 때문
// // function f(s: Shape){
// //     // console.log(c1.radius);
// //     // console.log(s1.sideLength);
// //     if(s.kind === "circle"){
// //         console.log(s.radius);
// //     } else{
// //         console.log(s.sideLength);
// //     }
// // }

// // // 결합 타입
// // type HasName = {
// //     name: string;
// // };
// // type HasAge = {
// //     age: number;
// // };

// // // 인터섹션 타입으로 & 연산자를 이용하여 두 타입을 결합 (&가 and 연산자이므로, HasName and HasAge로 해석 가능)
// // // 이제 Person 타입이 값에는 name, age 속성을 모두 포함하고 있는 객체를 저장 가능
// // type Person = HasName & HasAge;

// // const person: Person = {
// //     name: "John", // HasName 타입의 요구사항
// //     age: 30 // HasAge 타입의 요구사항
// // };

// // // 타임스탬프 기능을 위한 타입 정의
// // type Timestamped = {
// //     createdAt: Date;
// //     updatedAt: Date;
// // };

// // // 식별자 부여를 위한 타입 정의
// // type Identifiable = {
// //     id: string;
// // };

// // // 데이터베이스 엔티티를 위한 기본 타입 정의
// // type DbRecord = Timestamped & Identifiable;

// // // DbRecord의 모든 특성을 포함하며 추가적으로 사용자 정보를 포함하는 최종 타입 정의
// // // (물론, name, email 속성을 UserRecord와 같은 타입으로 따로 정의해도 무방함)
// // type User = DbRecord & {
// //     name: string;
// //     email: string;
// // };

// // // 다섯개 속성 없고 몇개만 있으면 에러남남
// // const user: User = {
// //     id: "123",                // Identifiable에 정의된 속성
// //     createdAt: new Date(),    // Timestamped에 정의된 속성
// //     updatedAt: new Date(),    // Timestamped에 정의된 속성
// //     name: "John",             // User의 고유 속성
// //     email: "john@example.com" // User의 고유 속성
// // };


// // 열거형 타입
// const enum Direction { // const를 스면 객체를 안생성함 값을 그냥 때려박음.
//     Up,
//     Down,
//     Left,
//     Right,
// }
// // 이거는 객체가 생김

// // 똑같은 이름 써서 에러나는 거 신경끄기 
// // 이거는 어떠한 파일도 만들지 않음
// // type Direction = "Up" | "Down" | "Left" | "Right";

// // // 이것은 direction 타입입
// let move = Direction.Up;
// console.log(move);
// // // 이거는 up down left right만 대입 가능능
// // move = Direction.Down;
// // console.log(move); // 1

// // enum HttpSatus{
// //     OK = 200,
// //     NotFound = 404,
// // }

// // let s = HttpSatus.OK; // 200
// // s = HttpSatus.NotFound; // 404

// // enum UserRole {
// //     Admin = "ADMIN",
// //     Editor = "EDITOR",
// //     Viewer = "VIEWER",
// // }


// // let role = UserRole.Admin;
// // let currentUserRole: UserRole = UserRole.Editor;
// // console.log(currentUserRole); // "EDITOR"


// // // 1) Optional Chaining 연산자 (?.)
// // // User 타입 정의
// // type User = {
// //     name: string;
// //     // 일부 속성은 선택적 속성으로 정의
// //     address?: {
// //         city: string;
// //         street?: string; // 메서드가 없는 경우는 좀 드물당당
// //     };
// //     // 메서드도 정의
// //     getFullAddress?: () => string;
// // };

// // // 실제 값이 null일 수도 있는 nullable 타입인 UserOrNull 타입 정의
// // type UserOrNull = User | null;

// // // API 호출 결과를 시뮬레이션
// // // (실제로는 결과값이 null일 수도 있음)
// // function getUser(id: number): UserOrNull {
// //     if (id === 1) {
// //         // 모든 내용이 포함된 객체
// //         return {
// //             name: "John",
// //             address: { city: "Seoul", street: "Street 1" },
// //             getFullAddress: function () {
// //                 return `${this.address?.city || ""}, ${this.address?.street || ""}`;
// //             }
// //         };
// //     } else if (id === 2) {
// //         // 필수 내용만 포함된 객체
// //         return {
// //             name: "Jane"
// //             // 선택인 address 속성 및 메서드 없음
// //         };
// //     } else {
// //         // 사용자를 찾지 못하여 null 반환
// //         return null;
// //     }
// // }

// // // 유저 정보 조회
// // const user1 = getUser(1); // 다 들어감감
// // const user2 = getUser(2);  // name만
// // const user3 = getUser(999); // null

// // // user1자체에 값이 없을 수도 있으니까 확인
// // // Optional Chaining 연산자 없이 안전하게 접근하려면 여러 조건문이 필요
// // // 원래는 user1 !== null임 줄여쓴거임
// // if (user1 && user1.address) {
// //     console.log(user1.address.city); // "Seoul"
// // }


// // if (user1 !== null) {
// //     if (user1.address !== undefined) {
// //         console.log(user1.address.city);
// //     }
// // }
// // console.log(user1?.address?.city); // "Seoul"
// // console.log(user2?.address?.city); // city로 갔다가 address가 없음 undefined

// // // const result = user2?.address?.city?.asdf?.bbc?.hahaha;
// // // if (result) {
// // //     console.log("성공");
// // // } else {
// // //     console.log("망함");
// // // }

// // console.log(user1?.address?.city); // "Seoul"
// // // user2까지는 접근하지만 이후 address 속성 접근 과정에서 바로 undefined 반환 (평가 중단)
// // console.log(user2?.address?.city); 
// // // user3 접근 과정에서 바로 undefined 반환
// // console.log(user3?.address?.city);

// // // 있을수도 있고 없을 수도있으니까 ?로 써줌
// // console.log(user1?.getFullAddress?.()); // "Seoul, Street 1"
// // console.log(user2?.getFullAddress?.()); // undefined 반환
// // console.log(user3?.getFullAddress?.()); // undefined 반환

// // 2) Null 병합 연산자 (??) : 왜 슬까? 기본값 주려고
// // let username1 = null;
// // let result1 = username1 ?? "Guest";
// // // "Guest" (username1이 null이므로)
// // console.log(result1);

// // let username2 = "John";
// // let result2 = username2 ?? "Guest";
// // // "John" (username2가 null이 아니므로)
// // console.log(result2);

// // 3) Non-null 단언 연산자 (!) : 타입스크립트에만 있다. 
// type StringOrEmpty = string | null | undefined;
// let v1: StringOrEmpty = null;
// let v2 = v1!;

// function getLength(text: string | null) {
//     // 느낌표를 주면서 값이 있을 수도 있음을 증명 그러나 null이 있을 수도 있음
//     // 안쓰는게 조음.
//     return text!.length;
// }

// function safeGetLength(text: string | null) {
//     if (text === null) {
//         const t = text;
//         return -1;
//     }
//     // 여기서는 느낌표를 없애도 됨 위에서 if에서 검사를 하면 떼도 됨
//     return text.length;
// }

// getLength(null); // 에러
// safeGetLength(null); // -1

// // unknown은 출력이랑 대입만 됨
// // nny랑 차이점 : any는 다 저장할 수 있는데
// // unknwon은 아무것도 못해해
// let unknownVar: unknown;

// unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};

// // unknownVar.foo;
// // unknownVar.toString();
// // console.log(unknownVar);

// // 타입 좁히기를 강제 db에서 api에서 가져온건 unknown
// unknownVar = 1;
// if(typeof unknownVar === "number"){
//     unknownVar = unknownVar * 2;
// }

// unknownVar = "hello";
// if(unknownVar === "hello"){
//     unknownVar.toUpperCase();
// }
    
// // Never
// let neverVar: never;
// // 출력도 안되고 아무것도 안됨

// // let s = "hello";
// // if(typeof s === "number"){
// //     s.toFixed(); // 절때 일어날 수 없고 사용될 수 없는 코드라서 미리 never로 판단
// // }
// // never를 왜 쓸까ㅏ? 경우의 수를 체크하려고 그럼

// // 좀 중요 추가적인거
// // never가 빠짐 유니언 타입에서 빠짐
// type MyType = string | number | never;

// // 반환값이 존재하지 않는 경우 void대신 never를 쓰기도 함
