var passLength = document.getElementById("password-length");
var upperBox = document.getElementById("uppercase");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var passBtn = document.getElementById("pass-btn");


passBtn.addEventListener("click", function() {
    var length = parseInt(passLength.value);
    var checkUpper = upperBox.checked;
    var checkNums = numBox.checked;
    var checkSymbols = symBox.checked;

    function lowerGenerate(length) {
        var lowerResult = '';
        var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        var lowerLength = lowerCase.length;
        for ( var i = 0; i < length; i++ ) {
           lowerResult += lowerCase.charAt(Math.floor(Math.random() * lowerLength));
        }
        return lowerResult;
     }

    function upperGenerate(length) {
        if (checkUpper == true) {
            var upperResult = '';
            var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var upperLength = upperCase.length;
            for ( var i = 0; i < length; i++ ) {
            upperResult += upperCase.charAt(Math.floor(Math.random() * upperLength));
            }
            return upperResult;
        }
    }

    function numGenerate(length) {
        if (checkNums == true) {
           var numResult = '';
           var numbers = '0123456789';
           var numLength = numbers.length;
           for ( var i = 0; i < length; i++ ) {
           numResult += numbers.charAt(Math.floor(Math.random() * numLength));
           }
           return numResult;
        }
    }

    function symbolGenerate(length) {
        if (checkSymbols == true) {
           var symResult = '';
           var symbols = '~`!@#$%^&*()_-+={[}]:;<,>.?/"|';
           var symLength = symbols.length;
           for ( var i = 0; i < length; i++ ) {
           symResult += symbols.charAt(Math.floor(Math.random() * symLength));
           }
           return symResult;
        }
    }

    var passCombined = (lowerGenerate(length) + upperGenerate(length) + numGenerate(length) + symbolGenerate(length));

    function passGenerate(length) {
           var passResult = '';
           var pass = passCombined;
           var passLength = pass.length;
           for ( var i = 0; i < length; i++ ) {
           passResult += pass.charAt(Math.floor(Math.random() * passLength));
           }
           return passResult;
    }

    var passwordResult = passGenerate(length);

    document.getElementById("password").innerText = passwordResult;

});