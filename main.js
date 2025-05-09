function changeResult(str) {
    document.getElementById("result").innerHTML = str;
}

function addToResult(str) {
    if (document.getElementById("result").innerHTML == "0" && str !== "/") {
        document.getElementById("result").innerHTML = "";
    }
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + str;
}

// Detect keys and react
this.addEventListener(
    'keydown',
    (event) => {
        switch(event.key) {
            case "1": addToResult(1); break;
            case "2": addToResult(2); break;
            case "3": addToResult(3); break;
            case "4": addToResult(4); break;
            case "5": addToResult(5); break;
            case "6": addToResult(6); break;
            case "7": addToResult(7); break;
            case "8": addToResult(8); break;
            case "9": addToResult(9); break;
            case "0": addToResult(0); break;
            case "+": addToResult('+');break;
            case "-": addToResult('-');break;
            case "*": addToResult('*');break;
            case "/": addToResult('/');break;
            case "(": addToResult('(');break;
            case ")": addToResult(')');break;
            case ".": addToResult('.');break;
            case "Enter": calculate();break;
            case "a":
            case "c": changeResult(0);break;
            case "Backspace": backspace();break;
            case "p": addToResult("3.14159");break;
            case "^": addToResult("^");break;
        }
    }
)

function calculate(inp = document.getElementById("result").innerHTML) {
    if (inp != "0/0") {
        var calc = new MathCalc();
        var expr = calc.parse(inp);
        if (expr.error) {
        alert("Some error:" + ' : ' + expr.error.text);
        }
        else {
        var res = expr.eval();
        changeResult(res);
        }
    } else {
        document.getElementById("overlay").hidden = false
    }

}

function backspace (inp = document.getElementById("result").innerHTML)  {
    if (inp.length > 1) {
        let arr = inp.split('');
        arr.pop();
        changeResult(arr.join(''));
    } else { changeResult(0) }
}

