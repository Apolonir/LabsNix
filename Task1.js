function Reverse(str){
    var a = "";
for(var i = str.length - 1; i >= 0; i--){
    a += str[i];
}
console.log(a);
return a;
}
Reverse("abc");

function ucFirst(str){
    str = str[0].toUpperCase() + str.substring(1);
    console.log(str);
    return str;
    }
    
    ucFirst("andrey");
    
    function ucWords(str){
        str = str.split(' ');
        let res = '';
        for (let i = 0; i < str.length; i++) {
            res += (ucFirst(str[i])) + " ";
        }
        return res;
    }

    console.log(ucWords("andre max vlad"));


    function isEmail(mail){
        let pattern  = /^([a-z]{1,1})([a-z0-9_\.-]{2,})+@([a-z]{3,})?\.([a-z]{2,})/;
              return pattern.test(mail.toLowerCase());
    }

    console.log(isEmail("trall1212@gmail.com"));
    console.log(isEmail("t@gmail.com"));

    function isUrl(url){
        let pattern = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
            return pattern.test(url.toLowerCase());
    }

    console.log(isUrl("http://html.net"));
    console.log(isUrl("html"));
    console.log(isUrl("html.net"));

    function isDate(date){
        let pattern = /([0-9]{2})([.]{1})([0-9]{2})([.]{1})([0-9]{4})|([0-9]{2})([-]{1})([0-9]{2})([-]{1})([0-9]{4})|([0-9]{2})([/]{1})([0-9]{2})([/]{1})([0-9]{4})/;
            return pattern.test(date.toLowerCase());
    }

    console.log(isDate('12.05.2020'));
    console.log(isDate('12-05-2020'));
    console.log(isDate('12/05/2020'));
    console.log(isDate('12.05/2020'));

    function isPhoneNumber(phoneNumber){
        let pattern = /^\+([380]{3})([0-9]{9})/;
            return pattern.test(phoneNumber.toLowerCase());
    }

    console.log(isPhoneNumber("+380972455308"));
    console.log(isPhoneNumber("0000972455308"));