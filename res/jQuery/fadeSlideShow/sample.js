<script type="text/javascript">
<!--
  jQuery(document).ready(function(){
    jQuery('#slideshow').fadeSlideShow({
      width: 770, // Weite der SlideShow
      height: 130, // Höhe der Slideshow
      speed: 'slow', // Animationsgeschwindigkeit
      interval: 6000, // Zeit zwischen Bildwechsel 1000 = 1 Sekunde
      PlayPauseElement: 'fssPlayPause', // ID für Play / Pause Element
      PlayText: 'Start', // Play Text
      PauseText: 'Stop', // Pause Text
      NextElement: 'fssNext', // ID für den weiter Button
      NextElementText: 'Next >', // Text für den weiter Button
      PrevElement: 'fssPrev', // ID für den zurück Button
      PrevElementText: '< Prev', // Text für den zurück Button
      ListElement: 'fssList', // ID für die Bilder-Liste
      ListLi: 'fssLi', // Klasse für LI-Elemente in der Bilder-Liste
      ListLiActive: 'fssActive', // Klasse für aktives Element in der Bilder-Liste
      addListToId: false, // Bilder-Liste in ein HTML Element mit der ID ... einfügen
      allowKeyboardCtrl: false, // Keyboardsteuerung verbieten (Konflikt mit Formularen: Leerzeichen)
      autoplay: true // Autoplay an
    });
  });
//-->
</script>