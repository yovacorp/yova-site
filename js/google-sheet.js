// Variable to hold request
var request;
function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}
// Bind to the submit event of our form
$(".contactForm").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    if($inputs){
        console.log($inputs.find('subscription_email'));
    }
    // Serialize the data in the form
    var serializedData = $form.serialize();


    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbww17Xt-dEzPKLnYnhi3QQ0FXytXDK0Jf1huPKfTeVVvOZPI31j/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (json, textStatus, jqXHR){
        
        
        $('.contact-form').fadeOut('3000', "linear", function() {
            $('.contact-form-success').slideToggle();

        });
            
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

  $("#mc-form").validate({
            rules: {
              
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "This is a required field"
                }
            },
            submitHandler: function(form) {
                $.ajax({
                    url: "https://formspree.io/warsameb0@gmail.com",
                    method: "POST",
                    data: {
                        email_request: $(form).find("input[name='subscription_email']").val()
                    },
                    dataType: "json",
                    success: function() {
                        $(function() {
//                            location.href = "//site.io/thanks.html";
                            $('.success-msg').fadeIn('slow', function() {
                                $(this).delay(3000).fadeOut('slow');
                                setTimeout(function(){ 
                                    $( ".form-close3" ).trigger( "click" )
                                }, 3000);
                            });
                            $("#mc-form")[0].reset();
                        });
                    },
                    error: function() {
                        $(function() {
                            $('.error-msg').fadeIn('slow', function() {
                                $(this).delay(3000).fadeOut('slow');
                            });
                            $("#mc-form")[0].reset();
                        });
                    }
                });
            }
        });