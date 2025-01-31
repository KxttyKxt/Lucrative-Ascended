tellraw @s {"text":"⚠ Easy there! This item is not yet ready.","color":"dark_green"}
execute at @s run playsound block.chest.open player @s ~ ~ ~ 0.5 1.2
scoreboard players set @s items_were_vaulted 0