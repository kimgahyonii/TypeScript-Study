// // // // 인터페이스 정의
// // // interface Learner {
// // //     name: string;
// // //     // name: string | null ; 이렇게도 쓰일 수 있음
// // //     study(hours: number): void;
// // // }

// // // // Learner 인터페이스 구현
// // // class Student implements Learner {
// // //     name: string;
// // //     // 원래는 구조상으로 constructor가 위로 올라가야함
// // //     constructor(name: string) { 
// // //         this.name = name;
// // //     }
// // //     study(hours: number) {
// // //         console.log(`${this.name}이(가) ${hours}시간 동안 공부합니다.`);
// // //     }
// // //     // 클래스만의 추가 메서드 구현 가능
// // //     takeBreak() {
// // //         console.log("휴식 시간!");
// // //     }
// // // }

// // // const student = new Student("Kim");
// // // student.study(2); // "Kim이(가) 2시간 동안 공부합니다."
// // // student.takeBreak(); // "휴식 시간!"

// // // // 다중 상속
// // // interface Graded {
// // //     grades: number[];
// // // }

// // // interface Reporter {
// // //     report: () => string;
// // // }

// // // // 두 인터페이스를 모두 구현한 클래스 정의
// // // class ReportCard implements Graded, Reporter {
// // //     grades: number[];
// // //     constructor(grades: number[]) {
// // //         this.grades = grades;
// // //     }

// // //     // Reporter 인터페이스의 report 메서드 구현
// // //     report() {
// // //         return this.grades.join(", ");
// // //     }   
// // // }

// // // // 클래스 상속
// // // // extends 키워드를 사용하여 기존 클래스 상속 가능
// // // class Teacher {
// // //     teach() {
// // //         console.log("The surest test of discipline is its absence.");
// // //     }
// // // }

// // // // teach도 가능, learn도 가능한 사람
// // // class StudentTeacher extends Teacher {
// // //     // 인터페이스와 달리, 따로 teach 메서드 구현은 필요 없음
// // //     // (물론, 필요한 경우 메서드 오버라이드 가능)
// // //     learn() {
// // //         console.log("I cannot afford the luxury of a closed mind.");
// // //     }
// // // }

// // // const teacher = new StudentTeacher();
// // // teacher.teach(); // 허용 (부모로부터 상속받은 메서드)
// // // teacher.learn(); // 허용 (자신의 메서드)


// // // 부모 클래스 정의
// // // 인터페이스 구현이 아니라서 더 써줄 필요는 없음음
// // class Lesson {
// //     subject: string;
// //     constructor(subject: string) {
// //         this.subject = subject;
// //     }
// // }

// // // 자식 클래스 정의
// // class OnlineLesson extends Lesson {
// //     url: string;
// //     constructor(subject: string, url: string) {
// //         // 부모 생성자 호출할 때 super 생성자 사용
// //         // url 관련만 가져옴 
// //         // super 반드시 호출 중요중요중요
// //         super(subject);
// //         this.url = url;
// //     }
// // }

// // let lesson: Lesson;
// // // 자식 타입을 부모 타입으로 대입 (업캐스팅)
// // lesson = new OnlineLesson("coding", "oreilly.com");
// // console.log(lesson.subject);
// // // Lesson 타입으로 인식하고 있고 해당 타입에는 url 필드가 없으므로, 에러 발생
// // // onlinelesson에서만 쓸 수 있는데 lesson에 넣었으니까
// // let online: OnlineLesson;
// // // online = lesson; // 이때는 대입이 불가능 한 상태
// // online = lesson as OnlineLesson; // 다운캐스팅은 뭘 써줘야함
// // console.log(online.url); 

// // class GradeAnnouncer {
// //     message: string;
// //     constructor(grade: number) {
// //         this.message = grade < 65 ? "Maybe next time..." : "You pass!";
// //     }
// // }

// // class PassingAnnouncer extends GradeAnnouncer {
// //     constructor() {
// //         // 반드시 super 키워드를 이용해서 부모 생성자 호출 필요
// //         super(100);
// //     }
// // }

// // 오버라이드 대상 클래스 작성
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     speak(): void {
//         console.log(`${this.name} makes a sound.`);
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
// }

// // 상속받는 클래스 작성
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, breed: string) {
//         // 부모 클래스의 생성자 호출
//         super(name);
//         this.breed = breed;
//     }
//     // speak 메서드 오버라이드
//     speak(): void {
//         // 부모 클래스의 메서드 호출 가능 (호출이 필수는 아님)
//         super.speak(); // 예는 필수아님
//         // this.spek()만 작성을 실수로 하게 된다면 무한 반복을 하게 됨
//         console.log(`${this.name} barks: Woof! Woof!`);
//     }
//     // eat 메서드 오버라이드
//     eat(): void {
//         console.log(`${this.breed} dog ${this.name} is eating quickly.`);
//         // 부모 메서드 호출을 마지막에 할 수도 있음
//         super.eat();
//     }
//     // 자식 클래스만의 새로운 메서드 추가 가능
//     fetch(): void {
//         console.log(`${this.name} fetches the ball!`);
//     }
// }

// // 객체 생성
// const rex = new Dog("Rex", "German Shepherd");

// // 메서드 호출
// rex.speak();
// // 출력:
// // Rex makes a sound.
// // Rex barks: Woof! Woof!

// rex.eat();
// // 출력:
// // German Shepherd dog Rex is eating quickly.
// // Rex is eating.

// rex.fetch();

// class Animal {
//     // 새끼를 낳는 createBaby 메서드
//     createBaby(): Animal {
//         return new Animal();
//     }
// }

// class Dog extends Animal {
//     // 더 구체적인 타입(Dog)으로 반환 타입 오버라이드 가능
//     createBaby(): Dog {
//         // 오버라이딩 하면서 타입 바꾸거 애니멀의 자식이라면 다 바꾸기 가능
//         return new Dog();
//     }

//     // 혹은 다음과 같이 같은 타입(Animal 타입)으로 오버라이드 가능
//     // createBaby(): Animal { // 원래 되는 거
//     //     return new Dog();
//     // }
// }


// class Cat extends Animal {
//     // string 타입은 Animal 타입도 아니고, Animal 타입의 자식 타입도 아님 => 에러 발생
//     // createBaby(): string { // 만약에 한다면 cat으로 해야함.
//     //     return "Kitten";
//     // }

// }

// // 자식 객체 생성
// const dog: Dog = new Dog();
// // 부모 타입(Animal)로 대입
// const animal: Animal = dog;
// // 부모 타입의 메서드 호출 (Dog이므로, Animal 타입으로 변화 가능)
// const dogBaby: Animal = dog.createBaby();
// const cat: Cat = new Cat();
// // const catBaby: Animal = cat.createBaby(); // 애초에 cat을 불러올 수 조차 없음

// // 매개변수는 부모 메서드와 호환되어야 함

// // 반환 타입 제약 2 => 매개변수는 부모 메서드와 호환되어야 함
// class Logger {
//     log(message: string, level: string = "info"): void {
//         console.log(`[${level}] ${message}`);
//     }
// }

// class ErrorLogger extends Logger {
//     // 옵션타입으로 무조건 써야함 즉 바뀐 timestamp를 그렇게 써야하는 것 왜냐면 모순이 생겨서 
//     log(message: string, level: string = "error", timestamp?: Date): void {
//         if (timestamp) {
//             console.log(`${timestamp.toISOString()} [${level}] ${message}`);
//         } else {
//             // 추가된 매개변수가 없는 경우 부모 메서드 호출
//             super.log(message, level);
//         }
//     }
// }

// const errorLogger: ErrorLogger = new ErrorLogger();
// errorLogger.log("Error message", "warn", new Date());
// const logger: Logger = errorLogger;
// // logger.log("Error message", "warn", new Date()); /
// logger.log("Error message", "warn");

// // 접근 제한자(private, protected, public)는 부모와 같거나, 더 개방적이어야 함 (*) 무쓸모
// class Base {
//     public publicMethod(): void {
//         console.log("Public method");
//     }
//     protected protectedMethod(): void {
//         console.log("Protected method");
//     }
// }
// class Derived extends Base {
//     // protected 제어자를 public 제어자로 바꾸어 더 개방적으로 조정하기 => 가능
//     // public => private는 에러
//     public protectedMethod(): void {
//         super.protectedMethod();
//         console.log("Now public!");
//     }
//     // public 제어자를 private 제어자로 바꾸어 더 제한적으로 조정하기 => 불가능
//     // private publicMethod(): void {
//     //   console.log("Cannot restrict access");
//     // }
// }

// const derived: Derived = new Derived();
// 원래 protected는 본인꺼랑 상속받은 거기에서만 사용가능한데 public으로 바꿔서 가능함.
// derived.protectedMethod();
// const base: Base = derived;
// base.protectedMethod(); // 부모 타입의 제약조건을 지키는 게 맞으니까 에러가 남

// 자식 클래스에서 public 제어자를 private으로 바꿀 수 있었다고 "가정"해보기!
// 당연히 다음의 호출은 불가능
// derived.publicMethod();
// 그러나 부모 타입으로 접근하면 접근이 가능해짐 (모순! => 부모 타입으로 타입 전환으로 자식 타입에 대한 제약을 우회할 수 있음)
// base.publicMethod();

// class Example {
//     // 기본적으로 모두 public 접근제어자가 붙어있다고 가정
//     publicField = "public";
//     // # 기호를 이용하여 private 필드 혹은 메서드 설정 가능 (자바스크립트 문법)
//     #privateField = "private";

//     // public 메서드
//     someMethod() {
//         // 클래스 내부에서는 private 메서드 호출 가능
//         this.#privateMethod();
//     }

//     // #이 private
//     // private 메서드 정의
//     #privateMethod() {
//         console.log(this.#privateField);
//     }
// }

// const ex = new Example();
// // public 메서드이므로 접근 허용
// ex.someMethod();
// // 에러, private 메서드는 외부에서 접근 불가
// ex.#privateMethod(); // 접근을 못함
// ex.#privateMethod();

// class Base {
//     // public => 어디에서나 접근 가능
//     public value = "public";
//     // protected => 클래스 내부 혹은 상속 클래스에서 접근 가능
//     protected secret = "protected";
//     // private => 클래스 내부에서만 접근 가능
//     private hidden = "private";
//     // 자바스크립트에서 제공하는 private 필드'
//     // (타입스크립트에서는 가급적 private 키워드 활용 권장)
//     #truePrivate = "real private";
// }

// class SubClass extends Base {
//     method() {
//         this.value; // 허용 (public)
//         this.secret; // 허용 (protected)
//         // this.hidden; // 에러 (private)
//         // this.#truePrivate; // 에러 (private)
//     }
// }

// 일반적인 방식 -> 알아서 대입한 걸로 해줄테니까 this안서도 됨 그대신 파라미터에 접근 제어자 쓰기
// class Student {
//     constructor(public name: string, public age: number) {

//     }
// }

// 일반적인 방식
class Student {
    // 필드 선언
    public name: string;
    public age: number;

    // 생성자로 전달받은 파라미터 값을 이용하여
    constructor(name: string, age: number) {
        // 필드값을 모두 초기화
        this.name = name;
        this.age = age;
    }
}

// 매개변수 프로퍼티 사용하는 방식
class StudentWithParams {
    // 생성자의 매개변수 부분에 접근 제어자를 붙여서 필드 정의 및 초기화가 모두 이루어지도록 하는 문법
    constructor(
        public name: string,
        public age: number
    ) {} // 생성자 내용을 비워놔도 전달받은 값으로 필드값 초기화 완료
}

let s1 = new Student("Kim", 20);
let s2 = new StudentWithParams("Park", 23);

// 둘 다 속성이 제대로 포함되어 있는 것을 확인 가능
console.log(s1.name, s1.age); // Kim 20
console.log(s2.name, s2.age); // Park 23

// 정적 필드와 메서드
class Example {
    // 인스턴스 안만들어도되는 거
    static count = 0;
    // 정적 메서드 (ES2015부터)
    static increment() {
        Example.count++;
    }
}

// 클래스 이름으로만 정적 멤버에 접근 가능
console.log(Example.count); // 0
Example.increment();
console.log(Example.count); // 1

// 인스턴스를 통한 정적 필드, 메서드 접근은 불가
const instance = new Example();
// Error: Property 'count' does not exist on type 'Example'
// console.log(instance.count);
// Error: Property 'increment' does not exist on type 'Example'
// instance.increment(); // 애초에 정적 필드와 정적 메소드이기 때문에 실수라고 판단해서 에러라고 표시
