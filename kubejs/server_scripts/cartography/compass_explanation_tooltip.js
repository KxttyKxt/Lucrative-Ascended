ItemEvents.modifyTooltips(event => {
    event.add('minecraft:compass', {shift: false}, 'Press [SHIFT] to read about waypoints.');

    event.add('minecraft:compass', {shift: true}, '⏵ With a compass in your inventory, a HUD bar appears at the top of the screen.')
    event.add('minecraft:compass', {shift:true}, '')
    event.add('minecraft:compass', {shift: true}, '⏵ To make your own waypoints, press U for a list or Numpad + for a quick waypoint.')
    event.add('minecraft:compass', {shift: true}, '⏵ Any map waypoints (treasure, banners, mansion, placed maps in an item frame) will also appear on the compass, so long as have the map.')
    event.add('minecraft:compass', {shift:true}, '')
    event.add('minecraft:compass', {shift: true}, '⏵ For all waypoints, they fade from the compass if you are too far away, but you can still open the waypoints list and make new ones.')
    
})