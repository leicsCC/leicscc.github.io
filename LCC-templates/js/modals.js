$('.show-modal').click(function ( event ) {
    event.preventDefault();
    origFocus = (this);
    $('#'+$(this).data('modal')).css('display', 'block').attr('aria-hidden', 'false').trap(); // Requires jquery.trap.js
    // puts focus on the focus trap
    $('.focus-trap').attr('tabindex', '0');
    $('.focus-trap').focus();
    // removes the focus trap from the tabbing sequence
    $('.focus-trap').focusout(function (e) {
        $(this).attr('tabindex', '-1');
    });
    $('.container').attr('aria-hidden', 'true');
    $('.panel-modal-background').css('display', 'block');
    $('.panel-modal').keyup(function(e){
        if (e.keyCode == 27) { // Esc
            $('.hide-modal').trigger('click');
        }
    });
});
$('.hide-modal').click(function ( event ) {
    event.preventDefault();
    $('.panel-modal').css('display', 'none').attr('aria-hidden', 'true');
    $('.container').attr('aria-hidden', 'false');
    $('.panel-modal-background').css('display', 'none');
    origFocus.focus();
});