function appTxt() {
    var t1 = "<p>Using HTML to generate text</p>";
    var t2 = $("<p></p>").text("Using jQuery to generate text.");
    var t3 = document.createElement("p");
    t3.innerHTML = "Some Content.";
    $("body").append(t1, t2, t3);
}