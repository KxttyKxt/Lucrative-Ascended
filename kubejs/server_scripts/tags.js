// Tags to make things easier
ServerEvents.tags('item', event => {

    // Equipment tag for all equippables
    event.add('c:equipment', '#c:armors')
    event.add('c:equipment', '#c:tools')
    event.add('c:tools', '#forge:shuriken')
    

    // Copper, Emerald, Amethyst Equipment
    const equipment = event.get('c:equipment').getObjectIds()
    const copperItems = Ingredient.of(/.*copper.*/)
    const emeraldItems = Ingredient.of(/.*emerald.*/)
    const amethystItems = Ingredient.of(/.*amethyst.*/)

    // Populate subtags for equipment
    equipment.forEach(equippable => {
        if (copperItems.test(equippable)) 
            event.add('c:equipment/copper', equippable)
        else if (emeraldItems.test(equippable))
            event.add('c:equipment/emerald', equippable)
        else if (amethystItems.test(equippable))
            event.add('c:equipment/amethyst', equippable)
    })
    
})