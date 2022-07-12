$(document).ready(() => {
    $('th').hover(function() {
        let indiceColumna = $(this).parent().children().index(this);

        $(this).addClass('resaltar');
        $(`table td:nth-child(${indiceColuma + 1})`).addClass('resaltar');
    });
});
//
