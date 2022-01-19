//bài 1:
//Bước 1: cho người dùng nhập 3 số tự nhiên bất kì
//bước 2: index = 0 bắt đầu từ đầu dãy. nếu number 1 < number 2 thì giữ nguyên còn nếu number 1 > number 2 thì hoán vị. rồi lặp lại so sánh với index +1
//bước 3: xuất dẫy số ra màn hình
let array = [];
let number1 = prompt('input number 1');
array.push(number1);
let number2 = prompt('input number 2');
array.push(number2);
let number3 = prompt('input number 3');
array.push(number3);
for (let index = 0; index < array.length; index++) {
    for (let indexFake = index + 1; indexFake < array.length; indexFake++) {
        if (array[index] > array[indexFake]) {
            let memory = array[index];
            array[index] = array[indexFake];
            array[indexFake] = memory;
        }
    }
}
alert(array); 

