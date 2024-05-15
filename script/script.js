$(function () {

    const date = new Date();

    if (date.getMonth() === 11) {
        if ( 1 <= date.getDate() && date.getDate() <= 25) {
            $("#logo").attr("src", "img/logoNoel.png")
        }
    }
});