

function avrage() {
        num1 = parseInt (document.getElementById("firstNumber").value);
        num2 = parseInt (document.getElementById("secondNumber").value);
        num3 = parseInt (document.getElementById("thirdNumber").value);
        num4 = parseInt (document.getElementById("fourthNumber").value);
        num5 = parseInt (document.getElementById("fifthNumber").value);
        num6 = parseInt (document.getElementById("sixthNumber").value);
        num7 = parseInt (document.getElementById("seventhNumber").value);
        num8 = parseInt (document.getElementById("eighthNumber").value);
        num9 = parseInt (document.getElementById("ninethNumber").value);
        num10 = parseInt (document.getElementById("tenthNumber").value);
        ope = document.getElementById("ope").value;

        if (ope === "Avrage") {
                document.getElementById("result").innerHTML = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 10;

        }


}