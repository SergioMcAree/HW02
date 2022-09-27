for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
        document.write ("&#9728;")
    }
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 20; i++) {
    for (var j = (0 + i + 1); j < 20; j++) {
        document.write ("&nbsp;")
    }
    for (var k = (1 + i); k > 0; k--) {
        document.write ("&#9728;")
    }
    
    document.write ("<br>")
}

document.write ("<br>")

for (var i = 0; i < 20; i++) {
    for (var k = (1 + i); k > 0; k--) {
        document.write ("&#9728;")
    }
    for (var j = (0 + i + 1); j < 20; j++) {
        document.write ("&nbsp;")
    }
    
    
    document.write ("<br>")
}
