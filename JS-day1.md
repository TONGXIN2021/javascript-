# Day 1
## 数据类型和变量
### 
1. JavaScript 中的数据类型有哪些？
* 一共有8种  
Number
String
Boolean
Null
Undefined
Symbol
Object
BigInt

2. 说说 undefined，null，NAN之间的区别。
* 当用严格比较时，undefined===null // 结果为false 因为他们的类型不同
* 用不严格比较时，undefined==null //结果为true
* 当用数学或者其他方法比较时，null会被转化成0，而undefined会被转化成NaN

3. 请问console.log( "Hello World" % 4)会输出什么内容？
* 会输出NaN

4. 什么情况下 JavaScript 会发生隐式转换？请解释是如何转换
* if中的条件会被自动转为Boolean类型  
* 参与+运算都会被隐式的转为字符串 
* 参与*运算都会被隐式的转为数字 
* == 运算符 
* [详细说明](https://www.jb51.net/article/122519.htm)

5. 下面代码将在控制台中输出什么内容?
    ```
    console.log('Hello Word + 1 + 2')
    ```  
    Hello Word + 1 + 2

6. 那这段代码将又将在控制台中输出什么内容?
    ```
     console.log('Hello Word '+ 1 + 2)
     ```
    Hello Word12

7. var、let、const有什么区别?
- var可以支持变量提升而let不支持
- var可以多次声明同一个名称的变量，而let不可以。建议多采用let
- let声明的范围是块作用域。 var声明的范围是函数作用域。
- const用于声明一个常量（不变量) . 变量名通常全大写

8. 请解释变量提升现象？以及如何避免
- 变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用。
始终在作用域的顶部声明变量

9. name和NAME是同一个变量吗？
- 不是。
