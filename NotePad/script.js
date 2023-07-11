function resetNote() {
    var confirmation = confirm("Are you sure you want to reset the note? This action cannot be undone.");
    
    if (confirmation) {
        var textarea = document.getElementById("notepad");
        textarea.value = "";
    }
}

function saveNote() {
    var textarea = document.getElementById("notepad");
    var note = textarea.value;
    
    
    alert("Saved Successfully!!!");
}