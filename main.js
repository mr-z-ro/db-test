$('.company-tabs').on('click', 'label', function(){  
    var category_id = $(this).attr('label-category');
    window.location.hash = category_id;
    $('body').find('.companies-boxes section .inside').parent().hide();
    $(this).parent().find('.active-tab-label').removeClass('active-tab-label');
    $(this).addClass('active-tab-label');
    if(category_id === 'all')
    {
        $('body').find('.companies-boxes section .inside').parent().show();
    }
    else
    {
        $('body').find('.companies-boxes section .inside[data-category="'+category_id+'"]').parent().show();
    }
});