// function tsAdd(x: number, y: number): number {
//     return x + y;
// }

// let result1 = tsAdd(10, 20);
// console.log(result1);
// // let result2 = tsAdd(10, 20, 3);

// // X
// // let nullValue: null = null
// // nullValue = undefined;

// // let lengthOfWord = "hello".length; 
// // let randomString = Math.random() > 0.5 ? "hello" : "world";

// // let lengthOfWord = "hello".length();     

// // 변수의 타입을 string으로 추론
// // let stringValue = "hello";
// // 이후 문자열 대입은 가능하지만
// // stringValue = "world";
// // 숫자 대입은 불가
// // Type 'number' is not assignable to type 'string'
// // stringValue = 1234;

// // any 타입은 검사를 포기 -> 권장 안함
// // 추론할 초기 대입값이 제공되지 않았으므로, 타입이 any로 추론됨
// let anyValue;

// // 이후 아무 타입의 값이나 대입 가능
// anyValue = "hello";
// anyValue = 1234;

// // 단, 타입값에 대한 어떠한 가정도 하지 않으므로, 다음과 같이 존재하지 않는 속성 혹은 메서드 접근도 허용함을 유의
// anyValue.hello;
// anyValue.oops();

// let someStringValue = "hello";
// someStringValue.toUpperCase();
// // 다음과 같이 메서드 이름에 오타를 친 경우에도 미리 파악 가능 (자바스크립트의 경우 런타임에 파악 가능)
// // someStringValue.toUperCase();

// let someNumberValue = 1234;
// // 숫자 타입 값에 존재하는 toFixed 메서드 호출 허용
// someNumberValue.toFixed(1);

// let value1 = true ? 1 : "Hello";
// // or로 연결하는 타입 숫자이거나 문자열이거나
// // value = true; X

// // 직접 타입 체크
// if (typeof value1 === "number") {
//     // 이후 number 타입임이 확실시 되었으므로 toFixed 메서드 활용 가능
//     value1.toFixed();
// }

// if (value1 === "hello") {
//     // 이후 number 타입임이 확실시 되었으므로 toFixed 메서드 활용 가능
//     value1.toUpperCase();
// }

// // value1 toUpperCase();
// // cosnt는 상수라 바꿀 수 없으니 /Hello만 저장할 수 있는는 리터럴로 지정
// const constValue1 = "Hello"; // hello만 저장할 수 있는 타입
// const constValue2 = 1234
// let v : "hellovel"

// let stringOrNull = Math.random() > 0.5 ? "Hello" : null;

// // 값이 null일 수도 있으므로 에러 발생
// // 'stringOrNull' is possibly 'null'
// // stringOrNull.toUpperCase();

// // 다음과 같이 명시적으로 null 체크를 통해서
// if(stringOrNull !== null) {
//     // 값이 string 임을 확실히 하였으므로 메서드 사용 가능
//     console.log(stringOrNull.toUpperCase());
// }

// // 혹은 truthy 체크를 할 수도 있음
// if(stringOrNull) {
//     console.log(stringOrNull.toUpperCase());
// }


// // nullable 타입입
// let value2: string | null = null;
// value2 = "hello"