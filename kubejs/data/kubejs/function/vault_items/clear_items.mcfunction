execute as @a store success score @s items_were_vaulted run clear @s #kubejs:vaulted
execute as @a if score @s items_were_vaulted matches 1 run function kubejs:vault_items/announce_cleared_items

schedule function kubejs:vault_items/clear_items 10t