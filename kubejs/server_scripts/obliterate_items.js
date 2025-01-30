// In order to obliterate, we need a few things:
//   1. Remove all input and output recipes
//   2. Remove completely from recipe viewer (EMI)

// Tags and items to remove from recipes and EMI
ServerEvents.tags('item', event => {
    event.add('kubejs:obliterated', '#c:equipment/copper')
    event.add('kubejs:obliterated', '#c:equipment/emerald')
    event.add('kubejs:obliterated', '#c:equipment/amethyst')
    event.add('kubejs:obliterated', 'minecraft:shield')
})

// Remove from recipes
ServerEvents.recipes(event => {
    event.remove([{input: '#kubejs:obliterated'}, {output: '#kubejs:obliterated'}])
})
// Remove from EMI
RecipeViewerEvents.removeEntriesCompletely('item', event => {
	event.remove('#kubejs:obliterated')
})

// Warn obliterated if somehow obtained
ItemEvents.modifyTooltips(event => {
    event.add('#kubejs:obliterated', Text.warn(Text.red('This item is obliterated. However you got this, it was not intended')))
})

// If a player happens upon an onbliterated item, the functions in 'data/kubejs/function/obliterate_items' remove them.