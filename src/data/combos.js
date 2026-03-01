addCombo([seedOr([paintEverythingGray, paintEverythingNegative]), secretSeedsCount(0, 3, coatEverythingEcho)], [
    { 'categories': ['paint'], 'description': 'All blocks are painted with Echo Coating except for the blocks that outline chunks of land.' },
]);

addCombo([forTheWorthy,remix], [
   { 'categories': ['enemyai'], 'description': 'Mechdusa replaces the Mechanical bosses, and can spawn at night once an altar is broken.' },
]);

addCombo([seedOr([seedAnd([theConstant,seedOr([drunk, forTheWorthy]), seedNot(celebrationMk10)]),graveyardBloodMoonStart]) ], [
    { 'categories': ['location'], 'description': 'Graveyards spawn across the world.' },
]);

addCombo([celebrationMk10, seedNot(theConstant), seedNot(remix)], [
    { 'categories': ['location'], 'description': 'Players spawn on the beach.' },
]);

addCombo([drunk, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Both world evils spawn, and both Demon Altars and Crimson altars appear throughout the world. Both evil Biome Chests appear in the Dungeon.' },
    { 'categories': ['biome'], 'description': 'Only 2/3 as many Bee Hives spawn.' },
    { 'categories': ['biome'], 'description': 'Living Mahogany Trees are much more common.' },
]);

addCombo([remix, seedNot(drunk), seedNot(forTheWorthy)], [
    { 'categories': ['biome'], 'description': 'The Jungle Temple is larger.' },
]);

addCombo([drunk, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Both types of ore spawn in each category.' },
    { 'categories': ['loot'], 'description': 'Moon Lord Legs can spawn in chests.' },
    { 'categories': ['trap'], 'description': 'Wooden Spikes generate 3 layers deep instead of 2.' },
    { 'categories': ['biome', 'enemyspawning'], 'description': 'Enemies are more likely to spawn in Bee Hives. Bee Hives are larger and contain more Larvae.' },
    { 'categories': ['biome'], 'description': 'Marble and Granite biomes switch generation styles.' },
    { 'categories': ['biome'], 'description': 'Tunnels from the Jungle surface to the Underground Jungle do not spawn.' },
]);

addCombo([seedOr([drunk, forTheWorthy]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Red Potion can spawn in chests.' },
]);

addCombo([forTheWorthy], [
    { 'categories': ['player'], 'description': 'Red Potion has beneficial effects.' },
    { 'categories': ['environment'], 'description': 'Trees and cacti generally require fewer hits to destroy.' },
    { 'categories': ['environment'], 'description': 'The player\'s light vision is reduced by 12% in the Jungle Temple and by 6% in the Dungeon' },
    { 'categories': ['weapon'], 'description': 'The Star Cannon and Super Star Shooter only deal 90% damage and their use time is increased by 10%.' },
]);

addCombo([forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Spikes are 3x more common in the Dungeon.' },
]);

addCombo([remix, seedNot(drunk)], [
    { 'categories': ['biome'], 'description': 'Beehives can be larger.' },
]);

addCombo([theConstant, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Wavy caves generate in the Underground and Cavern layer.' },
]);

addCombo([theConstant, seedNot(remix)], [
    { 'categories': ['loot'], 'description': 'Fruit can spawn from pots.' },
]);

addCombo([theConstant, forTheWorthy, seedNot(remix)], [
    { 'categories': ['loot'], 'description': 'The Eater of Worlds spawns every time a Shadow Orb is broken, and the Brain of Cthulhu spawns every time a Crimson Heart is broken.' },
]);


addCombo([theConstant, seedNot(skyblock), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Marble piles generate on the surface.' },
]);

addCombo([theConstant, seedNot(celebrationMk10), seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Wavy caves generate in the Lava Layer.' },
]);

addCombo([drunk], [
    { 'categories': ['moon'], 'description': 'The moon is a smiley face during world generation.' },
    { 'categories': ['player'], 'description': 'Otherworld Music is unlocked.' },
]);

addCombo([drunk, seedNot(remix), seedNot(forTheWorthy)], [
    { 'categories': ['player'], 'description': 'Music defaults to Otherworldly Music.' },
]);

addCombo([drunk, dualDungeons], [
    { 'categories': ['paint'], 'description': 'Dungeon bricks and walls may have different colors.' },
]);

addCombo([drunk, seedNot(remix)], [
    { 'categories': ['background'], 'description': 'Constant falling stars spawn during world generation.' },
]);


addCombo([drunk, theConstant, seedNot(remix)], [
    { 'categories': ['moon'], 'description': 'The moon tries to position itself under the logo during world generation.' },
]);

addCombo([seedOr([drunk, forTheWorthy])], [
    { 'categories': ['biome'], 'description': 'The Jungle Temple is much larger.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': ['loot'], 'description': 'Items in chests spawn with only good prefixes.' },
]);

addCombo([celebrationMk10, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'The Jungle spawns slightly closer to the middle of the world.' },
]);

addCombo([celebrationMk10, seedNot(noTraps), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'Some Rainbow Boulders spawn.' },
]);

addCombo([celebrationMk10, noTraps, secretSeedsCount(4,-1, actuallyNoTraps), seedNot(remix)], [
    { 'categories': ['trap'], 'description': 'Many Rainbow Boulders spawn.' },
]);

addCombo([celebrationMk10, noTraps, secretSeedsCount(4,-1, actuallyNoTraps), seedNot(remix)], [
    { 'categories': ['trap'], 'description': 'A moderate amount of Rainbow Boulders spawn.' },
]);


addCombo([drunk, seedNot(noSurface)], [
    { 'categories': ['townnpc'], 'description': 'The Dungeon Guardian won\'t spawn until 70 ft below the surface.' },
]);

addCombo([seedOr([drunk, celebrationMk10]), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Ocean caves always spawn.' },
]);

addCombo([remix, seedNot(drunk), seedNot(celebrationMk10), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Ocean caves are more common.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock), seedNot(drunk), seedNot(celebrationMk10), seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Most of the world is converted to Jungle.' },
]);

addCombo([notTheBees, seedOr([theConstant, drunk, celebrationMk10]), seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Most of the world is converted to Jungle, except for the middle portion of the world.' },
]);

addCombo([notTheBees, remix], [
    { 'categories': ['biome'], 'description': 'A rectangular strip of hive spawns near the top of the world, stretching across almost the entire world (except the oceans). A strip of Crispy Honey Block spawns underneath that.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)], [
    { 'categories': ['biome'], 'description': 'One ocean is Honey, with its sand converted to Honey Blocks.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'No normal Snow Biome spawns. Instead, snow and ice is placed underneath in large rectangles under the oceans, and can replace the stone around the Shimmer with snow..' },
]);

addCombo([notTheBees, noTraps, seedNot(remix)], [
    { 'categories': ['trap'], 'description': 'Dart traps are replaced with Jungle Temple traps and Spikes are replaced by Wooden Spikes. Jungle Temple traps can be mined without a picksaw.' },
]);

addCombo([seedOr([notTheBees, celebrationMk10]), noTraps], [
    { 'categories': ['trap'], 'description': 'The amount of geysers is reduced.' },
]);

addCombo([remix, drunk, seedOr([seedNot(celebrationMk10), forTheWorthy]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Both crimson and corruption sky islands spawn with flesh and lesion chests.' },
]);

addCombo([remix, seedNot(drunk)], [
    { 'categories': ['biome', 'loot'], 'description': 'Sky islands are evil and have flesh or lesion chests.' },
]);

addCombo([skyblock, seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': ['loot'], 'description': 'The main island has no solidifier.' },
    { 'categories': ['biome'], 'description': 'The Shimmer island does not spawn.' },
]);

addCombo([drunk, skyblock, worldIsInfected], [
    { 'categories': ['biome'], 'description': 'The main island and many other islands are infected with a random world evil.' },
]);

addCombo([seedNot(drunk), skyblock, worldIsInfected], [
    { 'categories': ['biome'], 'description': 'The main island and many other islands are infected with the world evil.' },
]);

addCombo([skyblock, surfaceIsMushrooms], [
    { 'categories': ['biome'], 'description': 'Mushroom islands spawn.' },
]);

addCombo([skyblock, hallowOnTheSurface], [
    { 'categories': ['biome'], 'description': 'Hallow islands spawn.' },
]);

addCombo([skyblock, worldIsFrozen], [
    { 'categories': ['biome'], 'description': 'Frozen islands spawn.' },
]);

addCombo([skyblock, surfaceIsDesert], [
    { 'categories': ['biome'], 'description': 'Desert islands spawn.' },
]);

addCombo([skyblock, noInfection], [
    { 'categories': ['biome'], 'description': 'Extra regular dirt islands spawn.' },
]);

addCombo([seedOr([forTheWorthy, seedAnd([remix, seedNot(celebrationMk10)])]), seedOr([remix, seedNot(notTheBees)]), seedOr([remix, seedNot(drunk), seedOr([celebrationMk10, seedNot(forTheWorthy)])])], [
    { 'categories': ['biome'], 'description': 'Sky islands are corrupted with the world evil.' },
]);

addCombo([drunk, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Snow sky islands and desert sky islands may spawn.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(drunk), seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': ['biome'], 'description': 'A very large number of living trees are added, and can spawn in places they usuall wouldn\'t.' },
]);

addCombo([seedOr([drunk,seedAnd([remix,seedNot(celebrationMk10)])]), seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': ['biome'], 'description': 'There are more Living Trees than usual.' },
]);

addCombo([seedNot(drunk), celebrationMk10, seedOr([seedNot(noSurface), extraLivingTrees])], [
    { 'categories': ['biome'], 'description': 'There are many more Living Trees than usual.' },
]);

addCombo([notTheBees, seedNot(celebrationMk10)], [
    { 'categories': ['biome'], 'description': 'Living Trees can spawn in the Jungle.' },
]);

addCombo([drunk, seedNot(extraLivingTrees)], [
    { 'categories': ['biome'], 'description': 'A somewhat larger number of living trees than usual are added.' },
]);

addCombo([seedNot(drunk), celebrationMk10, seedNot(extraLivingTrees)], [
    { 'categories': ['biome'], 'description': 'A larger number of living trees than usual are added.' },
]);

addCombo([seedNot(skyblock), noTraps, seedOr([celebrationMk10, notTheBees])], [
    { 'categories': ['trap'], 'description': 'Three times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': ['trap'], 'description': 'Fifteen times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'A large number of TnT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), noTraps, celebrationMk10, secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'A reduced amount of TnT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), seedOr([seedNot(noSurface), errorWorld]), celebrationMk10], [
    { 'categories': ['biome'], 'description': 'The maximum number of Enchanted Sword Shrines is doubled, but the probability for one shrine to spawn is halved, except the first one which is guaranteed.' },
]);

addCombo([seedOr([notTheBees, remix])], [
    { 'categories': ['loot'], 'description': 'Water chests can spawn in any liquid, including lava or honey.' },
]);

addCombo([seedOr([skyblock, notTheBees])], [
    { 'categories': ['biome'], 'description': 'Gem caves do not spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(notTheBees)], [
    { 'categories': ['biome'], 'description': '50% more gem caves spawn.' },
]);

addCombo([seedOr([drunk, celebrationMk10])], [
    { 'categories': ['biome'], 'description': 'Gem Trees are much more common.' },
]);

addCombo([seedOr([skyblock, worldIsFrozen, seedAnd([notTheBees, seedNot(remix), seedNot(theConstant)])])], [
    { 'categories': ['biome'], 'description': 'Moss caves do not spawn.' },
]);

addCombo([seedNot(seedOr([skyblock, worldIsFrozen, seedAnd([notTheBees, seedNot(remix), seedNot(theConstant)])])), forTheWorthy], [
    { 'categories': ['biome'], 'description': 'Neon moss caves can be 50% larger.' },
]);

addCombo([remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves spawn in the middle 40% of the world, and are 50% more common.' },
    { 'categories': ['biome'], 'description': '3x as many altars spawn.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': ['biome'], 'description': 'Moss caves can spawn slightly closer to the center of the world.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), seedNot(forTheWorthy), drunk], [
    { 'categories': ['biome'], 'description': 'Moss caves are not restricted to the inner or outer portions of the world.' },
]);

addCombo([notTheBees, theConstant], [
    { 'categories': ['biome'], 'description': 'Moss caves are allowed to spawn in the Jungle.' },
]);

addCombo([seedNot(remix), celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Half of all moss caves are Neon Moss, and twice as many moss caves spawn.' },
]);

addCombo([noTraps, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Twice as many Friendly Boulders can spawn.' },
    { 'categories': ['trap'], 'description': 'Spider Boulders, Ghoulders, and Lava Boulders are more common.' },
   { 'categories': ['trap'], 'description': 'Gas Traps spawn in chests.' },
  { 'categories': ['trap'], 'description': 'Traps can spawn on the surface.' },
]);

addCombo([noTraps], [
  { 'categories': ['enemyspawning'], 'description': 'Dart Trap Slimes are more common.' },
]);

addCombo([seedOr([noTraps,forTheWorthy])], [
  { 'categories': ['enemyai'], 'description': 'Dart Trap Slimes can fire more rapidly.' },
]);

addCombo([seedOr([noTraps, celebrationMk10])], [
    { 'categories': ['trap'], 'description': 'More Bouncy Boulders spawn.' },
]);

addCombo([seedOr([forTheWorthy, noTraps]), seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': '50% more explosive traps spawn.' },
]);

addCombo([seedOr([notTheBees, seedNot(secretSeedsCount(4,-1, actuallyNoTraps))])], [
    { 'categories': ['trap'], 'description': 'No lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps), noTraps], [
    { 'categories': ['trap'], 'description': '5 times as many lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(noTraps), forTheWorthy], [
    { 'categories': ['trap'], 'description': '2 times as many lava traps spawn.' },
]);

addCombo([noTraps, seedNot(notTheBees), seedNot(celebrationMk10)], [
    { 'categories': ['trap'], 'description': 'Traps that are broken by world generation are allowed to remain.' },
]);

addCombo([extraLiquid, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is filled with liquid except for regions marked off with bubble blocks and for space.' },
]);

addCombo([extraLiquid, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Lava fills the Underworld.' },
]);

addCombo([extraLiquid, skyblock], [
    { 'categories': ['biome'], 'description': 'Sky Lakes spawn.' },
]);

addCombo([extraLiquid, extraLivingTrees], [
    { 'categories': ['biome'], 'description': 'Living trees can spawn on sky islands.' },
]);

addCombo([extraLiquid, notTheBees, skyblock], [
    { 'categories': ['biome'], 'description': 'Sky Lakes filled with Honey spawn.' },
]);

addCombo([skyblock, drunk, celebrationMk10], [
    { 'categories': ['biome'], 'description': 'Sky Lakes filled with Shimmer spawn.' },
]);

addCombo([celebrationMk10, remix, seedNot(forTheWorthy), seedNot(drunk)], [
    { 'categories': ['biome'], 'description': 'Sky islands are converted to Hallow.' },
]);

addCombo([celebrationMk10, seedNot(notTheBees), seedNot(drunk)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple is painted with purple tiles and cyan walls.' },
]);

addCombo([celebrationMk10, seedNot(notTheBees), drunk], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple is painted green.' },
]);

addCombo([notTheBees, seedOr([seedNot(theConstant), remix])], [
    { 'categories': ['biome'], 'description': 'Slush blocks are converted to honey.' },
]);

addCombo([notTheBees, remix], [
    { 'categories': ['biome'], 'description': 'Water in the hive/crispy strips turns to honey except for the central portion of the hive strip.' },
]);

addCombo([remix, forTheWorthy], [
    { 'categories': ['biome'], 'description': 'Liquids on the surface turn to lava.' },
]);

addCombo([notTheBees, remix, seedNot(forTheWorthy)], [
    { 'categories': ['biome'], 'description': 'Water on the surface also turns to honey.' },
]);

addCombo([seedNot(notTheBees), remix, seedNot(forTheWorthy), drunk, celebrationMk10], [
    { 'categories': ['biome'], 'description': 'Water on the surface on the Dungeon side turns into Shimmer.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)], [
    { 'categories': ['biome'], 'description': 'Most water in the world turns in to Honey except for the middle 1/6 of the world and the outer 1/6s of the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Some water in the world is converted to Honey.' },
]);

addCombo([seedNot(notTheBees), remix, drunk, celebrationMk10], [
    { 'categories': ['biome'], 'description': 'Some water throughout world is converted to Shimmer.' },
]);

addCombo([seedOr([forTheWorthy,seedNot(celebrationMk10)]), remix], [
    { 'categories': ['biome'], 'description': 'A dead living tree above the dungeon is painted in the color of the surrounding evil.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'All trees are Yellow Willow Trees or Sakura Trees.' },
]);

addCombo([seedNot(celebrationMk10), seedNot(skyblock), seedOr([remix, drunk])], [
    { 'categories': ['biome'], 'description': 'Yellow Willow Trees and Sakura Trees are more common.' },
]);

addCombo([seedNot(notTheBees), seedNot(seedAnd([remix, drunk, celebrationMk10])), forTheWorthy], [
    { 'categories': ['biome'], 'description': 'Some water throughout world is converted to Lava.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10)], [
    { 'categories': ['biome'], 'description': 'Every Underworld House is made of Crispy Honey Block.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10), secretSeedsCount(4,-1, noSpiderNests)], [
    { 'categories': ['biome', 'enemyspawning'], 'description': 'Spider nests spawn across the Underworld. Spiders are 20% less likely to spawn in Underworld Spider Nests compared to regular ones.' },
]);

addCombo([theConstant, secretSeedsCount(4,-1, noSpiderNests)], [
    { 'categories': ['biome'], 'description': 'Spider caves generate on the surface.' },
]);

addCombo([notTheBees, seedOr([theConstant, noTraps])], [
    { 'categories': ['trap'], 'description': 'Spikes are replaced with Wooden Spikes.' },
]);

addCombo([notTheBees, seedOr([theConstant, remix])], [
    { 'categories': ['trap', 'townnpc'], 'description': 'A few Larvae are scattered around the world.' },
]);

addCombo([notTheBees, seedNot(theConstant)], [
    { 'categories': ['biome'], 'description': 'Living Trees are replace by Living Mahogany and Mahogany Leaf Blocks.' },
]);

addCombo([notTheBees, noTraps, seedNot(theConstant), seedNot(remix)], [
    { 'categories': ['trap', 'townnpc'], 'description': 'Very many Larvae are scattered around the world.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), noTraps, remix, seedOr([celebrationMk10, notTheBees])], [
    { 'categories': ['trap'], 'description': 'There are 5 times as many dart traps.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), noTraps, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': ['trap'], 'description': 'There are 100 times as many traps.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), noTraps, seedOr([celebrationMk10,notTheBees]), seedNot(remix)], [
    { 'categories': ['trap'], 'description': 'There are 2 times as many traps.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), noTraps ], [
    { 'categories': ['trap'], 'description': 'There are 5 times as many sand traps.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(noTraps), forTheWorthy ], [
    { 'categories': ['trap'], 'description': 'There are 50% more sand traps.' },
]);

addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), seedOr([noTraps, forTheWorthy])], [
    { 'categories': ['trap'], 'description': 'There are 3 times as many Dead Man\'s Chests.' },
]);


addCombo([seedNot(skyblock), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(noTraps), seedOr([seedNot(notTheBees), remix]), forTheWorthy], [
    { 'categories': ['trap'], 'description': 'There are 50% more traps.' },
]);

addCombo([notTheBees, seedNot(noTraps), seedNot(theConstant), seedNot(remix)], [
    { 'categories': ['trap', 'townnpc'], 'description': 'Many Larvae are scattered around the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), seedNot(forTheWorthy), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Numerous spider nests are added.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A very large number of spider nests are added.' },
]);

addCombo([seedOr([seedNot(notTheBees), celebrationMk10]), secretSeedsCount(4,-1, noSpiderNests), forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The number of Spider Nests is tripled.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': ['biome', 'paint'], 'description': 'The Dungeon is overgrown with Jungle grass and trees. Its walls are painted orange.' },
]);

addCombo([forTheWorthy, seedNot(drunk), seedNot(notTheBees)], [
    { 'categories': ['paint'], 'description': 'Dungeon tiles are painted with a random color.' },
]);

addCombo([seedNot(notTheBees), seedNot(remix), drunk], [
    { 'categories': ['paint'], 'description': 'The Dungeon is painted a somewhat random color dependent on the base color.' },
]);

addCombo([forTheWorthy, seedNot(notTheBees)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple is painted green.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': ['shop'], 'description': 'The Merchant sells Jungle Torches.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(remix)], [
    { 'categories': ['shop'], 'description': 'The merchant sells the Furnace even when not in the Jungle.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': ['shop'], 'description': 'Two extra items are added to the Travelling Merchant\'s shop.' },
]);

addCombo([celebrationMk10, forTheWorthy], [
    { 'categories': ['shop'], 'description': 'An extra item is added to the Travelling Merchant\'s shop.' },
]);

addCombo([seedOr([forTheWorthy, seedNot(celebrationMk10)]), remix], [
    { 'categories': ['shop'], 'description': 'The Dryad does not sell powders.' },
    { 'categories': ['shop'], 'description': 'The Truffle does not sell solution.' },
    { 'categories': ['shop'], 'description': 'The Steampunker does not sell the Clentaminator or any solutions.' },
]);

addCombo([forTheWorthy], [
    { 'categories': ['shop'], 'description': 'The Steampunker, if present in pre-Hardmode, does not sell the Blend-o-matic.' },
    { 'categories': ['loot'], 'description': 'Moon Lord Torso can be found in Locked Gold Chests and Golden Lock Boxes in the Dungeon.' },
   { 'categories': ['trap', 'biome'], 'description': 'Clumps of ash blocks can collapse when mined.' },
   { 'categories': ['enemyspawning'], 'description': 'Enemies spawn 20% more, and 20% more total enemies can spawn.' },
   { 'categories': ['enemyai'], 'description': 'Many bosses have different sizes, mostly being larger.' },
   { 'categories': ['enemyai'], 'description': 'Bosses and enemies have all For the Worth changes to stats and AI, and many bosses reflect Fallen Star projectiles from weapons.' },
   { 'categories': ['player'], 'description': 'Difficulty increases by 1 level. If the game was previously at Master Mode, it is now at Legendary Mode.' },
   { 'categories': ['player'], 'description': 'Using Gills Potion causes the player to drown when outside of water.' },
   { 'categories': ['trap'], 'description': 'Tombstones can damage the player.' },
   { 'categories': ['player'], 'description': 'Blocks take only half as many hits with a pickaxe or drill to break, rounded up.' },
]);

addCombo([seedOr([forTheWorthy,remix])], [
   { 'categories': ['enemyai'], 'description': 'Eater of Worlds are 30% larger.' },
]);

addCombo([forTheWorthy,remix], [
   { 'categories': ['enemyai'], 'description': 'Mechdusa replaces the Mechanical bosses, and can spawn at night once an altar is broken.' },
]);

addCombo([forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'All Obsidian Brick houses are replaced by Hellstone Brick houses.' },
    { 'categories': ['loot'], 'description': 'All Chests, except Chests in the Dungeon, have a 1/15 (6.67%) chance to contain an Angel Statue instead of the first, usually most valuable item in the Chest.' },
]);

addCombo([celebrationMk10], [
    { 'categories': ['shop'], 'description': 'Princess sells the Slime Staff, Flask of Party, and Heart Lantern, as well as Sandstorm in a Bottle while in the Desert and Terragrim during Blood Moon. After pirates are defeated, she sells different pirate items during different moon phases.' },
    { 'categories': ['paint'], 'description': 'Generated trees and mushrooms are painted random colors.' },
    { 'categories': ['enemyspawning'], 'description': 'Fairies are more likely to be pink.' },
    { 'categories': ['loot'], 'description': 'Palm trees drop a bit of extra wood.' },
    { 'categories': ['enemyspawning'], 'description': 'Mimics are more common and Jungle Mimics may spawn in the Jungle.' },
    { 'categories': ['enemyspawning'], 'description': 'Golden slimes may spawn.' },
    { 'categories': ['environment'], 'description': 'Blood Moons and Birthday Parties are more common.' },
    { 'categories': ['enemyspawning'], 'description': 'Fireflies and butterflies are more likely.' },
    { 'categories': ['enemyai'], 'description': 'Many bosses are twice as small.' },
    { 'categories': ['armor'], 'description': 'The Wizard Hat provides an additional summon slot.' },
    { 'categories': ['droprate', 'armor'], 'description': 'Dev Armor sets are 2x as likely to drop.' },
    { 'categories': ['droprate'], 'description': 'Halloween- and Christmas-themed hearts and mana stars can drop all year round.' },
    { 'categories': ['armor'], 'description': 'Fallen stars are painted pink.' },
    { 'categories': ['shop'], 'description': 'The Tax Collector gives twice as much money.' },
    { 'categories': ['shop'], 'description': 'The Rod of Discord is more likely to drop.' },
    { 'categories': ['player'], 'description': 'The player bursts into confetti upon death.' },
    { 'categories': ['player'], 'description': 'Respawn time is cut in half.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy), seedNot(skyblock)], [
    { 'categories': ['enemyspawning'], 'description': 'Fairies are more likely to spawn underground.' },
    { 'categories': ['enemyspawning'], 'description': 'Underground houses have a 50% chance to be converted to rainbow brick.' },
]);

addCombo([celebrationMk10, forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['enemyspawning'], 'description': 'Underground houses are rarely converted to rainbow brick.' },
]);

addCombo([seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': ['enemyspawning'], 'description': 'Skeletron Prime\'s bombs destroy tiles.' },
]);

addCombo([celebrationMk10, theConstant, seedNot(forTheWorthy)], [
    { 'categories': ['player'], 'description': 'Hardcore players qill respawn with less maximum health.' },
]);

addCombo([seedOr([celebrationMk10,theConstant])], [
    { 'categories': ['environment'], 'description': 'Players make Don\'t Starve sounds when killed.' },
]);

addCombo([seedNot(remix), seedNot(noSurface), celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': ['environment'], 'description': 'Coin rain is more likely.' },
]);


addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The Shimmer spawns closer to the surface.' },
    { 'categories': ['loot'], 'description': 'Life crystals are 20% more prevalent.' },
    { 'categories': ['loot'], 'description': 'Water Walking Boots are more likely to spawn in Water Chests.' },
    { 'categories': ['loot'], 'description': '5 times as many The Dirtiest Blocks spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(drunk), seedNot(notTheBees), seedNot(remix)], [
    { 'categories': ['paint'], 'description': 'The Dungeon is painted deep pink, Living Trees, Clouds and Pyramids are painted pink, sand is painted cyan, and the Jungle Temple is painted Purple and Cyan.' },
]);

addCombo([seedOr([noSurface, errorWorld]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Mana crystals spawn as placed objects.' },
]);

addCombo([celebrationMk10, seedOr([noSurface, errorWorld]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': '20% more placed mana crystals spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedOr([errorWorld, seedNot(noSurface)]), seedNot(dualDungeons)], [
    { 'categories': ['biome'], 'description': 'A pyramid spawns in the middle of the Desert.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Pyramid loot always contains the Pharaoh set.' },
    { 'categories': ['biome'], 'description': 'Shimmer can spawn outside of the main Aether.' },
    { 'categories': ['loot'], 'description': 'More buried chests spawn.' },
    { 'categories': ['loot'], 'description': 'The chances for a Lava Charm to be generated in a Chest is increased from 1/20 (5%) to 1/15 (6.67%).' },
   { 'categories': ['loot'], 'description': 'More ore is generated when altars are smashed.' },
]);

addCombo([seedOr([celebrationMk10, rainbowStuff])], [
    { 'categories': ['loot'], 'description': 'Rainbow glowsticks generate.' },
]);

addCombo([seedOr([celebrationMk10, theConstant]) ], [
    { 'categories': ['environment'], 'description': 'Rare clouds are more likely.' },
]);

addCombo([theConstant], [
    { 'categories': ['environment'], 'description': 'Specifically, rare Don\'t Starve clouds are even more likely.' },
    { 'categories': ['environment'], 'description': 'The player takes damage when in the dark.' },
    { 'categories': ['environment'], 'description': 'It will be pitch dark on the surface during normal nights. When a New Moon, a Full Moon, or a Blood Moon occurs, the player will be able to see things normally on the surface.' },
]);

addCombo([forTheWorthy, theConstant ], [
    { 'categories': ['environment'], 'description': 'There is no warning before damage occurs in the darkness.' },
]);

addCombo([theConstant, seedNot(remix), seedNot(forTheWorthy), seedNot(notTheBees), seedNot(notTheBees), seedNot(noTraps)], [
    { 'categories': ['environment'], 'description': 'The world has a sepia shader that can be turned off via the Radio Thing.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(drunk)], [
    { 'categories': ['loot'], 'description': 'Beenades can drop from trees or pots.' },
]);

addCombo([drunk, forTheWorthy, seedNot(remix)], [
    { 'categories': ['environment'], 'description': 'Boulder rain can occur.' },
]);

addCombo([drunk, forTheWorthy, seedNot(remix), theConstant], [
    { 'categories': ['environment'], 'description': 'Boulders are less frequent during Boulder Rain.' },
]);

addCombo([seedNot(remix), theConstant], [
    { 'categories': ['environment'], 'description': 'Rain can turn off torches and campfires.' },
]);


addCombo([theConstant, forTheWorthy, seedNot(remix)], [
    { 'categories': ['environment'], 'description': 'Rain makes water pool on the ground.' },
]);


addCombo([forTheWorthy], [
    { 'categories': ['trap'], 'description': 'Crispy honey block sets the player on fire, and mining it creates lava.' },
]);

addCombo([theConstant], [
    { 'categories': ['shop'], 'description': 'The Travelling Merchant is more likely to sell the Don\'t Starve-theme paintings.' },
   { 'categories': ['loot'], 'description': 'Abigail\'s flower is twice as likely to try to grow.' },
   { 'categories': ['background'], 'description': 'There is a sepia shader during world generation.' },
   { 'categories': ['player'], 'description': 'The player experiences hunger.' },
   { 'categories': ['droprate', 'weapon'], 'description': 'Don\'t Starve items are more likely to drop from enemies.' },
]);

addCombo([theConstant, remix], [
    { 'categories': ['player'], 'description': 'Players get extra time before starving.' },
]);

addCombo([theConstant, seedNot(remix)], [
    { 'categories': ['player'], 'description': 'The player makes Don\'t Starve sounds when hurt.' },
]);

addCombo([forTheWorthy, remix, seedNot(drunk)], [
    { 'categories': ['trap'], 'description': 'Mining snow and slush has a 50% chance of creating water.' },
]);

addCombo([drunk, celebrationMk10, seedNot(remix), seedNot(notTheBees)], [
    { 'categories': ['biome'], 'description': 'Half of the world generates with Shimmer replacing water.' },
    { 'categories': ['biome'], 'description': 'The Dungeon is buried but no tree is visible above it.' },
    { 'categories': ['enemyspawning'], 'description': 'There is no Dungeon Guardian, and Skeletron does not have to be fought to enter the Dungeon.' },
    { 'categories': ['loot'], 'description': 'Palm trees drop triple wood and ash trees drop triple wood.' },
    { 'categories': ['townnpc'], 'description': 'Slimefors is invincible, with maximum health, 99999 defense, and inability to be attacked.' },
    { 'categories': ['music', 'background'], 'description': 'Snow (Otherworldly) will play during world generation, the background will be the Hallow, and heart-shaped clouds will appear.' },
    { 'categories': ['paint'], 'description': 'Sand is painted rainbow and sand walls are ainted black.' },
    { 'categories': ['loot'], 'description': 'Extra gel can drop from slimes.' },
    { 'categories': ['armor', 'weapon'], 'description': 'Ash Wood items are weaker.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['townnpc', 'environment'], 'description': 'A party starts when the game begins. By default, this party has a guide named Andrew, a Steampunker named Whitney, a Princess named Yorai, a Party Girl named Amanda, and a Party Bunny. Any changes to this are listed below.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), forTheWorthy], [
    { 'categories': ['environment', 'townnpc'], 'description': 'Everyone dies when the party ends.' },
]);

addCombo([theConstant, seedNot(remix), celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The Steampunker named Whitney is replaced with a Mechanic called Korrie.' },
]);

addCombo([drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The Party Girl named Amanda is replaced by a Painter named Jim.' },
]);

addCombo([remix, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The Party Bunny is replace by a Diva Slime called Slimestar.' },
]);

addCombo([seedNot(remix), drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The Party Bunny is replace by a Clumsy Slime called Slimefors.' },
]);

addCombo([worldIsInfected], [
    { 'categories': ['townnpc'], 'description': 'A Shimmered Dryad replaces the Guide.' },
]);

addCombo([worldIsInfected, celebrationMk10], [
    { 'categories': ['townnpc'], 'description': 'The Shimmered Dryad\'s name is Lilith.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), vampirism], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by a Zoologist.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), remix], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by a Tax Collector.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), theConstant, drunk], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by a Mechanic.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedNot(theConstant), notTheBees], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by a Merchant.' },
]);

addCombo([celebrationMk10, notTheBees, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The princess named Yorai is replaced by a merchant named Charles.' },
]);

addCombo([celebrationMk10, notTheBees, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['townnpc'], 'description': 'The guide named Andrew is replaced by a Witch Doctor named Victor.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedOr([seedNot(drunk), seedNot(theConstant)]), seedOr([seedNot(notTheBees),theConstant]), forTheWorthy], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by a Demolitionist.' },
]);

addCombo([seedNot(worldIsInfected), seedNot(celebrationMk10), seedNot(vampirism), seedNot(remix), seedNot(theConstant), seedNot(notTheBees), seedNot(forTheWorthy), drunk], [
    { 'categories': ['townnpc'], 'description': 'The Guide is replaced by the Party Girl.' },
]);


addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), vampirism], [
    { 'categories': ['music'], 'description': 'Crimson (Otherworldly) will play during world generation.' },
]);

addCombo([drunk, remix], [
    { 'categories': ['music'], 'description': 'Space (Otherworldly) will play during World Generation.' },
]);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), notTheBees], [
    { 'categories': ['music'], 'description': 'Jungle (Otherworldly) will play during world generation.' },
]);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), seedNot(notTheBees)], [
    { 'categories': ['music'], 'description': 'The Console Title Music will play during world generation.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), seedNot(forTheWorthy), seedNot(theConstant)], [
    { 'categories': ['background'], 'description': 'Clouds during world generation will be replaced with Redigit\'s head.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), forTheWorthy, seedNot(theConstant)], [
    { 'categories': ['background'], 'description': 'Clouds during world generation will be replaced with the Eye of Cthulhu.' },
]);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), theConstant], [
    { 'categories': ['background'], 'description': 'Clouds during world generation will be replaced with Wilson, Willow, Maxwell and Charlie from Don\'t Starve.' },
]);

addCombo([remix], [
    { 'categories': ['background'], 'description': 'The logo flips upside down and rotates during world generation.' },
    { 'categories': ['loot', 'weapon'], 'description': 'The Remix weapon swap effects are in place.' },
    { 'categories': ['shop'], 'description': 'The Remix changes to Pylon placement are in effect.' },
    { 'categories': ['enemyspawning', 'enemyai'], 'description': 'Remix enemy spawn rate changes and stat changes are in effect.' },
    { 'categories': ['loot'], 'description': 'Slimes can spawn holding Fallen Stars.' },
    { 'categories': ['loot'], 'description': 'Shaking Ash Trees in the Underworld can cause Fallen Stars to spawn.' },
    { 'categories': ['environment'], 'description': 'The player can die by going off the top of the map.' },
    { 'categories': ['environment'], 'description': 'Flesh and Lesion blocks count when determining if an Evil biome is present.' },
    { 'categories': ['environment'], 'description': 'Lava now does 200 base contact damage to players, and the duration of the On Fire! debuff is increased to 10.5 / 21 / 26.25 seconds. Additionally, enemies will not take direct contact damage from lava, and will only suffer from the On Fire! debuff for 3 seconds.' },
     { 'categories': ['environment'], 'description': 'Surface gravity is weaker.' },
]);

addCombo([noSurface, seedNot(skyblock), seedOr([seedNot(remix),seedNot(randomSpawn)])], [
    { 'categories': ['location'], 'description': 'Spawn is random and torches are placed around spawn.' },
]);

addCombo([remix, seedNot(randomSpawn)], [
    { 'categories': ['location'], 'description': 'The player spawns in the Underworld.' },
]);


addCombo([noSurface, seedNot(skyblock)], [
    { 'categories': ['environment'], 'description': 'Meteors can fall underground.' },
]);

//logo
addCombo([remix], [
    { 'categories': ['background'], 'description': 'The logo has a boulder as the dot of the \'i\', unless the sun or moon have been grabbed.' },
]);

//logo
addCombo([seedNot(remix), drunk, seedNot(notTheBees)], [
    { 'categories': ['background'], 'description': 'The logo rotates during world generation.' },
]);

addCombo([drunk, seedOr([seedNot(celebrationMk10), notTheBees, remix]), vampirism], [
    { 'categories': ['background'], 'description': 'The background during world generation is the Crimson.' },
]);

addCombo([drunk, seedNot(vampirism), notTheBees], [
    { 'categories': ['background'], 'description': 'The background during world generation is the Jungle.' },
]);

addCombo([drunk, seedNot(vampirism), seedNot(notTheBees), seedOr([remix, seedNot(celebrationMk10)])], [
    { 'categories': ['background'], 'description': 'The background during world generation is a Glowing Mushroom biome.' },
]);

addCombo([notTheBees, seedNot(zenith)], [
    { 'categories': ['text'], 'description': 'All world generation messages are replaced with \'Generating Bees\'.' },
]);

addCombo([drunk, seedNot(forTheWorthy)], [
    { 'categories': ['text'], 'description': 'Random numbers display at the bottom of the screen during world generation, except when placing traps.' },
]);

addCombo([forTheWorthy, seedNot(noTraps)], [
    { 'categories': ['text'], 'description': 'During world generation, description generation is backwards.' },
]);

addCombo([forTheWorthy, noTraps], [
    { 'categories': ['text'], 'description': 'During world generation, description generation is backwards except when traps are placed.' },
]);


addCombo([drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Underground Cabins can spawn with Slime Furniture.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Underground Cabins can spawn with Bamboo or Honey Furniture.' },
]);

addCombo([forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Underground Cabins can spawn with Cactus Furniture.' },
]);

//these two could be combined
addCombo([seedOr([skyblock, roundLandmasses, noSurface, notTheBees]), seedNot(theConstant)], [
    { 'categories': ['biome'], 'description': 'The Oasis mini biome cannot spawn.' },
]);

addCombo([seedOr([skyblock, roundLandmasses, noSurface]), theConstant], [
    { 'categories': ['biome'], 'description': 'The Oasis mini biome cannot spawn.' },
]);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': ['trap'], 'description': 'Spike pits can spawn outside of the dungeon.' },
]);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), notTheBees], [
    { 'categories': ['trap'], 'description': 'Wooden spike pits can spawn outside the Jungle Temple.' },
]);

addCombo([notTheBees], [
    { 'categories': ['loot'], 'description': 'No shell piles can spawn.' },
    { 'categories': ['loot'], 'description': 'Half of fishing attempts in honey will result in water-type fish.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'No thin ice mini-biomes spawn.' },
    { 'categories': ['biome'], 'description': 'No campsites mini-biomes spawn.' },
    { 'categories': ['biome'], 'description': 'No mining explosive mini-biomes spawn.' },
    { 'categories': ['loot'], 'description': 'Half of the time, fishing will ignore the Jungle when calculating the current biome.' },
]);

addCombo([drunk, seedOr([seedNot(celebrationMk10), remix, notTheBees])], [
    { 'categories': ['biome'], 'description': 'A living tree painted brown will spawn over the dungeon.' },
]);

addCombo([drunk, notTheBees], [
    { 'categories': ['biome'], 'description': 'A living tree made of Mahogany will spawn over the dungeon.' },
]);

addCombo([seedOr([notTheBees, noTraps, pooEverywhere]), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'Poo boulders may spawn.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'Boulder piles may spawn.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps), celebrationMk10], [
    { 'categories': ['trap'], 'description': 'Boulder piles have a chance to be Rainbow Boulders.' },
]);


addCombo([drunk, forTheWorthy, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'The generation style and shape of the world evils flips.' },
]);

addCombo([seedNot(skyblock), forTheWorthy, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Mushroom biomes are 50% larger.' },
]);

addCombo([seedOr([seedAnd([forTheWorthy, remix]),noSurface])], [
    { 'categories': ['biome'], 'description': 'The Celestial Pillars can spawn underground.' },
]);

addCombo([theConstant, seedNot(drunk)], [
    { 'categories': ['loot'], 'description': 'Iron and gold will always be chosen as ores.' },
]);

addCombo([drunk, seedOr([seedNot(theConstant),remix]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The Snow and Jungle biomes spawn on the same side of the world.' },
]);

addCombo([celebrationMk10, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The beach is as large as possible.' },
]);

addCombo([seedOr([drunk,surfaceIsDesert]), seedNot(skyblock), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Pyramids are more likely.' },
]);

addCombo([drunk, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The middle portion of the Underworld is lava, with the outer edges having ruined houses.' },
]);

addCombo([celebrationMk10, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Surface tunnels can generate over a wider portion of the surface.' },
]);

addCombo([celebrationMk10, seedNot(theConstant)], [
    { 'categories': ['biome'], 'description': 'World evils avoid the beach more.' },
]);

addCombo([remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is reversed, with the layers using the Remix rules for determining the Surface, Underground, Cavern and Ocean biomes. A Glowing Mushroom layer spawns above the Underworld. The Jungle Temple is on the Surface.' },
    { 'categories': ['biome'], 'description': 'The outer edges of the world are corrupted.' },
    { 'categories': ['biome'], 'description': 'In Hardmode, one of the outer Corruption portions of the world is converted to Hallow.' },
    { 'categories': ['biome'], 'description': 'Attempts to generate herbs during world generation are more frequent.' },
    { 'categories': ['biome'], 'description': 'The middle portion of the Underworld is an ash platform, with the outer edges of the world having ruined houses.' },
    { 'categories': ['biome'], 'description': '50% more surface tunnels spawn.' },
    { 'categories': ['biome'], 'description': 'Sand patches are less common.' },
    { 'categories': ['loot'], 'description': 'The Flower of Fire is replaced by the Unholy Trident in chests.' },
   { 'categories': ['loot'], 'description': 'Pots can contain a Slime holding a Fallen Star.' },
   { 'categories': ['loot'], 'description': 'Rope and Fallen Stars can drop from pots.' },
]);

addCombo([forTheWorthy, seedNot(notTheBees), seedNot(celebrationMk10)], [
    { 'categories': ['biome', 'loot'], 'description': 'Sky islands are evil and have locked chests.' },
]);

addCombo([forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Sky islands have Locked Gold Chests.' },
]);


addCombo([remix, seedNot(drunk), seedNot(forTheWorthy), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Sky islands are evil and have flesh or lesion chests.' },
]);

addCombo([noTraps, secretSeedsCount(4,-1, actuallyNoTraps), forTheWorthy, seedNot(celebrationMk10), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Many Life Crystals become Life Crystal Boulders.' },
]);

addCombo([noTraps, secretSeedsCount(4,-1, actuallyNoTraps), seedOr([seedNot(forTheWorthy), celebrationMk10]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Some Life Crystals become Life Crystal Boulders.' },
]);

addCombo([forTheWorthy, seedOr([seedNot(celebrationMk10), remix])], [
    { 'categories': ['loot'], 'description': 'Broken pots or shaken trees can drop lit bombs.' },
]);

addCombo([forTheWorthy, celebrationMk10, seedNot(remix)], [
    { 'categories': ['loot'], 'description': 'Broken pots or shaken trees can drop happy bombs.' },
]);
