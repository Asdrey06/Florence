<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $telephone = $_POST["telephone"];
  $message = $_POST["message"];

  $to = "nandrinoflorence@gmail.com"; // L'adresse où tu reçois les messages
  $subject = "Nouveau message depuis le site web";
  $body = "Nom : $nom\nEmail : $email\nTéléphone : $telephone\n\nMessage :\n$message";

  // ⚠️ Utiliser une adresse @tondomaine.fr comme From (ou une adresse technique existante)
  $headers = "From: info@florencenandrino.fr\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message envoyé avec succès.";
  } else {
    echo "Erreur lors de l'envoi.";
  }
}
?>
