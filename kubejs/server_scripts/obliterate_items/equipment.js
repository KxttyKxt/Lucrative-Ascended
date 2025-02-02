// Tags to make things easier
ServerEvents.tags('item', event => {

    // Equipment tag for all equippables
    event.add('c:equipment', '#c:armors')
    event.add('c:equipment', '#c:tools')
    event.add('c:tools', '#forge:shuriken')
    

    // Copper, Emerald, Amethyst Equipment
    const equipment = event.get('c:equipment').getObjectIds()
    const copperEquipment = Ingredient.of(/(better).*copper.*/)
    const emeraldEquipment = Ingredient.of(/(better).*emerald.*/)
    const amethystEquipment = Ingredient.of(/(better)+.*amethyst.*/)

    // Populate subtags for equipment
    equipment.forEach(equippable => {
        if (copperEquipment.test(equippable)) 
            event.add('c:equipment/copper', equippable)
        else if (emeraldEquipment.test(equippable))
            event.add('c:equipment/emerald', equippable)
        else if (amethystEquipment.test(equippable) && !equippable.equals('irons_spellbooks:amethyst_rapier'))
            event.add('c:equipment/amethyst', equippable)
    })
    
    event.add('kubejs:obliterated', '#c:equipment/copper')
    event.add('kubejs:obliterated', '#c:equipment/emerald')
    event.add('kubejs:obliterated', '#c:equipment/amethyst')
    event.add('kubejs:obliterated', 'minecraft:shield')
})