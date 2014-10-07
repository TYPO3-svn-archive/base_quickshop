plugin.base_quickshop {
  foundation {

    # cat=Quick Shop Template - foundation topbar//100; type=string;               label= Icon label:
    components.navigation.topbar.icon.label = Menü
    # cat=Quick Shop Template - foundation topbar//200; type=options[contain-to-grid,contain-to-grid fixed,fixed];  label= top bar position: Full-browser width by default. To make the top bar stay fixed as you scroll, select "fixed". If you want your navigation to be set to your grid width, wrap it with "contain-to-grid". You may use fixed and contain-to-grid together.
    components.navigation.topbar.position = contain-to-grid
    # cat=Quick Shop Template - foundation topbar//201; type=options[left,right];  label= main menu position: left or right.
    components.navigation.topbar.section.position = right

  }
}