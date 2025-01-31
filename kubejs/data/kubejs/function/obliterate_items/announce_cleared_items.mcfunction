tellraw @s {"text":"⚠ Whoops! You're not supposed to have that...","color":"dark_red"}
execute at @s run playsound block.chest.open player @s ~ ~ ~ 0.5 0.9
scoreboard players set @s items_were_obliterated 0