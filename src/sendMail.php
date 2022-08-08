<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'PHPMailer/language');
$mail->isHTML(true);

$mail->setForm($_POST['user-email'])
$mail->addAddress('zaytzevilya05@gmail.com');
$mail->Subject = 'hello';

$body = '<h1>This is a letter from my Site!</h1>';

if (trim(!empty($_POST['user-name']))){
   $body.='<p><strong>Name</strong> '.$_POST['user-name'].'</p>'; 
}
if (trim(!empty($_POST['user-email']))){
   $body.='<p><strong>Email</strong> '.$_POST['user-email'].'</p>'; 
}
if (trim(!empty($_POST['user-message']))){
   $body.='<p><strong>Message</strong> '.$_POST['user-message'].'</p>'; 
}

$mail->Body = $body;

if(!$mail->send()){
    $message='ошибка';
} else{
    $message='Данные отправлены'
}
$response = ['message'=> $message];
header('Content-Type: application/json');
echo json_encode($response);
?>