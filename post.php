<?php

$file='log.txt';
// file_put_contents($file, "test\n", FILE_APPEND);

include 'config.inc.php';

$form_id = G_sanitize($_POST[G_POST_FORM_IDENTIFIER]);
// file_put_contents($file, "formid: " . $form_id . "\n" , FILE_APPEND);

$mail_recv = '';
if(array_key_exists($form_id, $G_mailto_forms)) {
    $mail_recv = $G_mailto_forms[$form_id];
} else {
    $mail_recv = G_MAILTO_DEFAULT;
}
// file_put_contents($file, "mail_recv: " . $mail_recv . "\n" , FILE_APPEND);

if(!array_key_exists($form_id, $G_forms_content)) {
    file_put_contents($file, "no form contents defined for form with id: " . $form_id . "\n" , FILE_APPEND);
    exit(1);
}

$form_vars = $G_forms_content[$form_id];
$mail_body = '';

foreach ($form_vars as $value) {
    $mail_body .= $value . ': ' . G_sanitize($_POST[$value]) . "\n";
}

$subject = G_sanitize($_POST['formtype']);
if(array_key_exists('car', $_POST)) {
    $subject .= G_sanitize($_POST['car']);
}

// file_put_contents($file, "subject: " . $subject . "\n" , FILE_APPEND);
// file_put_contents($file, "mail_body: " . $mail_body . "\n" , FILE_APPEND);
$from = 'no-reply@rental24.ee';
$headers = 'From: ' . $from; 
if(!mail($mail_recv, G_sanitize($subject), $mail_body, $headers, '-f ' . $from)) {
    file_put_contents($file, "mail send failed. mail_body: " . $mail_body . "\n" , FILE_APPEND);
}

header("Location: {$_SERVER['HTTP_REFERER']}");
exit;