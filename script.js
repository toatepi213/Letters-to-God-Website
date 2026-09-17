// Toggle the "Other" panel open/closed
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Handle mood selection for both top-level buttons and "Other" sub-options
var moodButtons = document.querySelectorAll(".emoji-item[data-mood], .mood-option[data-mood]");
var selectedMoodDisplay = document.getElementById("selectedMood");

moodButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var mood = this.getAttribute("data-mood");
        if (selectedMoodDisplay) {
            selectedMoodDisplay.innerHTML = "<h3>Selected feeling:<br>" + mood + "</h3>";
        }
    });
});