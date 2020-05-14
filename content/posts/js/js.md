---
title: "Javascript 정리"
path: "/js"
tags: ["js"]
featuredImage: "./computer.jpg"
excerpt: js 개념 정리 
created: 2020-05-14
updated: 2020-05-14
---

## JavaScript ES6

JavaScript에 대한 지식을 정리합니다.

<hr/>

### let const

var를 대체하는 선언변수      
let은 가변     
const는 불변      
대신  key: value값이라면 value값은 변경 가능
const는 주소값을 묶어버린다.


<hr/>

### Default Rest Spread

ES6에서의 함수 3가지가 추가되었다. 

#### Default

let func = function(msg) {        
}       
에서 msg에 default 값을 넣고 싶으면     

const func = (msg = '디폴트값') =>{     
}       
이렇게 넣어 주면 된다.


#### Rest     

....y 로 사용한다.

Array.prototype/slice/call(arguments, 1);

이것과 같다고 보면 된다.


#### Spread     

funtion(x, y, z){
}
에서     
function(array)로 넣으면 알아서 다 들어간다.

<hr/>

### 문자열 

 사이에 있는 값들은 전부 문자열이 합쳐져서 들어간다.      
 마크 다운에서는 검은색 박스로 보여지는 기호이다.



 
