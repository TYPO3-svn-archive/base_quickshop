  // temp.htmlHead
  // temp.header
  //   header-logo
  //   header-slider
  // temp.body
  // page



  //////////////////////////////////////////////
  //
  // temp.htmlHead

temp.htmlHead = TEMPLATE
temp.htmlHead {
  template      =< plugin.tx_automaketemplate_pi1
  workOnSubpart = DOCUMENT_HEADER
}
  // temp.htmlHead



  //////////////////////////////////////////////
  //
  // temp.header

temp.header {
  header-logo = CONTENT
  header-logo {
    table = tt_content
    select {
      pidInList = {$plugin.base_quickshop.pages.root.libraries.header.logo}
      orderBy   = sorting
      max       = 1
      colPos    = 0
    }
  }
}
  // temp.header



  //////////////////////////////////////////////
  //
  // temp.body

temp.body = TEMPLATE
temp.body {
  template      =< plugin.tx_automaketemplate_pi1
  workOnSubpart = DOCUMENT_BODY

  subparts {
    columnslogo   < temp.header.header-logo
    columnscontent < styles.content.get
    XXXcolumnstopbar = COA
    XXXcolumnstopbar {
        // minicaddy
      10 = CONTENT
      10 {
        table = tt_content
        select {
          pidInList = {$plugin.base_quickshop.pages.root.caddymini}
          orderBy   = sorting
          //max       = 1
          //colPos    = 0
        }
      }
        // menu
      30 = COA
      30 {
          // root page
        10 = HMENU
        10 {
          special = list
          special.value = {$plugin.base_quickshop.pages.root}
          1 < temp.tmenu
        }
          // space
        20 = TEXT
        20 {
          value (
            <ul>
              <li class="spc">
                &nbsp;
              </li>
            </ul>
          )
        }
          // 1st level
        30 < base_quickshop.nav.foundation.topbar
      }
        // Menu bottom
      90 = CONTENT
      90 {
        table = tt_content
        select {
          pidInList = {$plugin.base_quickshop.pages.root.libraries.menu.bottom}
          orderBy   = sorting
          //max       = 1
          //colPos    = 0
        }
      }
    }
    columnstopbar >
    rowtopbar = COA
    rowtopbar {
      20 = CONTENT
      20 {
        table = tt_content
        select {
          pidInList = {$plugin.base_quickshop.pages.root.libraries.menu.topbar}
          orderBy   = sorting
          max       = 1
          //colPos    = 0
        }
      }
    }
    columnsfooter  < styles.content.get
    columnsfooter {
      select.pidInList = {$plugin.base_quickshop.pages.root.libraries.footer}
    }
  }
}
  // temp.body



  ///////////////////////////////////////////
  //
  // page

page = PAGE
page {

  typeNum = 0

  shortcutIcon = {$plugin.base_quickshop.paths.favicon}

  headerData.10 < temp.htmlHead
  includeCSS {
    //base_quickshopNormalize  = {$plugin.base_quickshop.paths.normalize.css}
    base_quickshopFoundation = {$plugin.base_quickshop.paths.foundation.css}
    base_quickshopBasic      = {$plugin.base_quickshop.paths.basic.css}
  }
  includeJS {
    base_quickshopModernizr  = {$plugin.base_quickshop.paths.modernizr.js}
  }
  includeJSFooter {
    // Is included by the Browser - TYPO3 without PHP
    //base_quickshopJquery     = {$plugin.base_quickshop.paths.jquery.js}
    // Is included by the Browser - TYPO3 without PHP
    //base_quickshopFoundation = {$plugin.base_quickshop.paths.foundation.js}
  }
  jsFooterInline {
    60107 = TEXT
    60107 {
      value = $( document ).foundation();
    }
  }
  meta {
    author = {$plugin.base_quickshop.client.name}
    keywords {
      field    = keywords
      ifEmpty  = {$plugin.base_quickshop.seo.keywords}
      keywords = 1
    }
    description {
      field = description
      ifEmpty (
        {$plugin.base_quickshop.seo.description}
      )
    }
  }

  bodyTag = <body>
  10 < temp.body

}
  // page
