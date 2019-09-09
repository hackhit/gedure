<!-- Contenido -->
<main>
  <!-- Noticias -->
  <aside>
    <?php
    $anuncios = listAnnounce($mysqli);

    if ($anuncios === 'noAnnounce') {
      $anuncios = null;
    }
    $i=0;
    while (isset($anuncios[$i])){
      $aActual = $anuncios[$i];
    ?>
    <section>
      <header>
        <p><?php echo $aActual['title'] ?></p>
      </header>
      <p class="contenido"><?php echo $aActual['content'] ?></p>
      <footer>Escrito por: <?php echo $aActual['byUser'] ?></footer>
    </section>
    <?php $i++;} ?>
  </aside>
  <!-- Publicaciones -->
  <article>
    <?php
    $noticias = listNews($mysqli);

    if ($noticias === 'noNews') {
      $noticias = null;
    }
    $i=0;
    while (isset($noticias[$i])){
      $nActual = $noticias[$i];
    ?>
    <section>
      <header>
        <span><? echo $nActual['title']; ?></span>
      </header>
      <div class="avatar">
        <img src="<? echo $nActual['avatarOwner'] ?>" alt="" width="100" heigth="100"/>
        <span class="nombre"><? echo $nActual['owner']; ?></span>
      </div>
      <p class="contenido"><? echo $nActual['content']; ?></p>
      <footer>
        <?
        $img = json_decode($nActual['img']);

        $o=0;
        for ($l=0; $l < count($img); $l++) { 
          if ($l < 3) {
        ?>
          <img data-actual="<? echo $l ?>" class="showImg" src="<? echo $img[$l] ?>" alt="imagen" width="160" height="100"/>
        <?
          }else {
        ?>
          <img data-actual="<? echo $l ?>" class="noShowImg" src="<? echo $img[$l] ?>" alt="imagen" width="160" height="100"/>
        <?
          $o++;
          }
        }

        if ($o > 0) {
          ?>
          <span class="more">+<? echo $o; ?></span>
          <?
        }
        ?>
      </footer>
    </section>
    <?php $i++;}?>
  </article>
</main>