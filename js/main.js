length=parseInt(prompt("length"))
for(i=1;i<=length;i++){
    a=65
    for(j=1;j<=i;j++){
        document.write(String.fromCharCode(a)+" ")
        a++
    }
    document.write("<br>")
}