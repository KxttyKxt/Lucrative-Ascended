// In order to obliterate, we need a few things:
//   1. Remove all input and output recipes
//   2. Prevent players from obtaining

// Tags and items to remove from recipes and EMI
ServerEvents.tags('item', event => {
    event.add('kubejs:vaulted', '#sophisticatedbackpacks:upgrade')
    event.add('kubejs:vaulted', 'sophisticatedbackpacks:copper_backpack')
    event.add('kubejs:vaulted', 'sophisticatedbackpacks:iron_backpack')
    event.add('kubejs:vaulted', 'sophisticatedbackpacks:gold_backpack')
    event.add('kubejs:vaulted', 'sophisticatedbackpacks:diamond_backpack')
    event.add('kubejs:vaulted', 'sophisticatedbackpacks:netherite_backpack')
})

// Remove from recipes
ServerEvents.recipes(event => {
    event.remove([{input: '#kubejs:vaulted'}, {output: '#kubejs:vaulted'}])
})

// Warn vaulted if somehow obtained
ItemEvents.modifyTooltips(event => {
    event.add('#kubejs:vaulted', Text.darkGreen('⚠ This item is vaulted. However you got this, it was not intended. But it will be soon!'))
})

// If a player happens upon a vaulted item, the functions in 'data/kubejs/function/vault_items' remove them.