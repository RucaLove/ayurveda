<?php
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  echo $name;
  $to = "haley.kalb@gmail.com";
  $subject = "From Professional Website";
  $emailcontent = "From: $firstname \n\n $lastname";
  $mailheader = "From: $email";

  mail($to, $subject, $emailcontent, $mailheader) or header('Location: https://rucalove-hibiskiss.herokuapp.com/');
  header('Location: https://rucalove-hibiskiss.herokuapp.com/');
?>
