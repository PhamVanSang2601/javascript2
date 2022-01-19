//bài 4
//Bước 1: cho người dùng nhập 3 cạnh tam giác
//bước 2: xét 4 trường hợp.
//bước 3: nếu đáp ứng đủ điều kiện của trường hợp nào thì xuất kết quả của trường hợp đó ra màn hình
let array = [];
let a = prompt('input side a');
array.push(a);
let b = prompt('input side b');
array.push(b);
let c = prompt('input side c');
array.push(c);
if(a == b && a !== c ){
    alert("tam giác cân");
}
else if( a == b && a == c){
    alert("tam giác đều");
}
else if(c*c == a*a + b*b){
    alert("tam giác vuông");
}
else{
    alert("tam giác");
}