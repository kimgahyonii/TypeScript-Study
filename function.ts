// // song 타입을 anu로 추정함
// // function sing(song: string) {
// //     console.log(`Singing: ${song}!`);
// // }

// // function singTwo(first: string, second: string) {
// //     console.log(`${first} / ${second}`);
// // }
// // // OK
// // singTwo("I Will Survive", "Higher Love");

// // 하나만 전달했으므로 에러
// // Error: Expected 2 arguments, but got 1.
// // singTwo("Ball and Chain");

// // 초과 전달도 에러로 처리함을 유의
// // singTwo("Go Your Own Way", "The Chain", "Dreams");

// // singer 값은 선택적으로 전달할 수 있도록 선택적 파라미터로 정의
// // function announceSong(song: string, singer?: string) {
// //     console.log(`Song: ${song}`);
// //     // singer 값이 전달되었다면 출력
// //     // singer?.toUpperCase(); 
// //     // singer.toUpperCase(); error
// //     // if (singer) {
// //     //     console.log(`Singer: ${singer}`);
// //     // }
// // }

// // // 필수 값인 song은 전달하였으므로 OK
// // announceSong("Greensleeves");
// // // 두 값을 모두 전달해도 OK
// // announceSong("Chandelier", "Sia");

// // 이렇게 되면 undefined라도 값을 줘야하기때문에 별로 좋은 방법은 아님
// // function announceSongBy(song: string, singer: string | undefined) { /* ... */ }

// // function rateSong(song: string, rating = 0) {
// // console.log(`${song} gets ${rating}/5 stars!`);
// // }
// // rateSong("Photograph"); // 0
// // rateSong("Set Fire to the Rain", 5);
// // rateSong("Hello", undefined);// undefined를 주면 기본값을 주기때문에 0점

// //나머지 파라미터
// // 나머지 매개변수(...)을 사용한 songs 파라미터는 가변 길이의 문자열 배열을 받게 됨
// // function singAllTheSongs(singer: string, ...songs: string[]) {
// //     console.log(songs);
// //     for (const song of songs) {
// //         console.log(`${song}, by ${singer}`);
// //     }
// // }

// // singAllTheSongs("Alicia Keys"); // 이렇게 주면 빈 배열
// // // "Bad Romance" 문자열부터 songs 배열에 포함됨
// // singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");

// // // 반환 타입을 "number"로 추론
// // function singSongs(songs: string[]) {
// //     for (const song of songs) {
// //         console.log(`${song}`);
// //     }
// //     // 반환문을 통해서 반환하는 값이 숫자
// //     return songs.length;
// // }

// // 반환 타입을 "string | undefined"로 추론
// // function getSongAt(songs: string[], index: number) {
// // 	// 상황에 따라 문자열 혹은 undefined가 반환될 수 있는 상황
// //     return index < songs.length ? songs[index] : undefined;
// // }


// // add 변수에 함수 저장
// let add = function (a: number, b: number) { // 첫번째 두번쨰 파라미터 다 number 반환 타입도 number인 함수다.
//     return a + b;
// }


// let f1: () => string;
// let f2: (a: number, b: number) => number;
// let f3: (singer: string, songs?: string[]) => void;

// // let arrow1 = (a: number, b: number): number => a + b;
// // let arrow2 = (a: number, b: number) => a + b;

// const numbers = [1, 2, 3];
// // map으로 2 4 6으로 바뀜   
// // const doubled1 = numbers.map((num: number): number => num * 2);
// const doubled2 = numbers.map(num => num * 2); // 이게 타입추론이 되니까 이렇게 써도 됨

// // const songs = ['a', 'b', 'c'] 
// // // 파라미터에도 함수타입을 쓸 수 있다.
// // function runOnSongs(getSongAt: (index: number) => string) {
// //     for (let i = 0; i < songs.length; i += 1) {
// //         console.log(getSongAt(i));
// //     }
// // }
// // function getSongAt(index: number) {
// //     return `${songs[index]}`;
// // }
// // 안됨
// // function logSong(song: string) {
// //     return `${song}`;
// // }

// // type StringToNumber = (input: string) => number; // string이라면 두번재 방법이 가능할텐데 number라서 에러가 남
// // 이후 타입 별칭을 이용하여 타입 설정
// // let stringToNumber: StringToNumber;

// // OK
// // stringToNumber = (input) => input.length;
// // 에러
// // stringToNumber = (input) => input.toUpperCase();

// // let singer: (song: string) => string; // 타입 추론 가능
// // singer = function (song) {
// //     return `Singing: ${song.toUpperCase()}!`;
// // };

// // const songs = ["Call Me", "Jolene", "The Chain"]; 
// // songs.forEach((song, index) => { // 알아서 타입 추론 써줘도 됨
// //     console.log(`${song} is at index ${index}`);
// // });

// function logSong(song: string | undefined): void {
//     if (!song) {
//         // 값을 반환하지 않고 함수 return
//         return;
//     }
//     console.log(`${song}`);

//     // return true; // 자바스크립트는 무슨일이 있어도 반환을 함 void를 하더라도 undefined를 반환함
// }

// const result = logSong("Hello") // 타입이 
// // result.toString();

// // const r: void =

//     // never는 반환값으로 쓸 수 있다.

//     function fail(message: string): never {
//         // if (message.length > 5) {
//         throw new Error(`Invariant failure: ${message}`);
//         // }
//     }

//     // function infiniteLoop1(a: number): never {
//     //     while (a > 1000) {
//     //         console.log("Looping!");
//     //     }
//     // }

//     // void로 대체해도 됨

//     // function startServer(): never {
//     //     // 서버 초기화
//     //     setupDatabase();
//     //     initializeRoutes();
        
//     //     // 서버 시작하고 영원히 실행
//     //     while (true) {
//     //         handleConnections();
//     //         processRequests();
//     //         // ... 기타 서버 작업
//     //     }
//     // }






