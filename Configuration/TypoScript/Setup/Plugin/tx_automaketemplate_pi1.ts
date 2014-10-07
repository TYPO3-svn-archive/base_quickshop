plugin.tx_automaketemplate_pi1 {

  content = FILE
  content.file = {$plugin.base_quickshop.paths.html}

  elements {
    BODY.all = 1
    BODY.all.subpartMarker = DOCUMENT_BODY

    HEAD.all = 1
    HEAD.all.subpartMarker = DOCUMENT_HEADER
    HEAD.rmTagSections = title

    DIV.all = 1
  }

  relPathPrefix = {$plugin.base_quickshop.paths.res}
}