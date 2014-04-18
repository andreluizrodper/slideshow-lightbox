Slideshow with lightbox
Hey this is a really easy and editable thumbnails slideshow with lightbox you ever seen

You'll need this js file and this html below to the things work nice and easy.

<div class="slideshow-lightbox">
  <ul>
    <li data-big="images/big-slide-1.jpg">
	  <img src="images/thumb-slide-1.jpg" alt="">
    </li>
    <li data-big="images/big-slide-2.jpg">
	  <img src="images/thumb-slide-2.jpg" alt="">
    </li>
    <li data-big="images/big-slide-3.jpg">
	  <img src="images/thumb-slide-3.jpg" alt="">
    </li>
    <li data-big="images/big-slide-4.jpg">
	  <img src="images/thumb-slide-4.jpg" alt="">
    </li>
    <li data-big="images/big-slide-5.jpg">
	  <img src="images/thumb-slide-5.jpg" alt="">
    </li>
    <li data-big="images/big-slide-6.jpg">
	  <img src="images/thumb-slide-6.jpg" alt="">
    </li>
    <li data-big="images/big-slide-7.jpg">
	  <img src="images/thumb-slide-7.jpg" alt="">
    </li>
    <li data-big="images/big-slide-8.jpg">
	  <img src="images/thumb-slide-8.jpg" alt="">
    </li>
  </ul>
</div>
			
You'll have to put your images (thumbnails and big ones) and the plugin will change the html to this:

<div class="slideshow-lightbox">
  <a href="#" class="nav prev"></a>
  <div class="holder">
    <ul>
      <li data-big="images/big-slide-1.jpg">
	    <img src="images/thumb-slide-1.jpg" alt="">
      </li>
      <li data-big="images/big-slide-2.jpg">
	    <img src="images/thumb-slide-2.jpg" alt="">
      </li>
      <li data-big="images/big-slide-3.jpg">
	    <img src="images/thumb-slide-3.jpg" alt="">
      </li>
      <li data-big="images/big-slide-4.jpg">
	    <img src="images/thumb-slide-4.jpg" alt="">
      </li>
      <li data-big="images/big-slide-5.jpg">
	    <img src="images/thumb-slide-5.jpg" alt="">
      </li>
      <li data-big="images/big-slide-6.jpg">
  	    <img src="images/thumb-slide-6.jpg" alt="">
      </li>
      <li data-big="images/big-slide-7.jpg">
	    <img src="images/thumb-slide-7.jpg" alt="">
      </li>
      <li data-big="images/big-slide-8.jpg">
	    <img src="images/thumb-slide-8.jpg" alt="">
      </li>
    </ul>
  </div>
  <a href="#" class="nav prev"></a>
</div>
			
And the lightbox:

<div class="modal-overlay">
</div>
<div class="modal-holder">
  <div class="content">
    <a class="nav prev"></a>
  	<img src="images/big-slide-1.jpg"/>
    <a href='#' class'close'></a>
    <a class="nav next"></a>
  </div>    
</div>
