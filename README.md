<!DOCTYPE html>
<html>
  <head>
    <title>Slideshow with lightbox</title>
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="css/style.css" type="text/css"/>
  </head>
  <body>
    <div class="wrapper">
      <h1>Slideshow with lightbox</h1>
      <p>
        Hey this is a really easy and editable thumbnails slideshow with lightbox you ever seen
      </p>
      <hr/>
      <p>
        You'll need this <a href="slideshow-lightbox.js">js</a> file and this html below to the things work nice and easy.
      </p>
      <pre>
&lt;div class="slideshow-lightbox"&gt;
  &lt;ul&gt;
    &lt;li data-big="images/big-slide-1.jpg"&gt;
    &lt;img src="images/thumb-slide-1.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-2.jpg"&gt;
    &lt;img src="images/thumb-slide-2.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-3.jpg"&gt;
    &lt;img src="images/thumb-slide-3.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-4.jpg"&gt;
    &lt;img src="images/thumb-slide-4.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-5.jpg"&gt;
    &lt;img src="images/thumb-slide-5.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-6.jpg"&gt;
    &lt;img src="images/thumb-slide-6.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-7.jpg"&gt;
    &lt;img src="images/thumb-slide-7.jpg" alt=""&gt;
    &lt;/li&gt;
    &lt;li data-big="images/big-slide-8.jpg"&gt;
    &lt;img src="images/thumb-slide-8.jpg" alt=""&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
      </pre>
      <p>
        You'll have to put your images (thumbnails and big ones) and the plugin will change the html to this:
      </p>
      <pre>
&lt;div class="slideshow-lightbox"&gt;
  &lt;a href="#" class="nav prev"&gt;&lt;/a&gt;
  &lt;div class="holder"&gt;
    &lt;ul&gt;
      &lt;li data-big="images/big-slide-1.jpg"&gt;
      &lt;img src="images/thumb-slide-1.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-2.jpg"&gt;
      &lt;img src="images/thumb-slide-2.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-3.jpg"&gt;
      &lt;img src="images/thumb-slide-3.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-4.jpg"&gt;
      &lt;img src="images/thumb-slide-4.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-5.jpg"&gt;
      &lt;img src="images/thumb-slide-5.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-6.jpg"&gt;
        &lt;img src="images/thumb-slide-6.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-7.jpg"&gt;
      &lt;img src="images/thumb-slide-7.jpg" alt=""&gt;
      &lt;/li&gt;
      &lt;li data-big="images/big-slide-8.jpg"&gt;
      &lt;img src="images/thumb-slide-8.jpg" alt=""&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;a href="#" class="nav prev"&gt;&lt;/a&gt;
&lt;/div&gt;
      </pre>
      <p>
        And the lightbox:
      </p>
      <pre>
&lt;div class="modal-overlay"&gt;
&lt;/div&gt;
&lt;div class="modal-holder"&gt;
  &lt;div class="content"&gt;
    &lt;a class="nav prev"&gt;&lt;/a&gt;
    &lt;img src="images/big-slide-1.jpg"/&gt;
    &lt;a href='#' class'close'&gt;&lt;/a&gt;
    &lt;a class="nav next"&gt;&lt;/a&gt;
  &lt;/div&gt;    
&lt;/div&gt;
      </pre>  
      <p>
        To see some demos access: http://alrp.com.br/slideshow-lightbox
      </p>
    </div>
  </body>
</html>