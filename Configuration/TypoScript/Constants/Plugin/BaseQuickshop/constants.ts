plugin.base_quickshop {
  # cat=Quick Shop Template - Client*//100;   type=string;   label= Author*: *Obligate! Author of the website
  client.name =

  # cat=Quick Shop Template - Host*//100;   type=string;   label= Host*: *Obligate! Host with an ending slash! Example: http://www.my-host.org/
  host =

  # cat=Quick Shop Template - Pages*//100;   type=+int;   label= Root page*: *Obligate! Uid of the root page
  pages.root                        = 100000
  # cat=Quick Shop Template - Pages*//101;   type=+int;   label= Logo*: *Obligate! Uid of the page or directory, which contains the content element with the header logo
  pages.root.libraries.header.logo  = 100000
  # cat=Quick Shop Template - Pages*//102;   type=+int;   label= Footer*: *Obligate! Uid of the page or directory, which contains the content element with the footer
  pages.root.libraries.footer       = 100000
  # cat=Quick Shop Template - Pages*//103;   type=+int;   label= Top Bar: Uid of the page or directory, which contains the foundation top bar
  pages.root.libraries.menu.topbar  = 100000
  # cat=Quick Shop Template - Pages*//104;   type=+int;   label= Menu Bottom: Uid of the page or directory, which contains the content element for the bottom of the menu column
  pages.root.libraries.menu.bottom  = 100000
  # cat=Quick Shop Template - Pages*//105;   type=+int;   label= Slider Content*: *Obligate! Uid of the page, which contains the content element for the header slider
  pages.root.libraries.header.slider.content  = 100000

  # cat=Quick Shop Template - Paths//100;     type=string;   label= normalize.css: Path to the CSS normalize file
  paths.normalize.css   = EXT:base_quickshop/res/foundation-5.3.0/css/normalize.css
  # cat=Quick Shop Template - Paths//101;     type=string;   label= basic CSS: Path to the CSS basic file
  paths.basic.css       = EXT:base_quickshop/res/html/css/basic.css
  # cat=Quick Shop Template - Paths//102;     type=string;   label= foundation CSS: Path to the CSS foundation file
  paths.foundation.css  = EXT:base_quickshop/res/foundation-5.3.0/css/foundation.min.css
  # cat=Quick Shop Template - Paths//103;     type=string;   label= Favicon: Path to the favicon
  paths.favicon         = EXT:base_quickshop/res/images/favicon.ico
  # cat=Quick Shop Template - Paths//104;     type=string;   label= HTML Template: Path to the HTML template file
  paths.html            = EXT:base_quickshop/res/html/index.html
  # cat=Quick Shop Template - Paths//105;   type=string;   label= Resource directory: Path to the directory with the resources
  paths.res             = EXT:base_quickshop/res/
  # cat=Quick Shop Template - Paths//106;     type=string;   label= modernizr.js: Path to the JS modernizr file
  paths.modernizr.js    = EXT:base_quickshop/res/foundation-5.3.0/js/vendor/modernizr.js
  # cat=Quick Shop Template - Paths//107;     type=string;   label= jquery.js: Path to the JS jquery file. Not needed, if you are using your own jquery library like t3jquery.
  paths.jquery.js       = EXT:base_quickshop/res/foundation-5.3.0/js/vendor/jquery.js
  # cat=Quick Shop Template - Paths//108;     type=string;   label= foundation.js: Path to the JS foundation file
  paths.foundation.js   = EXT:base_quickshop/res/foundation-5.3.0/js/foundation.min.js

  # cat=Quick Shop Template - Phrases//100;   type=string;   label= Root page link label*: *Obligate! Label for the Link of the root page in the menu
  phrases.title_tag_rootpage =

  # cat=Quick Shop Template - SEO//100;   type=string;   label= Description: Search Engine Optimisation: default description
  seo.description =
  # cat=Quick Shop Template - SEO//101;   type=string;   label= Keywords: Search Engine Optimisation: default keywords separated by comma
  seo.keywords    =

  # cat=Quick Shop Template - Slider//100;   type=+int;   label= Columns position: Columns position of your slider plugin. 0: normal, 1: left, 2:right, 3: marginal
  slider.colpos        =
  # cat=Quick Shop Template - Slider//101;   type=+int;   label= Maximum Image Height: The maximum height of images in the slider
  slider.maxImageHeight = 130
  # cat=Quick Shop Template - Slider//102;   type=+int;   label= Maximum Image Width: The maximum width of images in the slider
  slider.maxImageWidth = 770
}
