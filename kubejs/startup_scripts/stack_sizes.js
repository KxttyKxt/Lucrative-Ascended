ItemEvents.modification(event => {
    event.modify('minecraft:enchanted_book', item => { item.maxStackSize = 16 })

    event.modify('minecraft:saddle', item => { item.maxStackSize = 16 })

    event.modify('minecraft:ender_pearl', item => { item.maxStackSize = 64 })
    event.modify('minecraft:ender_eye', item => { item.maxStackSize = 64 })
    
    event.modify('minecraft:potion', item => { item.maxStackSize = 8 })
    event.modify('minecraft:splash_potion', item => { item.maxStackSize = 8 })
    event.modify('minecraft:lingering_potion', item => { item.maxStackSize = 8 })
    
    event.modify('reliquary:potion', item => { item.maxStackSize = 8 })
    event.modify('reliquary:splash_potion', item => { item.maxStackSize = 8 })
    event.modify('reliquary:lingering_potion', item => { item.maxStackSize = 8 })

    event.modify('cardiac:life_bottle', item => { item.maxStackSize = 8 })
})