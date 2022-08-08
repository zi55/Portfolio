<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMaailer.php';

$mail new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'PHPMailer/language');
$mail->isHTML(true);

$mail->setForm($_POST['email'])
$mail->addAddress('zaytzevilya05@gmail.com');
$mail->Subject = 'hello';

$body = '<h1>This is a letter from my Site!</h1>';

if (trim(!empty($_POST['name']))){
   $body.='<p><strong>Name</strong> '.$_POST['name'].'</p>'; 
}
if (trim(!empty($_POST['email']))){
   $body.='<p><strong>Email</strong> '.$_POST['email'].'</p>'; 
}
if (trim(!empty($_POST['message']))){
   $body.='<p><strong>Message</strong> '.$_POST['message'].'</p>'; 
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