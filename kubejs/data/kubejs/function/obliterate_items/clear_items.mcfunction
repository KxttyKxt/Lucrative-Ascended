execute as @a store success score @s items_were_obliterated run clear @s #kubejs:obliterated
execute as @a if score @s items_were_obliterated matches 1 run function kubejs:obliterate_items/announce_cleared_items

schedule function kubejs:obliterate_items/clear_items 10t