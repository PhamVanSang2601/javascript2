//bài 3
//Bước 1: cho người dùng nhập 3 số tự nhiên bất kì
//bước 2: xét mỗi item nếu % 2 == 0 thì countZero +1 và ngược lại countOdd +1
//bước 3: xuất ra màn hình kết quả
let array = [];
let countOdd = 0;
let countZero = 0;
let number1 = prompt('input number 1');
array.push(number1);
let number2 = prompt('input number 2');
array.push(number2);
let number3 = prompt('input number 3');
array.push(number3);
console.log(array);
array.forEach((item) => {
    if (item % 2 == 0) {
        countZero += 1;
    } else {
        countOdd += 1;
    }
})
alert('tong so chang la ' + countZero + ' tong so le la ' + countOdd);