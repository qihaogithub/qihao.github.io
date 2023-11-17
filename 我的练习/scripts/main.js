// 定义变量“我的标题”，并且使用document.querySelector方法来选择HTML页面中的第一个<h1>元素
let 我的标题 = document.querySelector("H1");
我的标题.textContent = "这是一个笔记";
/*
alert 是 JavaScript 中的一个内置函数，用于在浏览器中显示一个弹出窗口，其中包含指定的消息或表达式的结果。在这个例子中，alert("hello!"); 会在浏览器中弹出一个窗口，显示文本 "hello!"。
*/


/*
弹窗输入连个数字，求乘积
*/
  function calculateProduct() {
    let num1 = parseFloat(prompt("请输入第一个数字："));
    let num2 = parseFloat(prompt("请输入第二个数字："));
    let product = num1 * num2;
    alert("两个数字的乘积为：" + product);
}

/*点击按钮后，弹窗显示"别戳我，我怕疼。"*/
  function dianjixianshitanchuang() {
    alert("别戳我，我怕疼。");
}




