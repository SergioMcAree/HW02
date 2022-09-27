for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        document.write ("*")
    }
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 10; i++) {
    for (var j = 0 + i; j < 10; j++) {
        document.write ("*")
    }
    
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 10; i++) {
    for (var j = 0 - i; j < 1; j++) {
        document.write ("*")
    }
    
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 10; i++) {
    for (var j = 0 + i + 1; j < 10; j++) {
        document.write ("&nbsp;")
    }
    for (var k = 0 - i; k < 1; k++) {
        document.write ("*")
    }
     
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 10; i++) {
    for (var j = 0 + i + 1; j < 10; j++) {
        document.write ("&nbsp;")
    }
    for (var k = 0 - i; k < 1; k++) {
        document.write ("*")
    }
    document.write ("<br>")
}
for (var i = 0; i < 10; i++) {
    for (var j = 0 - i; j < 1; j++) {
        document.write ("&nbsp;")
    }
    for (var k = 0 + i + 1; k < 10; k++) {
        document.write ("*")
    }
    document.write ("<br>")
}