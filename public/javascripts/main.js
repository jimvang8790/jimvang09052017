$(function() {
    var source   = $("#email-template").html();
    var template = Handlebars.compile(source);
    var guest, company, roomNumber, timezone;

    $('#companies').on('change', function (event) {
      var part = $(this).val().split(',');
      company = part[0];
      timezone = part[1];

      renderMessage();
    });

    $('#guests').on('change', function (event) {
      var part = $(this).val().split(',');
      guest = part[0];
      roomNumber = part[1];

      renderMessage();
    });

    $('button').on('click', function () {
      if (!company) {
        return alert('Please select a company');
      }

      if (!guest) {
        return alert('Please select a guest');
      }

      if (!$('#message').val()) {
        return alert('Message cannot be empty');
      }

      alert('text message sent');
    });

    function renderMessage() {
      if (!guest || !company) {
        // don't render message if guest and company is not selected
        return;
      }

      var context = {
        greeting: getGreetingTime(moment().tz(timezone)),
        guest: guest,
        company: company,
        roomNumber: roomNumber
      };

      var message    = template(context);

      $('#message').val(message);
    }

    function getGreetingTime (m) {
    	var greeting = null;

    	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

    	var split_afternoon = 12; //24hr time to split the afternoon
    	var split_evening = 17; //24hr time to split the evening
    	var currentHour = parseFloat(m.format("HH"));

    	if(currentHour >= split_afternoon && currentHour <= split_evening) {
    		greeting = "afternoon";
    	} else if(currentHour >= split_evening) {
    		greeting = "evening";
    	} else {
    		greeting = "morning";
    	}

    	return greeting;
    }
});
