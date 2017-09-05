(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('quiz', {
      templateUrl: '/templates/determine-your-vikriti.template.html', // POSES TEMPLATE
      controller: QuizController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  QuizController.$inject = ['$state', 'QuizService', '$stateParams']

  function QuizController($state, QuizService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
      $('.modal').modal()
      $('.collapsible').collapsible()
    }

    function updateVataSum() {
      var totalVata = 0;
      $(".vata:checked").each(function(i, n) { totalVata += parseInt($(n).val()); })
      $("#totalVata").val(totalVata);
    }
    function updatePittaSum() {
      var totalPitta = 0;
      $(".pitta:checked").each(function(i, n) { totalPitta += parseInt($(n).val()); })
      $("#totalPitta").val(totalPitta);
    }
    function updateKaphaSum() {
      var totalKapha = 0;
      $(".kapha:checked").each(function(i, n) { totalKapha += parseInt($(n).val()); })
      $("#totalKapha").val(totalKapha);
    }
    // run the update on every checkbox change and on startup
    $("input.vata").change(updateVataSum);
    updateVataSum();
    $("input.pitta").change(updatePittaSum);
    updatePittaSum();
    $("input.kapha").change(updateKaphaSum);
    updateKaphaSum();

  } // END Quiz Controller
}());
