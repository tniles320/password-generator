// declared variables for form, checkboxes, and button
var passLength = document.getElementById('password-length');
var upperBox = document.getElementById('uppercase');
var numBox = document.getElementById('numbers');
var symBox = document.getElementById('symbols');
var passBtn = document.getElementById('pass-btn');

// determines what happens when generate password button is clicked
passBtn.addEventListener('click', function() {
    // variables to determine number length input and if checkboxes are checked
    var length = parseInt(passLength.value);
    var checkUpper = upperBox.checked;
    var checkNums = numBox.checked;
    var checkSymbols = symBox.checked;

    // sets number range for password length input
    if(length >= 8 && length <= 128) {

        // generates random string of lowercase letters based on password length input
        function lowerGenerate(length) {
            //sets variable to empty string
            var lowerResult = '';
            // declares variable to string of lowercase letters
            var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
            // declares variable equal to lowercase string length
            var lowerLength = lowerCase.length;
            // loop that generates random character from string based of off user input password length
            for ( var i = 0; i < length; i++ ) {

            // this comment is mostly for me to understand exactly what action this line is performing
            // empty string = empty string + lowercase string.choose character at index of(random number between 0 and 1 * length of string) 
            lowerResult += lowerCase.charAt(Math.floor(Math.random() * lowerLength));
            }
            // return generated result
            return lowerResult;
        }

        // generates random string of uppercase letters based on password length input and if checkbox is checked
        function upperGenerate(length) {
            // if upper checkbox is checked
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

        // generates random string of numbers based on password length input and if checkbox is checked
        function numGenerate(length) {
            if (checkNums == true) {
            var numResult = '';
            var numbers = '01234567890123456789';
            var numLength = numbers.length;
            for ( var i = 0; i < length; i++ ) {
            numResult += numbers.charAt(Math.floor(Math.random() * numLength));
            }
            return numResult;
            }
        }

        // generates random string of symbols based on password length input and if checkbox is checked
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

        // combines generated strings into one string
        var passCombined = (lowerGenerate(length) + upperGenerate(length) + numGenerate(length) + symbolGenerate(length));

        // generates random string of combined strings based on password length input
        function passGenerate(length) {
            var passResult = '';
            var pass = passCombined;
            var passLength = pass.length;
            for ( var i = 0; i < length; i++ ) {
            passResult += pass.charAt(Math.floor(Math.random() * passLength));
            }
            return passResult;
        }

        // declared variable for generated password function
        var passwordResult = passGenerate(length);

        // displays generated password in html element
        document.getElementById('password').innerText = passwordResult;

        // alerts if no number, number out of range, or character other than number is input
    } else {
        alert('Please enter a valid number');
    }

});

// pressing enter key in password length form calls passBtn click function and prevents enter from reloading page
passLength.addEventListener('keyup', function(event) {
    // if enter key is pressed
    if (event.keyCode === 13) {
        // prevents enter from reloading page
        event.preventDefault();
        // calls passBtn click function
        passBtn.click();
        }
});
