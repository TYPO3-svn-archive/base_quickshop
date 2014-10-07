config {
  admPanel        = 1
  baseURL         = {$plugin.base_quickshop.host}
  headerComment (
        TYPO3-Programmierung und Hosting: die-netzmacher.de
)
  spamProtectEmailAddresses               = 6
  spamProtectEmailAddresses_atSubst       = <span style="display:none;">spamfilter</span><span class="dummy">@</span>
  spamProtectEmailAddresses_lastDotSubst  = <span style="display:none;">spamfilter</span><span class="dummy">.</span>
  tx_realurl_enable = 1
  metaCharset     = UTF-8
  doctype         = xhtml_strict
  xhtml_cleaning  = all
}