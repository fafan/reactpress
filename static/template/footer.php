
<script src="<?php bloginfo('template_directory');?>/assets/js/bundle.js?<%= DIST_TIMESTAMP %>"></script>
<script>
/*
  document.ready(function(){
    var template_dir = '<?php bloginfo('template_directory') ?>';
    var imgs = document.querySelectorAll('img');
    for (var img of imgs) {
      //console.log(template_dir + '/' + img.src.replace(img.baseURI,''));
      img.src = template_dir + '/' + img.src.replace(img.baseURI,'')
    }

    var divs = document.querySelectorAll('div');
    var bgimage
    for (var div of divs) {
      bgimage = div.style.backgroundImage.split('"')[1]
      if (typeof bgimage !== 'undefined') div.style.backgroundImage = 'url(' + template_dir + '/' + bgimage + ')'
    }
  });
*/
</script>

<?php wp_footer(); ?>

</body>
</html>
