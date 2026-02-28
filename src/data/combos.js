addCombo([seedOr([paintEverythingGray, paintEverythingNegative]), secretSeedsCount(0, 3, coatEverythingEcho)],
    ['All blocks are painted with Echo Coating except for the blocks that outline chunks of land.']
);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix)],
    ['One ocean is honey.']
);

addCombo([notTheBees, noTraps, seedNot(remix)],
    ['Dart traps are replaced with Jungle Temple traps and Spikes are replaced by Wooden Spikes.']
);

addCombo([seedOr([notTheBees, noTraps, pooEverywhere]), seedNot(actuallyNoTraps), secretSeedsCount(0,3, actuallyNoTraps)],
    ['Poo boulders may spawn.']
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

addCombo([drunk, seedNot(remix)],
    ['Snow sky islands and desert sky islands may spawn.']
);

addCombo([notTheBees, celebrationMk10, seedNot(drunk), seedNot(extraLivingTrees)],
    ['A very large number of living trees are added, and can spawn in places they usuall wouldn\'t.']
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

addCombo([seedOr([skyblock, roundLandmasses, noSurface, notTheBees]), seedNot(theConstant)],
    ['The Oasis mini biome cannot spawn.']
);

addCombo([seedOr([skyblock, roundLandmasses, noSurface]), theConstant],
    ['The Oasis mini biome cannot spawn.']
);

addCombo([noTraps, forTheWorthy, seedNot(celebrationMk10)],
    ['Spike caves can spawn.']
);

addCombo([notTheBees],
    ['No shell piles can spawn.']
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

addCombo([notTheBees, seedNot(remix)],
    ['No thin ice mini-biomes spawn.', 'No campsites mini-biomes spawn.', 'No mining explosive mini-biomes spawn.']
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

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock), seedNot(drunk), seedNot(celebrationMk10), seedNot(remix)],
    ['Most of the world is converted to Jungle.']
);

addCombo([notTheBees, seedOr([theConstant, drunk, celebrationMk10]), seedNot(remix), seedNot(skyblock)],
    ['Most of the world is converted to Jungle, except for the middle portion of the world.']
);

addCombo([notTheBees, remix],
    ['A rectangular strip of hive spawns near the top of the world, stretching across almost the entire world (except the oceans). A strip of Crispy Honey Block spawns underneath that.']
);

addCombo([notTheBees, seedOr(seedNot(theConstant), remix)],
    ['Slush blocks are converted to honey.']
);