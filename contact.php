<?php
    
    // configure
    $from = 'contact form <stickerauto98@gmail.com>';
    $sendTo = 'contact form <stickerauto98@gmail.com>';
    $subject = 'Новое сообщение с сайта.';
    $fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
    $okMessage = 'Сообщение отправлено.';
    $errorMessage = 'Ошибка при отправке сообщения. Попробуйте позже.';
    
    // let's do the sending
    
    try
    {
        //$emailText = "You have new message from contact form";
        
        foreach ($_POST as $key => $value) {
            
            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }
        
        $headers = array('Content-Type: text/plain; charset="UTF-8";',
                         'From: ' . $from,
                         'Reply-To: ' . $from,
                         'Return-Path: ' . $from,
                         );
        
        mail($sendTo, $subject, $emailText, implode("\n", $headers));
        
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
    catch (\Exception $e)
    {
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }
    
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);
        
        header('Content-Type: application/json');
        
        echo $encoded;
    }
    else {
        echo $responseArray['message'];
    }
