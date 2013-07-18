<?php
	include 'map.php';
	$script = file_get_contents('script.js');

	$script = str_replace(array_values($map),array_keys($map),$script);
	

	file_put_contents('final.js', 'document.write(\'' . $script . '\'');

	header('Content-Type: application/octet-stream');
	echo 'document.write(\'' . $script . '\')';