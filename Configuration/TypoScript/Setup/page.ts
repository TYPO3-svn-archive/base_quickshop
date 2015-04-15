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
      // slider
    columnsslider < styles.content.get
    columnsslider {
      select.pidInList = {$plugin.baseorg.pages.root.libraries.header.slider.content}
    }
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
      // menu
    rowfootermenu = COA
    rowfootermenu {
      if {
        isTrue = 0
      }
        // 1st column (from 8 to 12)
      10 < tt_content.menu.20.1
      10 {
        begin     = 8
        maxItems  = 4
        special   >
        stdWrap {
          prepend >
          outerWrap = <ul class="side-nav large-3 columns" role="navigation" title="Link List">|</ul>
        }
        1 {
          NO {
            wrapItemAndSub = <li role="menuitem">|</li>
          }
          ACT < .NO
          ACT = 1
          ACT {
            wrapItemAndSub = <li role="menuitem" class="active">|</li>
          }
          SPC = 1
          SPC {
            stdWrap {
              cObject = TEXT
              cObject {
                value = <hr />
              }
            }
            wrapItemAndSub = <li class="spc">|</li>
          }
        }
      }
        // 2nd column (from 12 to 16)
      20 < .10
      20 {
        begin     = 12
        maxItems  = 4
      }
        // 3rd column (from 16 to 20)
      30 < .10
      30 {
        begin     = 16
        maxItems  = 4
      }
        // 4th column (from 20 to unlimited)
      40 < .10
      40 {
        begin     = 20
        maxItems  >
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
    // 141009, dwildt, -: Done by Browser - TYPO3 without PHP
    //base_quickshopNormalize  = {$plugin.base_quickshop.paths.normalize.css}
    //base_quickshopFoundation = {$plugin.base_quickshop.paths.foundation.css}
    base_quickshopBasic      = {$plugin.base_quickshop.paths.basic.css}
  }
  // 141009, dwildt, -: Done by Browser - TYPO3 without PHP
  //includeJS {
  //  base_quickshopModernizr  = {$plugin.base_quickshop.paths.modernizr.js}
  //}
  // 141009, dwildt, -: Done by Browser - TYPO3 without PHP
  //includeJSFooter {
    // Is included by the Browser - TYPO3 without PHP
    //base_quickshopJquery     = {$plugin.base_quickshop.paths.jquery.js}
    // Is included by the Browser - TYPO3 without PHP
    //base_quickshopFoundation = {$plugin.base_quickshop.paths.foundation.js}
  //}
  //jsFooterInline {
  //  60107 = TEXT
  //  60107 {
  //    value = $( document ).foundation();
  //  }
  //}
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
      // Foundation
    viewport = width=device-width, initial-scale=1.0
  }

  bodyTag = <body>
  10 < temp.body

}
  // page
