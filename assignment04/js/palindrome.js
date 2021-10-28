function checkPalindrome() {

    var a= document.getElementById("elSTr").value;  
    var b = "";  
    for (i = a.length-1; i >= 0; i--)  {  
    b = b + a[i]  
    }  
    if (a == b) {
        alert("Palindrome")
    } else {
        alert(" is not a Palindrome")
    } 
    
} 