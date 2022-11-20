function appTxt() {
    var t1 = "<p>Using HTML to generate text</p>";
    var t2 = $("<p></p>").text("Using jQuery to generate text.");
    var t3 = document.createElement("p");
    t3.innerHTML = "Some Content.";
    $("body").append(t1, t2, t3);
}
function appTxt1() {
    var t1 = "<p>Using HTML to generate a paragraph with <strong>a strong element in it</strong></p>";
    var t2 = $("<h3></h3>").text("Using jQuery to generate a heading3.");
    var t3 = document.createElement("article");
    t3.innerHTML = "Some Article Content.";
    $("body").prepend(t1, t2, t3);
}