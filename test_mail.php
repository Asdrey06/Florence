<?php
$sent = mail("nandrinoflorence@gmail.com", "Test depuis IONOS", "Ceci est un message test depuis votre hébergement.");

if ($sent) {
  echo "✅ Le mail a été envoyé avec succès.";
} else {
  echo "❌ L’envoi a échoué (fonction mail peut être désactivée).";
}
?>