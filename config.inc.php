<?php

define('G_MAILTO_DEFAULT', 'marktomm90@gmail.com');
define('G_POST_FORM_IDENTIFIER', 'formid');

$G_mailto_forms = array(
    'form1' => 'trmailmark@gmail.com'
);

$G_forms_content = array(
    'form1' => array(
        /*'formtype',*/ 'phone'
    ),
    'form2' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form3' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form4' => array(
        /*'formtype',*/ 'name', 'phone', 'message'
    ),
    'form5' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form6' => array(
        /*'formtype',*/ 'name', 'phone', 'email'
    ),
    'form7' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form8' => array(
        /*'formtype',*/ 'name', 'phone', 'message'/*, 'file'*/
    ),
    'form9' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form10' => array(
        /*'formtype',*/ 'name', 'phone'
    ),
    'form11' => array(
        /*'formtype',*/ 'name', 'phone', 'start-date', 'start-time', 'end-date', 'end-time'/*, 'file'*/
    ),
);



function G_sanitize($str) 
{
    $invalid_characters = array("$", "%", "#", "<", ">", "|");
    return str_replace($invalid_characters, "", $str);
}
