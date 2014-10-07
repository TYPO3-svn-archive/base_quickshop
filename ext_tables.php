<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}
t3lib_extMgm::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/',       'Quick Shop [0] + Template' );
t3lib_extMgm::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/3.1.0',  'Quick Shop [0] + Template 3.x (deprecated!)' );
?>
