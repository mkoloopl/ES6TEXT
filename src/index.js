////let 局部变量 var全局变量 const常量
// let a = 16;
// console.log(a);



// //字符串解构
// const[a,b,c,d,e,f,g,h]='mudamuda';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

//拓展运算符   ...   运用  不破坏原数据源
let arr1=['ss','sss','kkk'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('lop');
console.log(arr2);
console.log(arr1);

// //rest...  运算符
// function taiji(first,...a){
//     for(let val of a){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7,5);


//字符串拼接
let a='zxc';
let strin=`<b>欧拉欧拉</b>${a}<b>木大木大</b>`;
document.write(strin);


//字符串查找



//输出数组索引和内容
let arr=['muda','欧拉','xx公司'];
for(let [index,val] of arr.entries()){
    console.log(index+':'+val);
} 

//d对象赋值
let name ='lk';
let skill="szc";
var obj ={name,skill};
console.log(obj)


var pro = new Proxy({
    add:function(val){
        return val+100
    },
    name:' xxxx',
}, {
    // get
    get: function (target, key, property) {
        console.log('come in Get');
        return target[key];
    },
// });
// console.log(pro.name);
//    set
    set: function (target, key, value, recriver) {
        console.log(` setting ${key} = ${value}`);
        return target[key] = value + '222';
    }
//
});
console.log(pro.add(3));
console.log(pro.name);
pro.name = '木大'
console.log(pro.name); 


//复制字符串
// document.write('*'.repeat(3));

//6.数字操作
// 二进制 Binary
// let binary = 0B010101;
// console.log(binary);
// // 八进制
// const octal = 0o666;
// console.log(octal);

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('oula'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5 判读NaN
// // console.log("******************************")
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log("#############################")
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));
// console.log(333333)
// console.log(parseInt("abc1111"));
// console.log(Number.isNaN(parseInt("abc1111")));
//Number.isInteger 判断是否为整数
// let a= 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// 整数取值范围操作
// let oula = Math.pow(2,53)-1;
// console.log(oula);
// 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// // // 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(9007199254740991333)
// 安全整数判断isSafeInteger( )
// console.log(Number.isSafeInteger(oula));

// let json ={
//     '0':'oula',
//     '1':'欧拉',
//     '2':'xx员工',
//     length:3
//    // length必须写
// }
// console.log(json);
// //把json数组转换成array  Array.from方法
// let arr = Array.from(json);
// console.log(arr);

// // Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

//find() 实例方法
// let arr=[1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     return value >4;
//     // return index > 4;
// });
// console.log(v)

//findIndex()方法
// let arr1=[1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value >4);
// console.log(i);

//filter()方法 不同之处在于filter返回的是数组
// let arr2=[1,2,3,4,5,6,7,8];
// var a = arr2.filter((value) => value >4);
// console.log(a)

// 数组去重
// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// //数组循环
// //数组循环
// let arr2=[1,2,3,4];
// for (let item of arr){
//    console.log(item);
// }

// for…of数组索引
// //数组循环
// let arr2=[1,2,3,4];
// for (let index of arr.keys()){
//    console.log(index);
// }

// 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环
// let arr2=[1,2,3,4];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries方法 切分数组
// let arr2=[1,2,3,4];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// 默认值  es6箭头函数
// var add=(a,b=2) => a+b;
// console.log(add(1));
//
// var add=(a,b=1)=>{
//     console.log('taiji')
//     return a+b;
// }
// console.log(add(1))

//对象的函数解构 json
// let a = undefined;
// function fun (a=4){
//     console.log(a);
// }
// fun(a);

// 对象的函数结构
// let json = {
//     a:'oula',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

// 数组判断

// let arr=[,,,];
// console.log(arr.length); //3
// console.log(arr[0])
// console.log(0 in arr);  // false
// // 注意：这里的0指的是数组下标位置是否为空。
// let arr1=['oula','欧拉'];
// console.log(0 in arr1);  // true
// console.log(0 in arr);
// 数组遍历 forEach
// let arr = ['oula','欧拉','xx'];
// arr.forEach((val,index)=>console.log(index,val));
// 数组遍历 filter
// let arr = ['oula','欧拉','xx'];
// arr.filter(x => console.log(x));
// // 数组遍历 some
// let arr = ['oula','欧拉','xx'];
// arr.some(x => console.log(x));
// // 数组遍历 map替换
// let arr = ['oula','欧拉','xx'];
// console.log(arr.map(x=>'web'));
// 数组转换成字符串
// let arr = ['oula','欧拉','xx'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// 对象
// 对象赋值
// let name = 'oula';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);

// // key值的构建
// let key = "skill"
// var obj ={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2))

// Object.is( ) 对象比较
// is()
// let obj1={name:'oula'};
// let obj2={name:'oula'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// ===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign
// let a={a:'oula'};
// let b={b:'欧拉'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

// Symbol的打印
// let oula = Symbol('欧拉');
// console.log(oula);
// console.log(oula.toString());


// Symbol在对象中的应用
// let oula = Symbol();
// let obj = {
//     [oula]:'欧拉'
// }
// console.log(obj[oula]);
// obj[oula]='xx员工'
// console.log(obj[oula]);

//Symbol对象元素的保护作用
// let obj = {name:'oula',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }
// let obj ={name:'oula',skill:'web'};
// // let age = Symbol();
// // obj[age]=18;
// // console.log(obj);
// // for(let item in obj){
// //     console.log(obj[item]);
// // }
// // console.log(obj[age]);


// set的声明
//let setArr = new Set(['oula','木大','web','木大',]);
// setArr.add('前端技术');
// console.log(setArr);

//eg
// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// for (let i of s) {
//     console.log(i);
// }
// // // // has查找set中的值
// console.log(setArr.has('oula'));

// Set值的增删改
// setArr.clear(); //删除全部
// // // 删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value)=>console.log(value));
// size属性  size属性可以获得Set值的数量。
// console.log(setArr.size);
//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'oula',b:'木大'};
// // let obj1 = obj;
// let obj1={a:'oula',b:'木大'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
// json


let state = 1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭完成')
    }else{
        reject('洗菜做饭-错误')
    }
}
// // // //
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭')
    }else{
        reject('坐下来吃饭-错误')
    }
}
// //
function step3(resolve,reject){
    // state = 0;
    console.log('3.开始-收拾桌子');
    if(state==1){
        resolve('收拾桌子')
    }else{
        reject('收拾桌子-错误')
    }
}
// // //
new Promise(step1).then(function(val){
        console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
});
