// // // 타입 별칭을 이용하여 객체 타입을 정의
// // type Poet = {
// //     born: number;
// //     name: string;
// // };

// // // 인터페이스를 이용해도 똑같은 객체 타입을 정의할 수 있음
// // // (여기에서는, 사실상 같은 의미로 사용됨)
// // interface Poet {
// //     born: number;
// //     name: string;
// // }

// // interface Page {
// //     // readonly 키워드를 이용하여 text 속성을 읽기 전용 속성으로 설정
// //     readonly text: string;
// // }

// // function read(page: Page){
// //     console.log(page.text);
// // }

// // const pageIsh = {
// //     text: "Hello, world!",
// // };
// // // 따라서, text 값을 자유롭게 수정 가능
// // pageIsh.text += "!";
// // read(pageIsh); // 같은 모양을 하고 있어서 대입을 허용 shape라고도 함 but, 수정은 못함

// // interface Logger {
// //     logMessage(message: string): void;
// // }

// // // 인터페이스를 구현하는 객체
// // const consoleLogger: Logger = {
// //     // 메서드 구현
// //     logMessage(message) {
// //         console.log(`[LOG]: ${message}`);
// //     }
// // };

// // Q) 다음과 같은 결과로 계산이 될 수 있도록 Calculator 인터페이스를 정의하고 해당 인터페이스를 따르는 객체를 대입받은 calc 변수 생성
// // interface Calculator {
// //     add(a: number, b: number): number;
// //     subtract(a: number, b: number): number;
// // }

// // const calc: Calculator = {
// //     add(a, b) {
// //         return a + b;
// //     },
// //     subtract(a, b) {
// //         return a - b;
// //     }
// // }

// // const result1 = calc.add(1, 2);
// // const result2 = calc.subtract(5, 3);


// // interface Writing {
// //     title: string;
// // }

// // interface Novella extends Writing {
// //     pages: number;
// // }

// // // Novella 인터페이스를 준수하는 객체 대입
// // let myNovella: Novella = {
// //     title: "Ethan Frome",
// //     pages: 195,
// // };

// interface WithNullableName {
//     // name은 string이거나 null일 수 있음
//     name: string | null;
// }

// // 더 좁은 타입으로의 재정의는 가능하지만
// interface WithNonNullableName extends WithNullableName {
//     // string은 "string | null"의 부분 집합 타입이므로 가능
//     name: string;
// }

// // 더 넓은 타입으로의 재정의는 불가
// // "number | string" 타입의 값을 "string | null"에 할당할 수 없음
// // interface WithNumericName extends WithNullableName {
// //     name: number | string;
// // }
// // 타입이 확장 되면서 부모로부터 해결을 못하는 일이 발생 number는 toLowerCase를 적용못하기 대문 
// // interface GivesNumber {
// //     giveNumber(): number;
// // }

// // interface GivesString {
// //     giveString(): string;
// // }
// // // 클래스는 다중상속이 안되지만 인터페이스는 됨
// // interface GivesBothAndEither extends GivesNumber, GivesString {
// //     giveEither(): number | string;
// // }

// // // 타입 별칭 정의
// // type Animal = {
// //     name: string;
// //     color: string;
// // };

// // // 타입 별칭을 확장하는 인터페이스
// // interface Dog extends Animal {
// //     breed: string;
// // }

// // interface Merged {
// //     fromFirst: string;
// // }

// // interface Merged {
// //     fromSecond: number;
// // }

// // // fromFirst, fromSecond를 모두 포함한 객체 생성 가능
// // let merged: Merged = {
// //     fromFirst: "Hello",
// //     fromSecond: 123,
// // };

// // // Window, Document, HTMLElement 등 브라우저 환경에서 사용되는 모든 웹 API들의 타입 정의가 포함되어 있는 "lib.dom.d.ts"에 정의된 Window 인터페이스를 확장
// // interface Window { // 남이 만든 인터페이스 고치고 싶을 떄 window라는 미리 만들어져있는 내가 안만든 인터페이스에 넣고싶을땐 
// // // 내가 정의한게 아니라서 고칠수 없기 대문에 인터페이스 병합을 통해 추가하기
// //     myEnvironmentVariable: string;
// // }
// // window.myEnvironmentVariable;

// // interface Document{
// //     asdf: number;
// // }

// // // 인덱스 시그니처처
// // interface WordCounts {
// //     // 모든 string 키에 대해 number 타입 값을 가질 수 있음
// //     [key: string]: number; // 키라는 속성이 아니라 모든 종류의 문자열을 만하는 것
// // }

// // const counts: WordCounts = {};
// // counts.apple = 1; // OK
// // counts.banana = 2; // OK
// // counts.["kiwi"] = 3;
// // // Error: string을 number에 할당할 수 없음
// // counts.cherry = "three";
// // counts["mango"] = "four"; // 문자열로 접근은 하지만 number를 대입해야만함 number값만 저장하도록 허용하겠다.

// // interface Dictionary{
// //     [key: string] : string;
// // }

// // const dict: Dictionary = {};
// // dict.apple = "사과";
// // dict.banana="사과";
// // dict["kiwi"]="사과";
// // // dict["mango"]=1234;

// // interface Config {
// //     // 이 값에 들어가 룻 있는 타입이 strinㅎ이거나 nuber이거나  boolean
// //     [setting: string]: string | number | boolean;
// // }

// // const appConfig: Config = {
// //     apiUrl: "https://api.example.com",
// //     timeout: 5000,
// //     enableCache: true,
// //     // 어떤 이름의 설정이든 추가 가능
// //     newSetting: "value",
// //     // Error: object 타입은 허용되지 않음
// //     // oops: {}
// // };

// // interface ApiResponse {
// //     // 응답코드를 저장할 status라는 키를 포함해야 하며, 반드시 숫자값이어야 함
// //     status: number;
// //     // 그 외에 어떤 문자열 키든 추가할 수 있지만, 그 값은 "string | number | boolean | object" 타입이어야 함
// //     [key: string]: string | number | boolean | object;
// // }

// // // 여기에서 인터페이스 시그니처가 유용함함
// // const response: ApiResponse = {
// //     status: 200,
// //     data: { id: 1, name: "Product" },
// //     success: true,
// //     message: "OK"
// // };

// // 1. 선언 병합
// interface User {
//     name: string;
// }

// interface User {
//     age: number;
// }

// // 타입 별칭은 불가능
// // type Animal = {
// //     name: string;
// // }

// // // Error: Duplicate identifier 'Animal'
// // type Animal = {
// //   age: number;
// // }

// // 2. 확장 방식
// // 인터페이스는 extends 키워드 사용
// // interface Vehicle {
// //     wheels: number;
// // }

// // interface Car extends Vehicle {
// //     doors: number;
// // }

// // // 타입 별칭은 교차 타입(&) 사용
// // type Shape = {
// //     color: string;
// // };

// // // 인터섹션 타입으로 확장함 &를 쓰면 합쳐짐
// // type Circle = Shape & {
// //     radius: number;
// // };

// // 3. 유니온 타입 정의
// // 성공 응답 타입
// // interface Success {
// //     status: "success";
// //     data: string;
// // }
// // // 에러 응답 타입
// // interface Error {
// //     status: "error";
// //     message: string;
// // }

// // (애초에 =를 이용한 대입 자체가 불가)
// // 인터페이스는 유니언타입이 안됨
// // interface Status = Success | Error;

// // 타입 별칭으로는 유니언 타입 정의 가능
// // type StatusType = Success | Error;

// // type a = "hello";
// // type b= "a" | "b";

// class Student {
//     // default는 없다.
//     name: string;
//     age: number;
//     // private 키워드를 이용한 접근 불가 필드 선언은 타입스크립트 고유 기능
//     private grade: number;
//     // readonly 키워드를 이용한 읽기 전용 필드 선언은 타입스크립트 고유 기능
//     readonly id: string;

//     // 생성자의 이름은 무조건 constructor
//     constructor(name: string, age: number, id: string) {
//         this.name = name;
//         this.age = age;
//         this.grade = 1;
//         this.id = id;
//     }

//     s: () => void = function(){
//         console.log("안녕히 계세요");
//     }

//     // 메서드
//     study(subject: string): void {
//         console.log(`${this.name}이(가) ${subject}를 공부합니다.`);
//     }

//     getGrade(): number {
//         return this.grade;
//     }

//     promote(): void {
//         this.grade += 1;
//     }
// }
// const student = new Student("Kim", 20, "2024-001");
// student.study("TypeScript"); // "Kim이(가) TypeScript를 공부합니다."
// student.promote();
// console.log(student.getGrade()); // 2

// class FieldTrip {
//     // 필드 정의
//     destination: string;
//     // 생성자 정의
//     constructor(destination: string) {
//         // 전달받은 값으로 필드값 초기화
//         this.destination = destination;
//         console.log(`We're going to ${this.destination}!`);
//         // 존재하지 않는 필드값에 접근하려 하므로, 에러 발생
//         // Property 'nonexistent' does not exist on type 'FieldTrip'
//         // this.nonexistent = destination;
//     }
// }

// // 이후 FieldTrip 클래스를 사용하여 FieldTrip 객체 생성
// const trip = new FieldTrip("planetarium");
// // 존재하는 필드값에만 접근 가능
// console.log(trip.destination);
// // console.log(trip.nonexistent);

// // class WithValue {
// //     // 직접 필드값을 초기화했으므로 OK
// //     // immediate = 0; 이렇게 값을 초기화 하던지
    
// //     // 생성자에서 필드값을 초기화했으므로 OK
// //     later: number;
// //     // 유니언 연산자를 통해서 undefined 값 대입을 허용했으므로 허용
// //     // (이후, undefined로 필드값이 초기화)
// //     mayBeUndefined: number | undefined;
// //     // 단언 연산자(!)를 사용하면 undefined를 설정하지 않아도 됨
// //     // (이후, undefined로 필드값이 초기화)
// //     definitelyAssigned!: number; // 값이 무조건 있다. 단언 연산자를 써서 
// //     // Initialization Checking 옵션 활성화하면, 에러가 발생함
// //     unused: number;
    
// //     constructor() {
// //         this.later = 1;
// //     }
// // }

// // class Configuration {
// //     // 선언 시점에서 초기화
// //     // 자바의 final과 비슷함
// //     // 이때 초기화 하는 것 빼고는 값을 수정할 수 없음
// //     readonly apiKey: string = "default-key";
// //     // 생성자에서 초기화
// //     readonly serverUrl: string;
    
// //     constructor(serverUrl: string) {
// //         this.serverUrl = serverUrl;
// //     }
    
// //     updateConfig() {
// //         // // 생성자 외의 장소에서는 깂 수정 불가
// //         // // Error: Cannot assign to 'apiKey' because it is a read-only property
// //         // this.apiKey = "new-key";
// //         // // Error: Cannot assign to 'serverUrl' because it is a read-only property
// //         // this.serverUrl = "new-url";
// //     }
// // }

// // start, move 기능 메서드를 포함한 Vehicle 클래스 정의
// class Vehicle {
//     start() { return "시동 걸림"; }
//     move() { return "이동 중"; }
// }

// // Vehicle 타입의 값을 파라미터로 받는 함수 정의
// function driveVehicle(vehicle: Vehicle) { // 객체를 넘길 때 start랑 move만 있으면 구조만 맞으면 넘길 수 잇ㅇ텄다 vehicle타입이 아니더라도도
//     console.log(vehicle.start());
//     console.log(vehicle.move());
// }

// // 원본 클래스의 인스턴스는 아무 문제 없이 전달 가능
// const car = new Vehicle();
// driveVehicle(car);

// // 같은 구조(같은 메서드 제공)를 가진 클래스 정의
// class Bicycle {
//     start() { return "페달 준비"; }
//     move() { return "페달링"; }
// }
// // 비록 클래스의 타입이 달라도 구조적 타이핑이 원칙에 따라 허용함
// driveVehicle(new Bicycle());

// // 같은 구조를 가진 객체 리터럴 값 정의
// const drone = {
//     start: () => "프로펠러 작동",
//     move: () => "비행 중",
//     extraFeature: () => "촬영" // 추가 속성이 있어도 하용
// };
// // 객체 리터럴이지만 start, move 메서드를 가지고 있으므로 허용
// driveVehicle(drone);

// // 필요한 구조가 부족한 경우
// const invalidVehicle = {
//     start: () => "시작"
//     // move 메서드가 없음
// };
// // 에러가 발생
// // Error: Property 'move' is missing
// // driveVehicle(invalidVehicle);
