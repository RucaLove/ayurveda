(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('newsletter', {
      templateUrl: '/templates/newsletter.template.html', // NEWSLETTER TEMPLATE
      controller: NewsletterController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  NewsletterController.$inject = ['$state', 'NewsletterService', '$stateParams']

  function NewsletterController($state, NewsletterService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://us16.api.mailchimp.com/3.0/",
      "method": "GET",
      "headers": {
        "authorization": "apikey: 4491973242abdc8a388679df25e5e53e-us16",
        "cache-control": "no-cache"
      },
      "data": "{\n\t\"id\": \"MC002\",\n\t\"list_id\": \"205d96e6b4\",\n\t\"name\": \"Freddie's T-Shirt Sales\",\n\t\"domain\": \"freddiesjokes.com\",\n\t\"email_address\": \"shirts@freddiesjokes.com\",\n\t\"currency_code\": \"USD\",\n\t\"primary-locale\": \"us\",\n\t\"timezone\": \"Eastern\",\n\t\"address\": {\n\t\t\"address1\": \"675 Ponce de Leon Ave NE\",\n\t\t\"address2\": \"Suite 5000\",\n\t\t\"city\": \"Atlanta, GA 30308\"\n\t}\n}"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

// MAIL CHIMP API
    // let mailChimp = function mailChimp(data) {
    // }
    //
    // $("#signUpForm").click(function(event) {
    //   event.preventDefault();
    //   if ($(event.target).hasClass("newsletter")) {
    //     event.preventDefault();
    //     let currentLinkElement = event.target;
    //     // let searchText = $('.myBar').val();
    //     // $(".myBar").val("");
    //     //take out spaces in search criteria (replace space with empty string)
    //     let data = 'JSON Request Data';
    //     let request = $.ajax({
    //       url: `https://us16.api.mailchimp.com/3.0/lists`,
    //       method: "GET",
    //       dataType: 'json',
    //       data: JSON.stringify(data),
    //       success(innerData) {
    //         mailChimp(innerData);
    //         console.log(innerData);
    //         let getMail = [];
    //         let mailInfo = {};
    //         console.log("getMail", getMail);
    //         console.log("mailInfo", mailInfo);
    //         for (let i = 0; i < innerData.length; i++) {
    //           if (innerData[i] === undefined) {
    //           }
    //           else {
    //             getMail.push(innerData[i]);
    //           }
    //         }
    //       },
    //       error() {
    //         console.log("error")
    //       }
    //
    //     })
    //
    //     return (request.then(function(resp) {
    //       return resp;
    //     }, function(err) {
    //       return err;
    //     }));
    //   }
    // })

  } // END Newsletter Controller
}());
