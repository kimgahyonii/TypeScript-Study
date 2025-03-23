// // 타입 별칭을 이용하여 객체 타입을 정의
// type Poet = {
//     born: number;
//     name: string;
// };
var calc = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};
var result1 = calc.add(1, 2);
var result2 = calc.subtract(5, 3);
