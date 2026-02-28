addCombo([seedOr([paintEverythingGray, paintEverythingNegative]), secretSeedsCount(0, 3, coatEverythingEcho)], [
    { 'categories': [], 'description': 'All blocks are painted with Echo Coating except for the blocks that outline chunks of land.' },
]);

addCombo([seedOr([seedAnd([theConstant,seedOr([drunk, forTheWorthy]), seedNot(celebrationMk10)]),graveyardBloodMoonStart]) ], [
    { 'categories': [], 'description': 'Graveyards spawn across the world.' },
]);

addCombo([celebrationMk10, seedNot(theConstant), seedNot(remix)], [
    { 'categories': [], 'description': 'Players spawn on the beach.' },
]);

addCombo([drunk, seedNot(skyblock)], [
    { 'categories': [], 'description': 'Both world evils spawn, and both Demon Altars and Crimson altars appear throughout the world. Both evil Biome Chests appear in the Dungeon.' },
    { 'categories': [], 'description': 'Only 2/3 as many Bee Hives spawn.' },
    { 'categories': [], 'description': 'Living Mahogany Trees are much more common.' },
]);

addCombo([remix, seedNot(drunk), seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'The Jungle Temple is larger.' },
]);

addCombo([drunk, seedNot(skyblock)], [
    { 'categories': [], 'description': 'Both types of ore spawn in each category.' },
    { 'categories': [], 'description': 'Moon Lord Legs and Red Potion can spawn in chests.' },
    { 'categories': [], 'description': 'Wooden Spikes generate 3 layers deep instead of 2.' },
    { 'categories': [], 'description': 'Enemies are more likely to spawn in Bee Hives. Bee Hives are larger and contain more Larvae.' },
    { 'categories': [], 'description': 'Marble and Granite biomes switch generation styles.' },
    { 'categories': [], 'description': 'Tunnels from the Jungle surface to the Underground Jungle do not spawn.' },
]);

addCombo([remix, seedNot(drunk)], [
    { 'categories': [], 'description': 'Beehives can be larger.' },
]);

addCombo([theConstant, seedNot(skyblock)], [
    { 'categories': [], 'description': 'Wavy caves generate in the Underground and Cavern layer.' },
]);

addCombo([theConstant, seedNot(celebrationMk10), seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Wavy caves generate in the Lava Layer.' },
]);

addCombo([drunk], [
    { 'categories': [], 'description': 'The moon is a smiley face during world generation.' },
    { 'categories': [], 'description': 'Otherworld Music is unlocked.' },
]);

addCombo([drunk, seedNot(remix), seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'Music defaults to Otherworldly Music.' },
]);

addCombo([drunk, dualDungeons], [
    { 'categories': [], 'description': 'Dungeon bricks and walls may have different colors.' },
]);

addCombo([drunk, seedNot(remix)], [
    { 'categories': [], 'description': 'Constant falling stars spawn during world generation.' },
]);


addCombo([drunk, theConstant, seedNot(remix)], [
    { 'categories': [], 'description': 'The moon tries to position itself under the logo during world generation.' },
]);

addCombo([seedOr([drunk, forTheWorthy])], [
    { 'categories': [], 'description': 'The Jungle Temple is much larger.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'Items in chests spawn with only good prefixes.' },
]);

addCombo([celebrationMk10, seedNot(remix)], [
    { 'categories': [], 'description': 'The Jungle spawns slightly closer to the middle of the world.' },
]);

addCombo([celebrationMk10, seedNot(noTraps), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'Some Rainbow Boulders spawn.' },
]);

addCombo([celebrationMk10, noTraps, secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'Many Rainbow Boulders spawn.' },
]);

addCombo([drunk, seedNot(noSurface)], [
    { 'categories': [], 'description': 'The Dungeon Guardian won\'t spawn until 70 ft below the surface.' },
]);

addCombo([seedOr([drunk, celebrationMk10]), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': [], 'description': 'Ocean caves always spawn.' },
]);

addCombo([remix, seedNot(drunk), seedNot(celebrationMk10), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': [], 'description': 'Ocean caves are more common.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock), seedNot(drunk), seedNot(celebrationMk10), seedNot(remix)], [
    { 'categories': [], 'description': 'Most of the world is converted to Jungle.' },
]);

addCombo([notTheBees, seedOr([theConstant, drunk, celebrationMk10]), seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Most of the world is converted to Jungle, except for the middle portion of the world.' },
]);

addCombo([notTheBees, remix], [
    { 'categories': [], 'description': 'A rectangular strip of hive spawns near the top of the world, stretching across almost the entire world (except the oceans). A strip of Crispy Honey Block spawns underneath that.' },
]);


addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)], [
    { 'categories': [], 'description': 'One ocean is Honey, with its sand converted to Honey Blocks.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix)], [
    { 'categories': [], 'description': 'No normal Snow Biome spawns. Instead, snow and ice is placed underneath in large rectangles under the oceans, and can replace the stone around the Shimmer with snow..' },
]);


addCombo([notTheBees, noTraps, seedNot(remix)], [
    { 'categories': [], 'description': 'Dart traps are replaced with Jungle Temple traps and Spikes are replaced by Wooden Spikes. Jungle Temple traps can be mined without a picksaw.' },
]);

addCombo([seedOr([notTheBees, celebrationMk10]), noTraps], [
    { 'categories': [], 'description': 'The amount of geysers is reduced.' },
]);

addCombo([remix, drunk, seedOr([seedNot(celebrationMk10), forTheWorthy]), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Both crimson and corruption sky islands spawn with flesh and lesion chests.' },
]);

addCombo([remix, seedNot(drunk)], [
    { 'categories': [], 'description': 'Sky islands are evil and have flesh or lesion chests.' },
]);

addCombo([skyblock, seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': [], 'description': 'The main island has no solidifier.' },
    { 'categories': [], 'description': 'The Shimmer island does not spawn.' },
]);

addCombo([drunk, skyblock, worldIsInfected], [
    { 'categories': [], 'description': 'The main island and many other islands are infected with a random world evil.' },
]);

addCombo([seedNot(drunk), skyblock, worldIsInfected], [
    { 'categories': [], 'description': 'The main island and many other islands are infected with the world evil.' },
]);

addCombo([skyblock, surfaceIsMushrooms], [
    { 'categories': [], 'description': 'Mushroom islands spawn.' },
]);

addCombo([skyblock, hallowOnTheSurface], [
    { 'categories': [], 'description': 'Hallow islands spawn.' },
]);

addCombo([skyblock, worldIsFrozen], [
    { 'categories': [], 'description': 'Frozen islands spawn.' },
]);

addCombo([skyblock, surfaceIsDesert], [
    { 'categories': [], 'description': 'Desert islands spawn.' },
]);

addCombo([skyblock, noInfection], [
    { 'categories': [], 'description': 'Extra regular dirt islands spawn.' },
]);

addCombo([seedOr([forTheWorthy, seedAnd([remix, seedNot(celebrationMk10)])]), seedOr([remix, seedNot(notTheBees)]), seedOr([remix, seedNot(drunk), seedOr([celebrationMk10, seedNot(forTheWorthy)])])], [
    { 'categories': [], 'description': 'Sky islands are corrupted with the world evil.' },
]);

addCombo([drunk, seedNot(remix)], [
    { 'categories': [], 'description': 'Snow sky islands and desert sky islands may spawn.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(drunk), seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': [], 'description': 'A very large number of living trees are added, and can spawn in places they usuall wouldn\'t.' },
]);

addCombo([seedOr([drunk,seedAnd([remix,seedNot(celebrationMk10)])]), seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': [], 'description': 'There are more Living Trees than usual.' },
]);

addCombo([seedNot(drunk), celebrationMk10, seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': [], 'description': 'There are many more Living Trees than usual.' },
]);

addCombo([notTheBees, seedNot(celebrationMk10)], [
    { 'categories': [], 'description': 'Living Trees can spawn in the Jungle.' },
]);

addCombo([drunk, seedNot(extraLivingTrees)], [
    { 'categories': [], 'description': 'A somewhat larger number of living trees than usual are added.' },
]);

addCombo([seedNot(drunk), celebrationMk10, seedNot(extraLivingTrees)], [
    { 'categories': [], 'description': 'A larger number of living trees than usual are added.' },
]);

addCombo([seedNot(skyblock), noTraps, seedOr([celebrationMk10, notTheBees])], [
    { 'categories': [], 'description': 'Three times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': [], 'description': 'Fifteen times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'A large number of TnT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), noTraps, celebrationMk10, secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'A reduced amount of TnT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), seedOr([seedNot(noSurface), errorWorld]), celebrationMk10], [
    { 'categories': [], 'description': 'The maximum number of Enchanted Sword Shrines is doubled, but the probability for one shrine to spawn is halved, except the first one which is guaranteed.' },
]);

addCombo([seedOr([notTheBees, remix])], [
    { 'categories': [], 'description': 'Water chests can spawn in any liquid, including lava or honey.' },
]);

addCombo([seedOr([skyblock, notTheBees])], [
    { 'categories': [], 'description': 'Gem caves do not spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(notTheBees)], [
    { 'categories': [], 'description': '50% more gem caves spawn.' },
]);

addCombo([seedOr([drunk, celebrationMk10])], [
    { 'categories': [], 'description': 'Gem Trees are much more common.' },
]);

addCombo([seedOr([skyblock, worldIsFrozen, seedAnd([notTheBees, seedNot(remix), seedNot(theConstant)])])], [
    { 'categories': [], 'description': 'Moss caves do not spawn.' },
]);

addCombo([remix, seedNot(skyblock)], [
    { 'categories': [], 'description': 'Moss caves spawn in the middle 40% of the world, and are 50% more common.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': [], 'description': 'Moss caves can spawn slightly closer to the center of the world.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), seedNot(forTheWorthy), drunk], [
    { 'categories': [], 'description': 'Moss caves are not restricted to the inner or outer portions of the world.' },
]);

addCombo([notTheBees, theConstant], [
    { 'categories': [], 'description': 'Moss caves are allowed to spawn in the Jungle.' },
]);

addCombo([seedNot(remix), celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'Half of all moss caves are Neon Moss, and twice as many moss caves spawn.' },
]);


addCombo([seedOr([forTheWorthy, noTraps]), seedNot(notTheBees), seedNot(actuallyNoTraps)], [
    { 'categories': [], 'description': '50% more explosive traps spawn.' },
]);

addCombo([seedOr([notTheBees, actuallyNoTraps])], [
    { 'categories': [], 'description': 'No lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), seedNot(actuallyNoTraps), noTraps], [
    { 'categories': [], 'description': '5 times as many lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), seedNot(actuallyNoTraps), seedNot(noTraps), forTheWorthy], [
    { 'categories': [], 'description': '2 times as many lava traps spawn.' },
]);

addCombo([noTraps, seedNot(notTheBees), seedNot(celebrationMk10)], [
    { 'categories': [], 'description': 'Traps that are broken by world generation are allowed to remain.' },
]);

addCombo([extraLiquid, skyblock], [
    { 'categories': [], 'description': 'Sky Lakes spawn.' },
]);

addCombo([extraLiquid, extraLivingTrees], [
    { 'categories': [], 'description': 'Living trees can spawn on sky islands.' },
]);

addCombo([extraLiquid, notTheBees, skyblock], [
    { 'categories': [], 'description': 'Sky Lakes filled with Honey spawn.' },
]);

addCombo([skyblock, drunk, celebrationMk10], [
    { 'categories': [], 'description': 'Sky Lakes filled with Shimmer spawn.' },
]);

addCombo([celebrationMk10, remix, seedNot(forTheWorthy), seedNot(drunk)], [
    { 'categories': [], 'description': 'Sky islands are converted to Hallow.' },
]);

addCombo([celebrationMk10, seedNot(notTheBees), seedNot(drunk)], [
    { 'categories': [], 'description': 'The Jungle Temple is painted with purple tiles and cyan walls.' },
]);

addCombo([celebrationMk10, seedNot(notTheBees), drunk], [
    { 'categories': [], 'description': 'The Jungle Temple is painted green.' },
]);

addCombo([notTheBees, seedOr([seedNot(theConstant), remix])], [
    { 'categories': [], 'description': 'Slush blocks are converted to honey.' },
]);

addCombo([notTheBees, remix], [
    { 'categories': [], 'description': 'Water in the hive/crispy strips turns to honey except for the central portion of the hive strip.' },
]);

addCombo([remix, forTheWorthy], [
    { 'categories': [], 'description': 'Liquids on the surface turn to honey.' },
]);

addCombo([notTheBees, remix, seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'Water on the surface also turns to honey.' },
]);

addCombo([seedNot(notTheBees), remix, seedNot(forTheWorthy), drunk, celebrationMk10], [
    { 'categories': [], 'description': 'Water on the surface on the Dungeon side turns into Shimmer.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)], [
    { 'categories': [], 'description': 'Most water in the world turns in to Honey except for the middle 1/6 of the world and the outer 1/6s of the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix)], [
    { 'categories': [], 'description': 'Some water in the world is converted to Honey.' },
]);

addCombo([seedNot(notTheBees), remix, drunk, celebrationMk10], [
    { 'categories': [], 'description': 'Some water throughout world is converted to Shimmer.' },
]);

addCombo([seedOr([forTheWorthy,seedNot(celebrationMk10)]), remix], [
    { 'categories': [], 'description': 'A dead living tree above the dungeon is painted in the color of the surrounding evil.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'All trees are Yellow Willow Trees or Sakura Trees.' },
]);

addCombo([seedNot(celebrationMk10), seedNot(skyblock), seedOr([remix, drunk])], [
    { 'categories': [], 'description': 'Yellow Willow Trees and Sakura Trees are more common.' },
]);

addCombo([seedNot(notTheBees), seedNot(seedAnd([remix, drunk, celebrationMk10])), forTheWorthy], [
    { 'categories': [], 'description': 'Some water throughout world is converted to Lava.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10)], [
    { 'categories': [], 'description': 'Every Underworld House is made of Crispy Honey Block.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10), secretSeedsCount(4,-1, noSpiderNests)], [
    { 'categories': [], 'description': 'Spider nests spawn across the Underworld. Spiders are 20% less likely to spawn in Underworld Spider Nests compared to regular ones.' },
]);

addCombo([notTheBees, seedOr([theConstant, noTraps])], [
    { 'categories': [], 'description': 'Spikes are replaced with Wooden Spikes.' },
]);

addCombo([notTheBees, seedOr([theConstant, remix])], [
    { 'categories': [], 'description': 'A few Larvae are scattered around the world.' },
]);

addCombo([notTheBees, seedNot(theConstant)], [
    { 'categories': [], 'description': 'Living Trees are replace by Living Mahogany and Mahogany Leaf Blocks.' },
]);

addCombo([notTheBees, noTraps, seedNot(theConstant), seedNot(remix)], [
    { 'categories': [], 'description': 'Very many Larvae are scattered around the world.' },
]);

addCombo([notTheBees, seedNot(noTraps), seedNot(theConstant), seedNot(remix)], [
    { 'categories': [], 'description': 'Many Larvae are scattered around the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), seedNot(forTheWorthy), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Numerous spider nests are added.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), forTheWorthy, seedNot(skyblock)], [
    { 'categories': [], 'description': 'A very large number of spider nests are added.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': [], 'description': 'The Dungeon is overgrown with Jungle grass and trees. Its walls are painted orange.' },
]);

addCombo([forTheWorthy, seedNot(drunk), seedNot(notTheBees)], [
    { 'categories': [], 'description': 'Dungeon tiles are painted with a random color.' },
]);

addCombo([seedNot(notTheBees), seedNot(remix), drunk], [
    { 'categories': [], 'description': 'The Dungeon is painted a somewhat random color dependent on the base color.' },
]);

addCombo([forTheWorthy, seedNot(notTheBees)], [
    { 'categories': [], 'description': 'The Jungle Temple is painted green.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': [], 'description': 'The Merchant sells Jungle Torches.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(remix)], [
    { 'categories': [], 'description': 'The merchant sells the Furnace even when not in the Jungle.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'Two extra items are added to the Travelling Merchant\'s shop.' },
]);

addCombo([celebrationMk10, forTheWorthy], [
    { 'categories': [], 'description': 'An extra item is added to the Travelling Merchant\'s shop.' },
]);

addCombo([seedOr([forTheWorthy, seedNot(celebrationMk10)]), remix], [
    { 'categories': [], 'description': 'The Dryad does not sell powders.' },
    { 'categories': [], 'description': 'The Truffle does not sell solution.' },
    { 'categories': [], 'description': 'The Steampunker does not sell the Clentaminator or any solutions.' },
]);

addCombo([forTheWorthy], [
    { 'categories': [], 'description': 'The Steampunker, if present in pre-Hardmode, does not sell the Blend-o-matic.' },
]);

addCombo([celebrationMk10], [
    { 'categories': [], 'description': 'Princess sells the Slime Staff, Flask of Party, and Heart Lantern, as well as Sandstorm in a Bottle while in the Desert and Terragrim during Blood Moon. After pirates are defeated, she sells different pirate items during different moon phases.' },
    { 'categories': [], 'description': 'Generated trees and mushrooms are painted random colors.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Shimmer spawns closer to the surface.' },
    { 'categories': [], 'description': 'Life crystals are 20% more prevalent.' },
    { 'categories': [], 'description': 'Water Walking Boots are more likely to spawn in Water Chests.' },
    { 'categories': [], 'description': '5 times as many The Dirtiest Blocks spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(drunk), seedNot(notTheBees), seedNot(remix)], [
    { 'categories': [], 'description': 'The Dungeon is painted deep pink, Living Trees, Clouds and Pyramids are painted pink, sand is painted cyan, and the Jungle Temple is painted Purple and Cyan.' },
]);

addCombo([seedOr([noSurface, errorWorld]), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Mana crystals spawn as placed objects.' },
]);

addCombo([celebrationMk10, seedOr([noSurface, errorWorld]), seedNot(skyblock)], [
    { 'categories': [], 'description': '20% more placed mana crystals spawn.' },
]);


addCombo([celebrationMk10, seedNot(skyblock), seedOr([errorWorld, seedNot(noSurface)]), seedNot(dualDungeons)], [
    { 'categories': [], 'description': 'A pyramid spawns in the middle of the Desert.' },
]);


addCombo([seedOr([celebrationMk10, rainbowStuff])], [
    { 'categories': [], 'description': 'Rainbow glowsticks generate.' },
]);


addCombo([seedOr([celebrationMk10, theConstant]) ], [
    { 'categories': [], 'description': 'Rare clouds are more likely.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(drunk)], [
    { 'categories': [], 'description': 'Beenades can drop from trees or pots.' },
]);

addCombo([drunk, forTheWorthy, seedNot(remix)], [
    { 'categories': [], 'description': 'Boulder rain can occur.' },
]);

addCombo([theConstant, forTheWorthy, seedNot(remix)], [
    { 'categories': [], 'description': 'Rain makes water pool on the ground.' },
]);


addCombo([forTheWorthy], [
    { 'categories': [], 'description': 'Mining crispy honey block creates lava.' },
]);


addCombo([forTheWorthy, remix, seedNot(drunk)], [
    { 'categories': [], 'description': 'Mining snow and slush has a 50% chance of creating water.' },
]);

addCombo([drunk, celebrationMk10, seedNot(remix), seedNot(notTheBees)], [
    { 'categories': [], 'description': 'Half of the world generates with Shimmer replacing water.' },
    { 'categories': [], 'description': 'The Dungeon is buried but no tree is visible above it.' },
    { 'categories': [], 'description': 'There is no Dungeon Guardian, and Skeletron does not have to be fought to enter the Dungeon.' },
    { 'categories': [], 'description': 'Palm trees drop triple wood and ash trees drop triple wood.' },
    { 'categories': [], 'description': 'Slimefors is invincible, with maximum health, 99999 defense, and inability to be attacked.' },
    { 'categories': [], 'description': 'Snow (Otherworldly) will play during world generation, the background will be the Hallow, and heart-shaped clouds will appear.' },
    { 'categories': [], 'description': 'Sand is painted rainbow and sand walls are ainted black.' },
    { 'categories': [], 'description': 'Extra gel can drop from slimes.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'A party starts when the game begins. By default, this party has a guide named Andrew, a Steampunker named Whitney, a Princess named Yorai, a Party Girl named Amanda, and a Party Bunny. Any changes to this are listed below.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), forTheWorthy], [
    { 'categories': [], 'description': 'Everyone dies when the party ends.' },
]);

addCombo([theConstant, seedNot(remix), celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Steampunker named Whitney is replaced with a Mechanic called Korrie.' },
]);

addCombo([drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Party Girl named Amanda is replaced by a Painter named Jim.' },
]);

addCombo([remix, celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Party Bunny is replace by a Diva Slime called Slimestar.' },
]);

addCombo([seedNot(remix), drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Party Bunny is replace by a Clumsy Slime called Slimefors.' },
]);

addCombo([worldIsInfected], [
    { 'categories': [], 'description': 'A Shimmered Dryad replaces the Guide.' },
]);

addCombo([worldIsInfected, celebrationMk10], [
    { 'categories': [], 'description': 'The Shimmered Dryad\'s name is Lilith.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), vampirism], [
    { 'categories': [], 'description': 'The Guide is replaced by a Zoologist.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), remix], [
    { 'categories': [], 'description': 'The Guide is replaced by a Tax Collector.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), theConstant, drunk], [
    { 'categories': [], 'description': 'The Guide is replaced by a Mechanic.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedNot(theConstant), notTheBees], [
    { 'categories': [], 'description': 'The Guide is replaced by a Merchant.' },
]);

addCombo([celebrationMk10, notTheBees, seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'The princess named Yorai is replaced by a merchant named Charles.' },
]);

addCombo([celebrationMk10, notTheBees, seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'The guide named Andrew is replaced by a Witch Doctor named Victor.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedOr([seedNot(drunk), seedNot(theConstant)]), seedOr([seedNot(notTheBees),theConstant]), forTheWorthy], [
    { 'categories': [], 'description': 'The Guide is replaced by a Demolitionist.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedNot(theConstant), seedNot(notTheBees), seedNot(forTheWorthy), drunk], [
    { 'categories': [], 'description': 'The Guide is replaced by the Party Girl.' },
]);


addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), vampirism], [
    { 'categories': [], 'description': 'Crimson (Otherworldly) will play during world generation.' },
]);

addCombo([drunk, remix], [
    { 'categories': [], 'description': 'Space (Otherworldly) will play during World Generation.' },
]);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), notTheBees], [
    { 'categories': [], 'description': 'Jungle (Otherworldly) will play during world generation.' },
]);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), seedNot(notTheBees)], [
    { 'categories': [], 'description': 'The Console Title Music will play during world generation.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), seedNot(forTheWorthy), seedNot(theConstant)], [
    { 'categories': [], 'description': 'Clouds during world generation will be replaced with Redigit\'s head.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), forTheWorthy, seedNot(theConstant)], [
    { 'categories': [], 'description': 'Clouds during world generation will be replaced with the Eye of Cthulhu.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), theConstant], [
    { 'categories': [], 'description': 'Clouds during world generation will be replaced with Wilson, Willow, Maxwell and Charlie from Don\'t Starve.' },
]);

addCombo([remix], [
    { 'categories': [], 'description': 'The logo flips upside down and rotates during world generation.' },
]);

addCombo([seedNot(remix), drunk, seedNot(notTheBees)], [
    { 'categories': [], 'description': 'The logo rotates during world generation.' },
]);

addCombo([drunk, seedOr([seedNot(celebrationMk10), notTheBees, remix]), vampirism], [
    { 'categories': [], 'description': 'The background during world generation is the Crimson.' },
]);

addCombo([drunk, seedNot(vampirism), notTheBees], [
    { 'categories': [], 'description': 'The background during world generation is the Jungle.' },
]);

addCombo([drunk, seedNot(vampirism), seedNot(notTheBees), seedOr([remix, seedNot(celebrationMk10)])], [
    { 'categories': [], 'description': 'The background during world generation is a Glowing Mushroom biome.' },
]);

addCombo([notTheBees, seedNot(Zenith)], [
    { 'categories': [], 'description': 'All world generation messages are replaced with \'Generating Bees\'.' },
]);

addCombo([drunk, seedNot(forTheWorthy)], [
    { 'categories': [], 'description': 'Random numbers display at the bottom of the screen during world generation, except when placing traps.' },
]);

addCombo([forTheWorthy, seedNot(noTraps)], [
    { 'categories': [], 'description': 'description generation is backwards.' },
]);

addCombo([forTheWorthy, noTraps], [
    { 'categories': [], 'description': 'description generation is backwards except when traps are placed.' },
]);


addCombo([drunk, celebrationMk10], [
    { 'categories': [], 'description': 'Underground Cabins can spawn with Slime Furniture.' },
]);

addCombo([notTheBees, celebrationMk10], [
    { 'categories': [], 'description': 'Underground Cabins can spawn with Bamboo or Honey Furniture.' },
]);

addCombo([seedOr([skyblock, roundLandmasses, noSurface, notTheBees]), seedNot(theConstant)], [
    { 'categories': [], 'description': 'The Oasis mini biome cannot spawn.' },
]);

addCombo([seedOr([skyblock, roundLandmasses, noSurface]), theConstant], [
    { 'categories': [], 'description': 'The Oasis mini biome cannot spawn.' },
]);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': [], 'description': 'Spike pits can spawn outside of the dungeon.' },
]);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), notTheBees], [
    { 'categories': [], 'description': 'Wooden spike pits can spawn outside the Jungle Temple.' },
]);

addCombo([notTheBees], [
    { 'categories': [], 'description': 'No shell piles can spawn.' },
    { 'categories': [], 'description': 'Half of fishing attempts in honey will result in water-type fish.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': [], 'description': 'No thin ice mini-biomes spawn.' },
    { 'categories': [], 'description': 'No campsites mini-biomes spawn.' },
    { 'categories': [], 'description': 'No mining explosive mini-biomes spawn.' },
    { 'categories': [], 'description': 'Half of the time, fishing will ignore the Jungle when calculating the current biome.' },
]);

addCombo ([drunk, seedOr([seedNot(celebrationMk10), remix, notTheBees])],
	['A living tree painted brown will spawn over the dungeon.']
);

addCombo ([drunk, notTheBees],
	['A living tree made of Mahogany will spawn over the dungeon.']
);

addCombo([seedOr([notTheBees, noTraps, pooEverywhere]), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'Poo boulders may spawn.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': [], 'description': 'Boulder piles may spawn.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps), celebrationMk10], [
    { 'categories': [], 'description': 'Boulder piles have a chance to be Rainbow Boulders.' },
]);


addCombo([drunk, forTheWorthy, seedNot(remix)], [
    { 'categories': [], 'description': 'The generation style and shape of the world evils flips.' },
]);

addCombo([theConstant, seedNot(drunk)], [
    { 'categories': [], 'description': 'Iron and gold will always be chosen as ores.' },
]);

addCombo([drunk, seedOr([seedNot(theConstant),remix]), seedNot(skyblock)], [
    { 'categories': [], 'description': 'The Snow and Jungle biomes spawn on the same side of the world.' },
]);

addCombo([celebrationMk10, seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'The beach is as large as possible.' },
]);

addCombo([seedOr([drunk,surfaceIsDesert]), seedNot(skyblock), seedNot(noSurface)], [
    { 'categories': [], 'description': 'Pyramids are more likely.' },
]);

addCombo([drunk, seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'The middle portion of the Underworld is lava, with the outer edges having ruined houses.' },
]);

addCombo([celebrationMk10, seedNot(remix), seedNot(skyblock)], [
    { 'categories': [], 'description': 'Surface tunnels can generate over a wider portion of the surface.' },
]);

addCombo([celebrationMk10, seedNot(theConstant)], [
    { 'categories': [], 'description': 'World evils avoid the beach more.' },
]);

addCombo([remix, seedNot(skyblock)], [
    { 'categories': [], 'description': 'The middle portion of the Underworld is an ash platform, with the outer edges of the world having ruined houses.' },
    { 'categories': [], 'description': '50% more surface tunnels spawn.' },
]);
