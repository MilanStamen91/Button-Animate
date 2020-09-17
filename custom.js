jQuery(function() {  
    jQuery('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = jQuery(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              jQuery(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = jQuery(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          jQuery(this).find('span').css({top:relY, left:relX})
      });
    jQuery('[href=#]').click(function(){return false});
  });