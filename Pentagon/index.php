<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) && isset($_POST['email'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $body=$_POST['body'];
    $subject=$_POST['subject'];
    $organisation=$_POST['organisation'];

    require_once "Libraries/PHPMailer.php";
    require_once "Libraries/SMTP.php";
    require_once "Libraries/Exception.php";

	$mail = new PHPMailer();
	$mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'akashvarude11@gmail.com';                     // SMTP username
    $mail->Password   = 'Sonyxperia3205';                               // SMTP password
    $mail->SMTPSecure = 'TLS';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;

	$mail->isHTML(true);
	$mail->setFrom('akashvarude11@gmail.com', $name);
    $mail->addAddress('asvarude@mitaoe.ac.in');     // Add a recipient
	$mail->Subject = 'Contact us form submission: '.$subject;
    $mail->addReplyTo('akashvarude11@gmail.com');
	$mail->Body    = '<h3 align=left> Name: '. $name.'<br> Email: '.$email.'<br> Phone :'.$phone.'<br> Organisation: '.$organisation.'<br> Message :'.$body.'</h3>';
	if($mail->send())
		$response="Email is sent!";
	else
		$response= "Something went wrong :<br><br>".$mail->ErrorInfo;
	//exit(json_encode(array("response" =>$response)));
}
?>
