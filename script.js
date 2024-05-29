current_step = 1;
max_step = 5;

$(document).on('submit', '.registration-form', function(e)
{
  if (current_step < max_step)
  {
    e.preventDefault();
    e.stopPropagation();

    if (!$(this)[0].checkValidity())
    {
      $(this).addClass('was-validated');
    }
    else
    {
      $(this).removeClass('was-validated');
      $('.progress-bar span').animate({'width' : ((current_step+1)*100/max_step)+'%'});

      $('section[data-step="'+current_step+'"]').fadeOut('fast', function() {
        current_step++;
        $('section[data-step="'+current_step+'"]').fadeIn('fast');

        if (current_step === max_step)
        {
          $('.continue').text('Trimite');
        }
      });
    }
  }

});
