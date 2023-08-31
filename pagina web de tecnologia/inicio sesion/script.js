$(document).ready(function() {
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function(e) {
        var $this = $(this);
        var label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {
            if ($this.val() === "") {
                label.removeClass("highlight");
            } else {
                label.addClass("highlight");
            }
        }
    });

    $(".tab a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        var targetTab = $(this).attr("href");
        $(".contenido-tab > div").not(targetTab).slideUp();
        $(targetTab).slideDown();
    });
});
