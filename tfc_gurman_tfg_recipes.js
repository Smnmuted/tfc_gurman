// TFC Gurman - TerraFirmaGreg Integration Recipes
// This file adds recipes for GTCEU food_processor and food_oven machines
// Place this file in: kubejs/server_scripts/tfc_gurman_tfg_recipes.js

ServerEvents.recipes(event => {
    
    // ===== PIZZA RECIPES =====
    
    // Margarita Pizza
    event.recipes.gtceu.food_oven('margarita_pizza')
        .itemInputs('tfc_gurman:raw_margarita_pizza')
        .itemOutputs('tfc_gurman:margarita_pizza')
        .duration(300)
        .EUt(16)
    
    // Pepperoni Pizza
    event.recipes.gtceu.food_oven('pepperoni_pizza')
        .itemInputs('tfc_gurman:raw_pepperoni_pizza')
        .itemOutputs('tfc_gurman:pepperoni_pizza')
        .duration(300)
        .EUt(16)
    
    // Hawaiian Pizza
    event.recipes.gtceu.food_oven('havai_pizza')
        .itemInputs('tfc_gurman:raw_havai_pizza')
        .itemOutputs('tfc_gurman:havai_pizza')
        .duration(300)
        .EUt(16)
    
    // Four Cheeses Pizza
    event.recipes.gtceu.food_oven('four_cheeses_pizza')
        .itemInputs('tfc_gurman:raw_four_cheeses_pizza')
        .itemOutputs('tfc_gurman:four_cheeses_pizza')
        .duration(300)
        .EUt(16)
    
    // Four Meats Pizza
    event.recipes.gtceu.food_oven('four_meats_pizza')
        .itemInputs('tfc_gurman:raw_four_meats_pizza')
        .itemOutputs('tfc_gurman:four_meats_pizza')
        .duration(300)
        .EUt(16)
    
    // Neapolitano Pizza
    event.recipes.gtceu.food_oven('neapolitano_pizza')
        .itemInputs('tfc_gurman:raw_neapolitano_pizza')
        .itemOutputs('tfc_gurman:neapolitano_pizza')
        .duration(300)
        .EUt(16)
    
    // ===== RUSSIAN & EASTERN EUROPEAN CUISINE =====
    
    // Placinda
    event.recipes.gtceu.food_oven('placinda')
        .itemInputs('tfc_gurman:raw_placinda')
        .itemOutputs('tfc_gurman:placinda')
        .duration(300)
        .EUt(16)
    
    // Pelmeni
    event.recipes.gtceu.food_processor('pelmeni')
        .itemInputs('tfc_gurman:raw_pelmeni')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:pelmeni')
        .duration(400)
        .EUt(8)
    
    // Vareniki
    event.recipes.gtceu.food_processor('vareniki')
        .itemInputs('tfc_gurman:raw_vareniki')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:vareniki')
        .duration(400)
        .EUt(8)
    
    // Oladyi
    event.recipes.gtceu.food_oven('oladyi')
        .itemInputs('tfc_gurman:raw_oladyi')
        .itemOutputs('tfc_gurman:oladyi')
        .duration(200)
        .EUt(12)
    
    // Syrniki
    event.recipes.gtceu.food_oven('syrniki')
        .itemInputs('tfc_gurman:raw_syrniki')
        .itemOutputs('tfc_gurman:syrniki')
        .duration(200)
        .EUt(12)
    
    // Chebureki
    event.recipes.gtceu.food_oven('chebureki')
        .itemInputs('tfc_gurman:raw_chebureki')
        .itemOutputs('tfc_gurman:chebureki')
        .duration(250)
        .EUt(16)
    
    // Khachapuri
    event.recipes.gtceu.food_oven('khachapuri')
        .itemInputs('tfc_gurman:raw_khachapuri')
        .itemOutputs('tfc_gurman:khachapuri')
        .duration(300)
        .EUt(16)
    
    // Lavash Wrap
    event.recipes.gtceu.food_oven('lavash_wrap')
        .itemInputs('tfc_gurman:raw_lavash_wrap')
        .itemOutputs('tfc_gurman:lavash_wrap')
        .duration(250)
        .EUt(16)
    
    // Borscht
    event.recipes.gtceu.food_processor('borscht')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:borscht')
        .duration(600)
        .EUt(8)
    
    // Schi
    event.recipes.gtceu.food_processor('schi')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:schi')
        .duration(600)
        .EUt(8)
    
    // Solyanka
    event.recipes.gtceu.food_processor('solyanka')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:solyanka')
        .duration(600)
        .EUt(8)
    
    // Okroshka
    event.recipes.gtceu.food_processor('okroshka')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('tfc_gurman:kvass 1000')
        .itemOutputs('tfc_gurman:okroshka')
        .duration(400)
        .EUt(8)
    
    // Kiev Cutlets
    event.recipes.gtceu.food_oven('kiev_cutlets')
        .itemInputs('tfc_gurman:raw_kiev_cutlets')
        .itemOutputs('tfc_gurman:kiev_cutlets')
        .duration(300)
        .EUt(16)
    
    // ===== CAUCASIAN & MIDDLE EASTERN CUISINE =====
    
    // Adjika
    event.recipes.gtceu.food_processor('adjika')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables', 'tfc:powder/salt'])
        .itemOutputs('tfc_gurman:adjika')
        .duration(200)
        .EUt(4)
    
    // Khinkali
    event.recipes.gtceu.food_processor('zama')
        .itemInputs(['#tfc:foods/raw_poultry', '#tfc:foods/vegetables', '#tfc:foods/grains'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:zama')
        .duration(600)
        .EUt(8)
    
    // Mamaliga
    event.recipes.gtceu.food_processor('mamaliga')
        .itemInputs('#tfc:foods/grains')
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:mamaliga')
        .duration(400)
        .EUt(8)
    
    // Falafel
    event.recipes.gtceu.food_oven('falafel')
        .itemInputs(['#tfc:foods/grains', '#tfc:foods/grains', '#tfc:foods/vegetables'])
        .itemOutputs('2x tfc_gurman:falafel')
        .duration(200)
        .EUt(12)
    
    // Dolma
    event.recipes.gtceu.food_processor('dolma')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/grains', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:dolma')
        .duration(500)
        .EUt(8)
    
    // Hummus
    event.recipes.gtceu.food_processor('hummus')
        .itemInputs(['#tfc:foods/grains', '#tfc:foods/grains', '#tfc:foods/vegetables'])
        .itemOutputs('tfc_gurman:hummus')
        .duration(300)
        .EUt(4)
    
    // Tzatziki
    event.recipes.gtceu.food_processor('tzatziki')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('tfc:vinegar 250')
        .itemOutputs('tfc_gurman:tzatziki')
        .duration(200)
        .EUt(4)
    
    // ===== ASIAN CUISINE =====
    
    // Fried Rice
    event.recipes.gtceu.food_oven('fried_rice')
        .itemInputs(['tfc:food/cooked_rice', '#tfc:foods/vegetables', '#tfc:foods/vegetables', 'tfc:food/egg'])
        .itemOutputs('tfc_gurman:fried_rice')
        .duration(300)
        .EUt(12)
    
    // Curry
    event.recipes.gtceu.food_processor('curry')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:curry')
        .duration(600)
        .EUt(8)
    
    // Pho
    event.recipes.gtceu.food_processor('pho')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/grains'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:pho')
        .duration(600)
        .EUt(8)
    
    // Ramen with Bacon
    event.recipes.gtceu.food_processor('ramen_with_bacon')
        .itemInputs(['tfc:food/cooked_bacon', '#tfc:foods/vegetables', 'tfc:food/egg'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:ramen_with_bacon')
        .duration(600)
        .EUt(8)
    
    // Ramen with Beef
    event.recipes.gtceu.food_processor('ramen_with_beef')
        .itemInputs(['tfc:food/cooked_beef', '#tfc:foods/vegetables', 'tfc:food/egg'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:ramen_with_beef')
        .duration(600)
        .EUt(8)
    
    // Ramen with Camelidae
    event.recipes.gtceu.food_processor('ramen_with_camelidae')
        .itemInputs(['tfc:food/cooked_camelidae', '#tfc:foods/vegetables', 'tfc:food/egg'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:ramen_with_camelidae')
        .duration(600)
        .EUt(8)
    
    // Ramen with Chevon
    event.recipes.gtceu.food_processor('ramen_with_chevon')
        .itemInputs(['tfc:food/cooked_chevon', '#tfc:foods/vegetables', 'tfc:food/egg'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:ramen_with_chevon')
        .duration(600)
        .EUt(8)
    
    // Tonkatsu
    event.recipes.gtceu.food_oven('tonkatsu')
        .itemInputs('tfc_gurman:raw_tonkatsu')
        .itemOutputs('tfc_gurman:tonkatsu')
        .duration(250)
        .EUt(16)
    
    // Takoyaki
    event.recipes.gtceu.food_oven('takoyaki')
        .itemInputs('tfc_gurman:raw_takoyaki')
        .itemOutputs('tfc_gurman:takoyaki')
        .duration(200)
        .EUt(12)
    
    // Kimchi
    event.recipes.gtceu.food_processor('kimchi')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables', 'tfc:powder/salt'])
        .inputFluids('tfc:vinegar 500')
        .itemOutputs('tfc_gurman:kimchi')
        .duration(400)
        .EUt(4)
    
    // Bulgogi
    event.recipes.gtceu.food_oven('bulgogi')
        .itemInputs('tfc_gurman:raw_bulgogi')
        .itemOutputs('tfc_gurman:bulgogi')
        .duration(300)
        .EUt(16)
    
    // ===== INDIAN CUISINE =====
    
    // Tandoori Chicken
    event.recipes.gtceu.food_oven('tandoori_chicken')
        .itemInputs('tfc_gurman:raw_tandoori_chicken')
        .itemOutputs('tfc_gurman:tandoori_chicken')
        .duration(300)
        .EUt(16)
    
    // Biryani
    event.recipes.gtceu.food_processor('biryani')
        .itemInputs(['#tfc:foods/meats', 'tfc:food/rice', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:biryani')
        .duration(600)
        .EUt(8)
    
    // ===== EUROPEAN CUISINE =====
    
    // Goulash
    event.recipes.gtceu.food_processor('goulash')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:goulash')
        .duration(600)
        .EUt(8)
    
    // Risotto
    event.recipes.gtceu.food_processor('risotto')
        .itemInputs(['tfc:food/rice', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:risotto')
        .duration(500)
        .EUt(8)
    
    // ===== ITALIAN CUISINE =====
    
    // Spaghetti Bolognese
    event.recipes.gtceu.food_processor('spaghetti_bolognese')
        .itemInputs(['#tfc:foods/meats', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:spaghetti_bolognese')
        .duration(500)
        .EUt(8)
    
    // Pasta Carbonara
    event.recipes.gtceu.food_processor('pasta_carbonara')
        .itemInputs(['tfc:food/cooked_bacon', 'tfc:food/egg', 'firmalife:food/cheese'])
        .itemOutputs('tfc_gurman:pasta_carbonara')
        .duration(400)
        .EUt(8)
    
    // Tiramisu
    event.recipes.gtceu.food_processor('tiramisu')
        .itemInputs(['#tfc:foods/grains', 'firmalife:food/cheese', 'tfc:food/egg'])
        .inputFluids('tfc_gurman:coffee 250')
        .itemOutputs('tfc_gurman:tiramisu')
        .duration(400)
        .EUt(8)
    
    // ===== FRENCH CUISINE =====
    
    // Croissants
    event.recipes.gtceu.food_oven('croissants')
        .itemInputs('tfc_gurman:raw_croissants')
        .itemOutputs('tfc_gurman:croissants')
        .duration(250)
        .EUt(12)
    
    // Ratatouille
    event.recipes.gtceu.food_processor('ratatouille')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('tfc:olive_oil 250')
        .itemOutputs('tfc_gurman:ratatouille')
        .duration(500)
        .EUt(8)
    
    // Quiche
    event.recipes.gtceu.food_oven('quiche')
        .itemInputs('tfc_gurman:raw_quiche')
        .itemOutputs('tfc_gurman:quiche')
        .duration(350)
        .EUt(16)
    
    // Bouillabaisse
    event.recipes.gtceu.food_processor('bouillabaisse')
        .itemInputs(['#tfc:foods/fish', '#tfc:foods/fish', '#tfc:foods/vegetables', '#tfc:foods/vegetables'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs('tfc_gurman:bouillabaisse')
        .duration(600)
        .EUt(8)
    
    // Crepes
    event.recipes.gtceu.food_oven('crepes')
        .itemInputs('tfc_gurman:raw_crepes')
        .itemOutputs('tfc_gurman:crepes')
        .duration(200)
        .EUt(12)
    
    // ===== GERMAN CUISINE =====
    
    // Bratwurst
    event.recipes.gtceu.food_oven('bratwurst')
        .itemInputs('tfc_gurman:raw_bratwurst')
        .itemOutputs('tfc_gurman:bratwurst')
        .duration(250)
        .EUt(16)
    
    // ===== GREEK CUISINE =====
    
    // Greek Salad
    event.recipes.gtceu.food_processor('greek_salad')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables', '#tfc:foods/vegetables', 'firmalife:food/cheese'])
        .inputFluids('tfc:olive_oil 100')
        .itemOutputs('tfc_gurman:greek_salad')
        .duration(200)
        .EUt(4)
    
    // ===== MISCELLANEOUS =====
    
    // Porridge
    event.recipes.gtceu.food_processor('porridge')
        .itemInputs('#tfc:foods/grains')
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:porridge')
        .duration(400)
        .EUt(4)
    
    // Porridge with Honey
    event.recipes.gtceu.food_processor('porridge_with_honey')
        .itemInputs(['#tfc:foods/grains', 'tfc:food/honey'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:porridge_with_honey')
        .duration(400)
        .EUt(4)
    
    // Porridge with Fruits
    event.recipes.gtceu.food_processor('porridge_with_fruits')
        .itemInputs(['#tfc:foods/grains', '#tfc:foods/fruits'])
        .inputFluids('minecraft:water 500')
        .itemOutputs('tfc_gurman:porridge_with_fruits')
        .duration(400)
        .EUt(4)
    
    // ===== BEVERAGES =====
    
    // Coffee
    event.recipes.gtceu.food_processor('coffee_fluid')
        .itemInputs(['firmalife:food/coffee_beans', 'firmalife:food/coffee_beans'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:coffee 1000')
        .duration(300)
        .EUt(4)
    
    // Tea (Mint)
    event.recipes.gtceu.food_processor('tea_mint_fluid')
        .itemInputs(['tfc_gurman:dried_mint_leaves', 'tfc_gurman:dried_mint_leaves'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:tea_mint 1000')
        .duration(300)
        .EUt(4)
    
    // Tea (Chamomile)
    event.recipes.gtceu.food_processor('tea_chamomile_fluid')
        .itemInputs(['tfc_gurman:dried_chamomile_leaves', 'tfc_gurman:dried_chamomile_leaves'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:tea_chamomile 1000')
        .duration(300)
        .EUt(4)
    
    // Tea (Rosehip)
    event.recipes.gtceu.food_processor('tea_rosehip_fluid')
        .itemInputs(['tfc_gurman:dried_rosehip_leaves', 'tfc_gurman:dried_rosehip_leaves'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:tea_rosehip 1000')
        .duration(300)
        .EUt(4)
    
    // Tea (Nettle)
    event.recipes.gtceu.food_processor('tea_nettle_fluid')
        .itemInputs(['tfc_gurman:dried_nettle_leaves', 'tfc_gurman:dried_nettle_leaves'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:tea_nettle 1000')
        .duration(300)
        .EUt(4)
    
    // Cocoa
    event.recipes.gtceu.food_processor('cocoa_fluid')
        .itemInputs(['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_powder', 'minecraft:sugar'])
        .inputFluids('#tfc:milks 1000')
        .outputFluids('tfc_gurman:cocoa 1000')
        .duration(300)
        .EUt(4)
    
    // Compote
    event.recipes.gtceu.food_processor('compote_fluid')
        .itemInputs(['#tfc:foods/fruits', '#tfc:foods/fruits', '#tfc:foods/fruits', 'minecraft:sugar'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:compote 1000')
        .duration(400)
        .EUt(4)
    
    // Lemonade
    event.recipes.gtceu.food_processor('lemonade_fluid')
        .itemInputs(['tfc:food/lemon', 'tfc:food/lemon', 'minecraft:sugar'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:lemonade 1000')
        .duration(300)
        .EUt(4)
    
    // Kvass
    event.recipes.gtceu.food_processor('kvass_fluid')
        .itemInputs(['#tfc:foods/bread', 'minecraft:sugar', 'firmalife:food/yeast'])
        .inputFluids('minecraft:water 1000')
        .outputFluids('tfc_gurman:kvass 1000')
        .duration(600)
        .EUt(4)
    
    // ===== SAUERKRAUT AND FERMENTED FOODS =====
    
    // Sauerkraut
    event.recipes.gtceu.food_processor('sauerkraut')
        .itemInputs(['#tfc:foods/vegetables', '#tfc:foods/vegetables', 'tfc:powder/salt'])
        .itemOutputs('2x tfc_gurman:sauerkraut')
        .duration(600)
        .EUt(4)
    
    // ===== CHEESE PRODUCTION =====
    
    // Ox Curd (from milk)
    event.recipes.gtceu.food_processor('ox_curd')
        .itemInputs('tfc:powder/salt')
        .inputFluids('tfc_gurman:curdled_ox_milk 1000')
        .itemOutputs('tfc_gurman:ox_curd')
        .duration(400)
        .EUt(4)
    
    // Sheep Curd (from milk)
    event.recipes.gtceu.food_processor('sheep_curd')
        .itemInputs('tfc:powder/salt')
        .inputFluids('tfc_gurman:curdled_sheep_milk 1000')
        .itemOutputs('tfc_gurman:sheep_curd')
        .duration(400)
        .EUt(4)
    
    // Alpaca Curd (from milk)
    event.recipes.gtceu.food_processor('alpaca_curd')
        .itemInputs('tfc:powder/salt')
        .inputFluids('tfc_gurman:curdled_alpaca_milk 1000')
        .itemOutputs('tfc_gurman:alpaca_curd')
        .duration(400)
        .EUt(4)
    
    // ===== PASTA WITH ADJIKA =====
    
    event.recipes.gtceu.food_processor('pasta_with_adjika')
        .itemInputs(['firmalife:food/pasta', 'tfc_gurman:adjika'])
        .itemOutputs('tfc_gurman:pasta_with_adjika')
        .duration(200)
        .EUt(4)
    
    // ===== ADJIKA BREAD =====
    
    event.recipes.gtceu.food_processor('adjika_bread')
        .itemInputs(['#tfc:foods/bread', 'tfc_gurman:adjika'])
        .itemOutputs('tfc_gurman:adjika_bread')
        .duration(100)
        .EUt(4)

    console.info('TFC Gurman - TFG recipes loaded: 70+ recipes added for GTCEU machines!')
})

