addCombo([seedOr([paintEverythingGray, paintEverythingNegative]), secretSeedsCount(0, 3, coatEverythingEcho)],
    ['All blocks are painted with Echo Coating except for the blocks that outline chunks of land.']
);


addCombo([drunk],
    ['Both world evils spawn.', 'Both types of ore spawn in each category.']
);

addCombo([drunk, seedNot(noSurface)],
    ['The Dungeon Guardian won\'t spawn until 70 ft below the surface.']
);

addCombo([seedOr([drunk, celebrationMk10]), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)],
    ['Ocean caves always spawn.']
);

addCombo([remix, seedNot(drunk), seedNot(celebrationMk10), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)],
    ['Ocean caves are more common.']
);

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock), seedNot(drunk), seedNot(celebrationMk10), seedNot(remix)],
    ['Most of the world is converted to Jungle.']
);

addCombo([notTheBees, seedOr([theConstant, drunk, celebrationMk10]), seedNot(remix), seedNot(skyblock)],
    ['Most of the world is converted to Jungle, except for the middle portion of the world.']
);

addCombo([notTheBees, remix],
    ['A rectangular strip of hive spawns near the top of the world, stretching across almost the entire world (except the oceans). A strip of Crispy Honey Block spawns underneath that.']
);


addCombo([notTheBees, seedNot(theConstant), seedNot(remix)],
    ['One ocean is Honey, with its sand converted to Honey Blocks.']
);

addCombo([notTheBees, noTraps, seedNot(remix)],
    ['Dart traps are replaced with Jungle Temple traps and Spikes are replaced by Wooden Spikes. Jungle Temple traps can be mined without a picksaw.']
);


addCombo([celebrationMk10, noTraps],
    ['Extra rainbow boulders spawn.']
);

addCombo([seedOr([notTheBees, celebrationMk10]), noTraps],
    ['The amount of geysers is reduced.']
);

addCombo([remix, drunk, seedOr([seedNot(celebrationMk10), forTheWorthy])],
    ['Both crimson and corruption sky islands spawn.']
);

addCombo([seedOr([forTheWorthy, seedAnd([remix, seedNot(celebrationMk10)])]), seedOr([remix, seedNot(notTheBees)]), seedOr([remix, seedNot(drunk), seedOr([celebrationMk10, seedNot(forTheWorthy)])])],
    ['Sky islands are corrupted with the world evil.']
);

addCombo([drunk, seedNot(remix)],
    ['Snow sky islands and desert sky islands may spawn.']
);

addCombo([notTheBees, celebrationMk10, seedNot(drunk), seedOr([seedNot(noSurface), extraLivingTrees])],
    ['A very large number of living trees are added, and can spawn in places they usuall wouldn\'t.']
);

addCombo([seedOr([drunk,seedAnd([remix,seedNot(celebrationMk10)])]), seedOr([seedNot(noSurface), extraLivingTrees])],
    ['There are more Living Trees than usual.']
);

addCombo([seedNot(drunk), celebrationMk10, seedOr([seedNot(noSurface), extraLivingTrees])],
    ['There are many more Living Trees than usual.']
);

addCombo([notTheBees, seedNot(celebrationMk10)],
    ['Living Trees can spawn in the Jungle.']
);

addCombo([drunk, seedNot(extraLivingTrees)],
    ['A somewhat larger number of living trees than usual are added.']
);

addCombo([seedNot(drunk), celebrationMk10, seedNot(extraLivingTrees)],
    ['A larger number of living trees than usual are added.']
);

addCombo([seedNot(skyblock), noTraps, seedOr([celebrationMk10, notTheBees])],
    ['Three times as many statues generate.']
);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), seedNot(notTheBees)],
    ['Fifteen times as many statues generate.']
);

addCombo([seedOr([notTheBees, remix])],
    ['Water chests can spawn in any liquid, including lava or honey.']
);

addCombo([seedOr([skyblock, notTheBees])],
    ['Gem caves do not spawn.']
);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(notTheBees)],
    ['50% more gem caves spawn.']
);

addCombo([seedOr([skyblock, notTheBees, worldIsFrozen]), seedNot(remix), seedNot(theConstant)],
    ['Moss caves do not spawn.']
);
addCombo([seedOr([skyblock, worldIsFrozen]), seedOr([remix, theConstant])],
    ['Moss caves do not spawn.']
);

addCombo([notTheBees, theConstant],
    ['Moss caves spawn in the Jungle.']
);

addCombo([celebrationMk10, notTheBees, seedNot(remix)],
    ['The guide named Andrew is replaced by a Witch Doctor named Victor.']
);

addCombo([celebrationMk10, notTheBees, seedNot(remix)],
    ['The princess named Yorai is replaced by a merchant named Charles.']
);

addCombo([seedNot(celebrationMk10), seedNot(worldIsInfected), seedNot(vampirism), seedNot(remix), notTheBees, seedNot(theConstant)],
    ['The guide is replaced by a merchant.']
);

addCombo([seedOr([forTheWorthy, noTraps]), seedNot(notTheBees), seedNot(actuallyNoTraps)],
    ['50% more explosive traps spawn.']
);

addCombo([seedOr([notTheBees, actuallyNoTraps])],
    ['No lava traps spawn.']
);

addCombo([seedNot(notTheBees), seedNot(actuallyNoTraps), noTraps],
    ['5 times as many lava traps spawn.']
);

addCombo([seedNot(notTheBees), seedNot(actuallyNoTraps), seedNot(noTraps), forTheWorthy],
    ['2 times as many lava traps spawn.']
);

addCombo([noTraps, seedNot(notTheBees), seedNot(celebrationMk10)],
    ['Traps that are broken by world generation are allowed to remain.']
);

addCombo([extraLiquid, notTheBees, skyblock],
    ['Sky Lakes filled with Honey spawn.']
);

addCombo([celebrationMk10, remix, seedNot(forTheWorthy), seedNot(drunk)],
    ['Sky islands are converted to Hallow.']
);

addCombo([celebrationMk10, seedNot(notTheBees), seedNot(drunk)],
    ['The Jungle Temple is painted with purple tiles and cyan walls.']
);

addCombo([celebrationMk10, seedNot(notTheBees), drunk],
    ['The Jungle Temple is painted green.']
);

addCombo([notTheBees, seedOr([seedNot(theConstant), remix])],
    ['Slush blocks are converted to honey.']
);

addCombo([notTheBees, remix],
    ['Water in the hive/crispy strips turns to honey except for the central portion of the hive strip.']
);

addCombo([remix, forTheWorthy],
    ['Liquids on the surface turn to honey.']
);

addCombo([notTheBees, remix, seedNot(forTheWorthy)],
    ['Water on the surface also turns to honey.']
);

addCombo([seedNot(notTheBees), remix, seedNot(forTheWorthy), drunk, celebrationMk10],
    ['Water on the surface on the Dungeon side turns into Shimmer.']
);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)],
    ['Most water in the world turns in to Honey except for the middle 1/6 of the world and the outer 1/6s of the world.']
);

addCombo([notTheBees, theConstant, seedNot(remix)],
    ['Some water in the world is converted to Honey.']
);

addCombo([seedNot(notTheBees), remix, drunk, celebrationMk10],
    ['Some water throughout world is converted to Shimmer.']
);

addCombo([seedNot(notTheBees), seedNot(seedAnd([remix, drunk, celebrationMk10])), forTheWorthy],
    ['Some water throughout world is converted to Lava.']
);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10)],
    ['Every Underworld House is made of Crispy Honey Block.', 'Spiders are 20% less likely to spawn in Underworld Spider Nests compared to regular ones.']
);

addCombo([notTheBees, seedOr([theConstant, noTraps])],
    ['Spikes are replaced with Wooden Spikes.']
);

addCombo([notTheBees, seedOr([theConstant, remix])],
    ['A few Larvae are scattered around the world.']
);

addCombo([notTheBees, seedNot(theConstant)],
    ['Living Trees are replace by Living Mahogany and Mahogany Leaf Blocks.']
);

addCombo([notTheBees, noTraps, seedNot(theConstant), seedNot(remix)],
    ['Very many Larvae are scattered around the world.']
);

addCombo([notTheBees, seedNot(noTraps), seedNot(theConstant), seedNot(remix)],
    ['Many Larvae are scattered around the world.']
);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), seedNot(forTheWorthy)],
    ['Numerous spider nests are added.']
);

addCombo([notTheBees, theConstant, seedNot(remix), secretSeedsCount(4,-1, noSpiderNests), forTheWorthy],
    ['A very large number of spider nests are added.']
);

addCombo([notTheBees, seedNot(remix)],
    ['The Dungeon is overgrown with Jungle grass and trees. Its walls are painted orange.']
);

addCombo([forTheWorthy, seedNot(drunk), seedNot(notTheBees)],
    ['Dungeon tiles are painted with a random color.']
);

addCombo([forTheWorthy, seedNot(notTheBees)],
    ['The Jungle Temple is painted green.']
);

addCombo([notTheBees, seedNot(remix)],
    ['The merchant sells Jungle Torches.']
);

addCombo([notTheBees, celebrationMk10, seedNot(remix)],
    ['The merchant sells the Furnace even when not in the Jungle.']
);

addCombo([drunk, celebrationMk10, seedNot(remix), seedNot(notTheBees)],
    ['Half of the world generates with Shimmer replacing water.', 'The Dungeon is buried but no tree is visible above it.', 'There is no Dungeon Guardian, and Skeletron does not have to be fought to enter the Dungeon.', 'Palm trees drop triple wood and ash trees drop triple wood.', 'The Party Girl is replaced by a Painter named Jim', 'Slimefors is invincible, with maximum health, 99999 defense, and inability to be attacked.', 'Snow (Otherworldly) will play during world generation, the background will be the Hallow, and heart-shaped clouds will appear.', 'Sand is painted rainbow and sand walls are ainted black.', 'Extra gel can drop from slimes.']
);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), vampirism],
    ['Crimson (Otherworldly) will play during world generation.']
);

addCombo([drunk, remix],
    ['Space (Otherworldly) will play during World Generation.']
);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), notTheBees],
    ['Jungle (Otherworldly) will play during world generation.']
);

addCombo([drunk, seedNot(remix), seedNot(celebrationMk10), seedNot(vampirism), seedNot(notTheBees)],
    ['The Console Title Music will play during world generation.']
);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), seedNot(forTheWorthy), seedNot(theConstant)],
    ['Clouds during world generation will be replaced with Redigit\'s head.']
);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), forTheWorthy, seedNot(theConstant)],
    ['Clouds during world generation will be replaced with the Eye of Cthulhu.']
);

addCombo([drunk, seedOr([remix, seedNot(celebrationMk10), notTheBees]), theConstant],
    ['Clouds during world generation will be replaced with Wilson, Willow, Maxwell and Charlie from Don\'t Starve.']
);

addCombo([remix],
    ['The logo flips upside down and rotates during world generation.']
);

addCombo([seedNot(remix), drunk, seedNot(notTheBees)],
    ['The logo rotates during world generation.']
);

addCombo([drunk, seedOr([seedNot(celebrationMk10), notTheBees, remix]), vampirism],
    ['The background during world generation is the Crimson.']
);

addCombo([drunk, seedNot(vampirism), notTheBees],
    ['The background during world generation is the Jungle.']
);

addCombo([drunk, seedNot(vampirism), seedNot(notTheBees), seedOr([remix, seedNot(celebrationMk10)])],
    ['The background during world generation is a Glowing Mushroom biome.']
);

addCombo([notTheBees, seedNot(forTheWorthy)],
    ['All world generation messages are replaced with \'Generating Bees\'.']
);

addCombo([drunk, celebrationMk10],
    ['Underground Cabins can spawn with Slime Furniture.']
);

addCombo([notTheBees, celebrationMk10],
    ['Underground Cabins can spawn with Bamboo or Honey Furniture.']
);

addCombo([seedOr([skyblock, roundLandmasses, noSurface, notTheBees]), seedNot(theConstant)],
    ['The Oasis mini biome cannot spawn.']
);

addCombo([seedOr([skyblock, roundLandmasses, noSurface]), theConstant],
    ['The Oasis mini biome cannot spawn.']
);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), seedNot(notTheBees)],
    ['Spike pits can spawn outside of the dungeon.']
);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10), notTheBees],
    ['Wooden spike pits can spawn outside the Jungle Temple.']
);

addCombo([notTheBees],
    ['No shell piles can spawn.', 'Half of fishing attempts in honey will result in water-type fish.']
);

addCombo([notTheBees, seedNot(remix)],
    ['No thin ice mini-biomes spawn.', 'No campsites mini-biomes spawn.', 'No mining explosive mini-biomes spawn.', 'Half of the time, fishing will ignore the Jungle when calculating the current biome.']
);

addCombo ([drunk, seedOr([seedNot(celebrationMk10), remix, notTheBees])],
	['A living tree painted brown will spawn over the dungeon.']
);

addCombo ([drunk, notTheBees],
	['A living tree made of Mahogany will spawn over the dungeon.']
);

addCombo([seedOr([notTheBees, noTraps, pooEverywhere]), secretSeedsCount(4,-1, actuallyNoTraps)],
    ['Poo boulders may spawn.']
);

addCombo([drunk, forTheWorthy, seedNot(remix)],
    ['The generation style and shape of the world evils flips.']
);

addCombo([theConstant, seedNot(drunk)],
    ['Iron and gold will always be chosen as ores.']
);

addCombo([drunk, seedOr([seedNot(theConstant),remix])],
    ['The Snow and Jungle biomes spawn on the same side of the world.']
);

addCombo([seedOr([drunk,surfaceIsDesert]), seedNot(skyblock), seedNot(noSurface)],
    ['Pyramids are more likely.']
);

addCombo([drunk, seedNot(remix)],
    ['The middle portion of the Underworld is lava, with the outer edges having ruined houses.']
);