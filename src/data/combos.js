addCombo([skyblock], [
   { 'categories': ['biome'], 'description': 'The world is almost entirely empty. The player spawns on a Sky Island.'},
]);

 addCombo([vampirism, seedNot(noSurface)], [
   { 'categories': ['player'], 'description': 'The player burns upon exposure to sunlight according to the rules of the What a horrible night to have a curse rules.' },
]);

 addCombo([vampirism], [
   { 'categories': ['player'], 'description': 'Fire does far more damage to the player than usual.' },
]);
 
addCombo([dualDungeons, seedNot(skyblock)], [
   { 'categories': ['biome', 'environment'], 'description': 'Two dungeons in the Double Daring Dangers style spawn encasing many of the world\'s biomes. Several layers have impenetrable tiles until their layer boss is defeated.' },
   { 'categories': ['biome'], 'description': 'Any pyramids in the world have no tunnels coming out of them.' },
   { 'categories': ['enemyspawning'], 'description': 'The Dual Dungeons enemy spawning rules are in effect. Enemies that spawn on screen have a cloud effect when they appear.' },
   { 'categories': ['biome'], 'description': 'The number of altars is halved.' },
   { 'categories': ['biome'], 'description': 'The Hardmode V of Hallow and infection does not generate.' },
]);


addCombo([skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms]) ], [
   { 'categories': ['biome'], 'description': 'Extra sky islands spawn based on the world size. Life Crystals may spawn on Cavern or lower islands.'},
]);

addCombo([skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms]), noSurface ], [
   { 'categories': ['biome'], 'description': 'Mana crystals may spawn on Cavern or lower islands.'},
]);

addCombo([skyblock, extraFloatingIslands ], [
   { 'categories': ['biome'], 'description': 'Regular Floating Islands with Skyware houses and chests spawn in addition to other islands.'},
]);

addCombo([celebrationMk10, seedNot(forTheWorthy), skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])], [
    { 'categories': ['enemyspawning'], 'description': 'Underground houses on islands below the surface have a 50% chance to be converted to rainbow brick.' },
]);

addCombo([skyblock, seedOr([randomSpawn,vampirism]) ], [
   { 'categories': ['biome'], 'description': 'The starting island spawns randomly in the Underground or Cavern layer. Torches are placed on the island. Life Crystals may spawn on the starting island.'},
]);

addCombo([skyblock, seedNot(vampirism), seedNot(randomSpawn), remix], [
    { 'categories': ['biome'], 'description': 'The starting island is in the Underworld and consists of ash blocks with lava clouds. Life Crystals may spawn on the starting island.' },
]);

addCombo([skyblock, seedOr([vampirism,remix, randomSpawn]), noSurface], [
    { 'categories': ['biome'], 'description': 'Mana Crystals may spawn on the starting island.' },
]);

addCombo([skyblock, seedNot(vampirism), seedNot(randomSpawn), seedNot(remix), noSurface], [
    { 'categories': ['biome'], 'description': 'The starting island is in the underground. Torches are placed on the island. Life Crystals and Mana Crystals may spawn on the starting island.' },
]);

addCombo([skyblock, seedNot(vampirism), seedNot(randomSpawn), seedNot(remix), seedNot(noSurface), surfaceIsInSpace], [
    { 'categories': ['biome'], 'description': 'The starting island is in space.' },
]);

addCombo([skyblock, teamBasedSpawns], [
    { 'categories': ['biome'], 'description': 'There are starting islands for every team.' },
]);

addCombo([extraLiquid, skyblock], [
    { 'categories': ['biome'], 'description': 'Sky Lakes spawn, and their regular clouds and rain clouds are swapped with each other. At least one Sky Lake spawns in the lava layer of the world, and all such lakes have lava and lava clouds.' },
]);

addCombo([extraLiquid, notTheBees, skyblock], [
    { 'categories': ['biome'], 'description': 'Sky Lakes filled with Honey spawn. They have most of their cloud blocks replaced with rain clouds.' },
]);

addCombo([skyblock, drunk, celebrationMk10, extraLiquid], [
    { 'categories': ['biome'], 'description': 'Sky Lakes filled with Shimmer spawn.  They have most of their cloud blocks replaced with rain clouds.' },
]);


addCombo([drunk, skyblock, worldIsInfected], [
    { 'categories': ['biome'], 'description': 'The main island and many other islands are infected with a random world evil. If underground, the islands contain corrupted stone; if above ground, they contain corrupted grass.' },
]);

addCombo([seedNot(drunk), skyblock, worldIsInfected], [
    { 'categories': ['biome'], 'description': 'The main island and many other islands are infected with the world evil. If underground, the islands contain corrupted stone; if above ground, they contain corrupted grass.' },
]);

addCombo([skyblock, surfaceIsMushrooms], [
    { 'categories': ['biome'], 'description': 'Mushroom islands spawn.' },
]);

addCombo([skyblock, hallowOnTheSurface], [
    { 'categories': ['biome'], 'description': 'Hallow islands spawn with Hallowed Grass if above the surface and Pearlstone if below.' },
]);

addCombo([skyblock, worldIsFrozen], [
    { 'categories': ['biome'], 'description': 'Frozen islands spawn. These have Snow if above the surface and Ice if below. Their Clouds are replaced with Snow Clouds.' },
]);

addCombo([skyblock, surfaceIsDesert], [
    { 'categories': ['biome'], 'description': 'Desert islands spawn with Sand tiles and no Rain Clouds, only regular Clouds.' },
]);

addCombo([skyblock, noInfection], [
    { 'categories': ['biome'], 'description': 'Extra regular dirt islands spawn.' },
]);

addCombo([drunk, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Snow sky islands and desert sky islands may spawn.' },
]);


addCombo([skyblock, pooEverywhere], [
    { 'categories': ['biome'], 'description': 'Poo generates on the islands.' },
]);

addCombo([skyblock, extraLivingTrees], [
    { 'categories': ['biome'], 'description': 'A Living Tree will generate on the main island.' },
]);

addCombo([skyblock, seedOr([celebrationMk10, seedNot(forTheWorthy)])], [
    { 'categories': ['loot'], 'description': 'The main island has a solidifier.' },
    { 'categories': ['biome'], 'description': 'A Shimmer island also spawns.' },
]);

addCombo([skyblock, seedNot(celebrationMk10), forTheWorthy], [
    { 'categories': ['loot'], 'description': 'The main island has no solidifier.' },
    { 'categories': ['biome'], 'description': 'The Shimmer island does not spawn.' },
]);

addCombo([errorWorld], [
    { 'categories': ['biome'], 'description': 'Some blocks are randomly shuffled, not including unbreakable blocks like dungeon tiles. Moss can randomly spawn across the world. Some blocks may randomly get echo coating or become inactive or become painted with negative paint. Bubble blocks full of liquid spawn that are painted according to the liquid inside.' },
]);

addCombo([errorWorld, seedNot(worldIsInfected), seedNot(vampirism)], [
    { 'categories': ['biome'], 'description': 'All Town NPCs are replaced by the Old Man upon spawn.' },
]);

addCombo([errorWorld, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Cracked Dungeon Bricks are coated with Echo Coating.' },
    { 'categories': ['biome'], 'description': 'Structures including Pyramids, Glowing Mushroom biomes and Sword Shrines can spawn in any biome.' },
]);

addCombo([drunk, forTheWorthy, seedNot(remix)], [
    { 'categories': ['environment'], 'description': 'Boulder rain can occur.' },
]);

addCombo([skyblock, notTheBees, seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'The starting island has mud and hive blocks, with hive walls.' },
]);

addCombo([skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])], [
    { 'categories': ['biome'], 'description': 'There are 1000x less attempts to place statues, and the total possible number of statues is halved, compared to a non-Skyblock world.' },
]);

addCombo([skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])], [
    { 'categories': ['biome'], 'description': 'Underground houses may spawn, but 100x less attempts are made compared to a non-Skyblock world. Similarly, 2000x less attempts to place pots occur and the total number of possible pots is 5 times less.' },
]);


addCombo([seedNot(noSurface), skyblock, seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees])], [
    { 'categories': ['biome'], 'description': 'Fallen Logs may spawn but 10 less attemps are made to spawn them and 10 less total can be placed.' },
]);

addCombo([biggerAbandonedHouses, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees])])], [
    { 'categories': ['biome'], 'description': 'Much bigger abandoned houses generate.' },
]);

addCombo([errorWorld, seedNot(biggerAbandonedHouses), seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees])])], [
    { 'categories': ['biome'], 'description': 'Bigger abandoned houses have a chance to generate.' },
]);

addCombo([addTeleporters, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees])])], [
    { 'categories': ['loot'], 'description': 'Teleporters can spawn connecting different locations underground, even if there are no solid blocks nearby.' },
]);

addCombo([dualDungeons, addTeleporters], [
   { 'categories': ['loot'], 'description': 'Teleporters do not spawn inside the two dungeons.' },
]);


addCombo([coatEverythingEcho, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees])])], [
    { 'categories': ['paint'], 'description': 'Spectre Goggles may spawn in chests.' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingGray)), seedNot(worldIsFrozen), seedOr([paintEverythingNegative, coatEverythingEcho, coatEverythingIlluminant])], [
    { 'categories': ['paint'], 'description': 'The surface is painted gray.' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingGray)), worldIsFrozen, seedOr([paintEverythingNegative, coatEverythingEcho, coatEverythingIlluminant])], [
    { 'categories': ['paint'], 'description': 'The surface is painted white.' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingGray)), seedNot(worldIsFrozen), seedNot(paintEverythingNegative), seedNot(coatEverythingEcho), seedNot(coatEverythingIlluminant)], [
    { 'categories': ['paint'], 'description': 'The whole world is painted gray.' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingGray)), worldIsFrozen, seedNot(paintEverythingNegative), seedNot(coatEverythingEcho), seedNot(coatEverythingIlluminant)], [
    { 'categories': ['paint'], 'description': 'The whole world is painted white.' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingGray)), worldIsFrozen, seedOr([paintEverythingNegative, coatEverythingEcho, coatEverythingIlluminant])], [
    { 'categories': ['paint'], 'description': 'The surface is painted white.' },
]);

addCombo([secretSeedsCount(4, -1, paintEverythingGray), paintEverythingGray, seedNot(worldIsFrozen)], [
    { 'categories': ['paint'], 'description': 'Ore and gems are painted gray.' },
]);

addCombo([secretSeedsCount(4, -1, paintEverythingGray), paintEverythingGray,  worldIsFrozen], [
    { 'categories': ['paint'], 'description': 'Ore and gems are painted white.' },
]);

addCombo([secretSeedsCount(4, -1, paintEverythingNegative), paintEverythingNegative], [
    { 'categories': ['paint'], 'description': 'Leaf Blocks, Mahogany Leaf Blocks, Cloud Blocks and their varieties, Cloud Walls, Dungeon Bricks, and Dungeon Brick Walls. are painted negative' },
]);

addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingNegative)), seedNot(paintEverythingGray), seedNot(coatEverythingEcho), seedNot(coatEverythingIlluminant)], [
    { 'categories': ['paint'], 'description': 'The whole world is painted negative.' },
]);


addCombo([seedNot(secretSeedsCount(4, -1, paintEverythingNegative)), seedOr([paintEverythingGray, coatEverythingEcho, coatEverythingIlluminant])], [
    { 'categories': ['paint'], 'description': 'The underground is painted negative.' },
]);

addCombo([seedNot(paintEverythingGray), seedNot(paintEverythingNegative), seedNot(secretSeedsCount(3, -1, coatEverythingEcho)), coatEverythingEcho], [
    { 'categories': ['paint'], 'description': 'All blocks and walls are painted with Echo Coating.' },
]);

addCombo([seedOr([paintEverythingGray, paintEverythingNegative, secretSeedsCount(3,-1, coatEverythingEcho)]), seedNot(secretSeedsCount(4, -1, coatEverythingEcho)), coatEverythingEcho], [
    { 'categories': ['paint'], 'description': 'All blocks and walls are painted with Echo Coating except for the blocks that outline chunks of land.' },
]);

addCombo([seedOr([paintEverythingGray, paintEverythingNegative, secretSeedsCount(3,-1, coatEverythingEcho)]), seedNot(secretSeedsCount(4, -1, coatEverythingEcho)), coatEverythingEcho, errorWorld], [
    { 'categories': ['paint'], 'description': 'Walls not behind tiles are not painted with echo paint.' },
]);

addCombo([secretSeedsCount(4, -1, coatEverythingEcho), coatEverythingEcho], [
    { 'categories': ['paint'], 'description': 'Only traps and spikes are coated with Echo coating.' },
]);

addCombo([coatEverythingIlluminant, seedOr([paintEverythingGray, paintEverythingNegative, secretSeedsCount(3,-1, coatEverythingIlluminant)])], [
    { 'categories': ['paint'], 'description': 'Only Life Crystals (and, when present, Mana crystals) are coated with Illluminant coating.' },
]);

addCombo([coatEverythingIlluminant, coatEverythingEcho, seedNot(paintEverythingGray), seedNot(paintEverythingNegative), seedNot(secretSeedsCount(3,-1, coatEverythingIlluminant))], [
    { 'categories': ['paint'], 'description': 'Half of the world is coated with Echo coating and half with Illuminant.' },
]);

addCombo([coatEverythingIlluminant, seedNot(coatEverythingEcho)], [
    { 'categories': ['paint'], 'description': 'The entire world is coated with Illuminant coating.' },
]);

addCombo([noSurface, seedNot(errorWorld), seedNot(extraFloatingIslands), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'No Floating Islands spawn.' },
]);

addCombo([noSurface], [
   { 'categories': ['biome'], 'description': 'The world has no surface, oceans or space layer.' },
]);

addCombo([extraFloatingIslands, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'There are extra Floating Islands. Some may spawn without houses. There is a 1 in 3 chance that they will be made of Star Cloud.' },
]);

addCombo([pooEverywhere], [
   { 'categories': ['biome'], 'description': 'Poo spawns across the world. There is more poo the more secret seeds are enabled.' },
]);

addCombo([extraFloatingIslands, seedNot(skyblock), seedOr([noSurface,secretSeedsCount(6,-1,extraFloatingIslands)])], [
   { 'categories': ['biome'], 'description': 'The amount of extra Floating Islands from the care bears movie is reduced.' },
]);

addCombo([hallowOnTheSurface, seedNot(noSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface of the world is Hallow.' },
]);

addCombo([hallowOnTheSurface, noSurface, seedNot(skyblock), worldIsInfected, noInfection], [
   { 'categories': ['biome'], 'description': 'The top quarter of the world is Hallow.' },
]);

addCombo([hallowOnTheSurface, noSurface, seedNot(skyblock), seedOr([seedNot(worldIsInfected), seedNot(noInfection)])], [
   { 'categories': ['biome'], 'description': 'The top half of the world is Hallow.' },
]);

addCombo([worldIsInfected, seedNot(noInfection), hallowOnTheSurface, seedNot(noSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All corruptible blocks in the entire world below the surface, with the sole exceptions of the Aether and Jungle Grass, are corrupted.' },
]);

addCombo([worldIsInfected, seedNot(noInfection), hallowOnTheSurface, noSurface, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All corruptible blocks in the bottom half of the world, with the sole exceptions of the Aether and Jungle Grass, are corrupted.' },
]);

addCombo([worldIsInfected, seedNot(noInfection), seedNot(hallowOnTheSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All corruptible blocks in the entire world, with the sole exceptions of the Aether and Jungle Grass, are corrupted.' },
]);

addCombo([noInfection, seedNot(worldIsInfected), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All Corruption and Crimson is removed from the world.' },
]);

addCombo([noInfection, worldIsInfected, seedNot(noSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The entire world below the surface is corrupted. Only naturally-generated evil chasms on the surface are infected.' },
]);

addCombo([noInfection, worldIsInfected, noSurface, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The entire world below the cavern layer is corrupted. Only naturally-generated evil chasms above the lava layer are infected.' },
]);


addCombo([surfaceIsMushrooms, noSurface, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All Jungle is converted to Glowing Mushroom Biomes and all Glowing Mushroom Biomes are converted to Jungle.' },
]);

addCombo([surfaceIsMushrooms, seedNot(noSurface), seedNot(hallowOnTheSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface is converted to Glowing Mushroom Biome.' },
]);

addCombo([surfaceIsMushrooms, seedNot(noSurface), hallowOnTheSurface, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface is converted to Glowing Mushroom Biome where possible and Hallowed elsewhere, such as the Snow and Desert biomes.' },
]);

addCombo([surfaceIsDesert, noSurface, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The Snow and Ice biomes are converted to Sand and the Desert and Underground Desert biomes are converted to Snow and Ice.' },
]);

addCombo([surfaceIsDesert, seedNot(noSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface is covered in desert. This runs before other surface-altering rules, and may be partially overwritten by them.' },
   { 'categories': ['biome'], 'description': 'There are no surface tunnels or mountain caves.' },
]);

addCombo([noSurface], [
   { 'categories': ['townnpc'], 'description': 'The Truffle can never move in.' },
]);

addCombo([seedOr([dualDungeons, errorWorld]), seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
   { 'categories': ['biome'], 'description': 'Long minecart tracks are more rare.' },
]);

addCombo([errorWorld, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
   { 'categories': ['biome'], 'description': 'Ruined houses can rarely be much larger or spawn outside the Underworld.' },
   { 'categories': ['loot'], 'description': 'Chests can be any type of chest except for Dungeon Biome Chests.' },
  { 'categories': ['loot'], 'description': 'Random furniture can generate in houses, and one of 20 different combinations of walls and tiles can spawn.' },
]);

addCombo([portalGunInChests, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
   { 'categories': ['biome'], 'description': 'Portal Guns have a chance to spawn in Chests.' },
]);

addCombo([rainsForAYear], [
   { 'categories': ['biome'], 'description': 'The world is set to rain for an entire real-world year.' },
]);

addCombo([endlessHalloween], [
   { 'categories': ['biome'], 'description': 'The world is constantly set to Halloween mode.' },
]);

addCombo([endlessChristmas], [
   { 'categories': ['biome'], 'description': 'The world is constantly set to Christmas mode.' },
]);

addCombo([errorWorld, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])]), secretSeedsCount(6,-1,errorWorld) ], [
   { 'categories': ['loot'], 'description': 'Chests can randomly have loot swapped between them anywhere in the world, but the loot must have the same rarity.' },
]);

addCombo([errorWorld, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])]), seedNot(secretSeedsCount(6,-1,errorWorld)) ], [
   { 'categories': ['loot'], 'description': 'Chests can randomly have loot swapped between them anywhere in the world, regardless of rarity. In addition, one of 32 special items can appear in the chests, including the Universal Pylon' },
]);

addCombo([noSpiderNests, secretSeedsCount(0,3, noSpiderNests), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'No Spider Nests may spawn.' },
    { 'categories': ['townnpc'], 'description': 'The Stylist does not need to be rescued and can move in at any time.' },
]);

addCombo([noSpiderNests, secretSeedsCount(4,-1, noSpiderNests), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Many more Spider Nests may spawn.' },
]);

addCombo([actuallyNoTraps, secretSeedsCount(0,3, actuallyNoTraps), seedOr([seedNot(skyblock),seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['trap'], 'description': 'The vast majority of traps, spikes, etc. do not spawn. Occassionaly a few may linger from world generation artifacts.' },
]);

addCombo([actuallyNoTraps, secretSeedsCount(4,-1, actuallyNoTraps), seedOr([seedNot(skyblock),seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['trap'], 'description': 'Spikes are added, surrounding Life Crystals and Chests.' },
]);

addCombo([noSurface, seedNot(errorWorld), seedNot(extraLivingTrees), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'No Living Trees spawn.' },
]);

addCombo([noSurface, seedNot(errorWorld), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'No Pyramids or Sword Shrines spawn.' },
]);

addCombo([seedNot(skyblock), errorWorld], [
   { 'categories': ['biome'], 'description': 'Sword Shrines can spawn even deep underground.' },
]);

addCombo([roundLandmasses, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'All solid blocks in the world are divided up into large round landmasses.' },
]);

addCombo([roundLandmasses, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The total number of spider caves is cut in half.' },
]);

addCombo([surfaceIsInSpace, seedNot(noSurface), seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface of the world is moved up into space.' },
]);

addCombo([surfaceIsInSpace, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The surface of the world is moved up into space.' },
]);

addCombo([surfaceIsInSpace, seedNot(skyblock)], [
   { 'categories': ['biome'], 'description': 'The Tower Dungeon entrance will not spawn.' },
]);

addCombo([forTheWorthy,remix], [
   { 'categories': ['enemyai'], 'description': 'Mechdusa replaces the Mechanical bosses, and can spawn at night once an altar is broken.' },
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

addCombo([worldIsFrozen, seedNot(skyblock), endlessChristmas], [
    { 'categories': ['townnpc'], 'description': 'If the Guide is not replace by other seeds, he is now replaced by Santa Claus.' },
]);

addCombo([worldIsFrozen, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is converted to snow outside of the Underworld, Lava layer, Jungle and Desert.' },
]);

addCombo([worldIsFrozen], [
    { 'categories': ['biome'], 'description': 'Underground houses may have Candy Cane walls.' },
]);

addCombo([seedOr([halloweenGen,endlessHalloween]), seedOr([seedNot(skyblock), noInfection]), seedNot(noSurface)], [
    { 'categories': ['environment'], 'description': 'Pumpkins spawn on world generation.' },
]);


addCombo([drunk, celebrationMk10, seedNot(remix), seedNot(notTheBees)], [
    { 'categories': ['biome'], 'description': 'Half of the world generates with Shimmer replacing water.' },
    { 'categories': ['biome'], 'description': 'The Dungeon is buried but no tree is visible above it.' },
    { 'categories': ['enemyspawning'], 'description': 'There is no Dungeon Guardian, and Skeletron does not have to be fought to enter the Dungeon.' },
    { 'categories': ['droprate'], 'description': 'Palm trees drop triple wood and ash trees drop triple wood.' },
    { 'categories': ['townnpc'], 'description': 'Slimefors is invincible, with maximum health, 99999 defense, and inability to be attacked.' },
    { 'categories': ['music', 'background'], 'description': 'Snow (Otherworldly) will play during world generation, the background will be the Hallow, and heart-shaped clouds will appear.' },
    { 'categories': ['paint'], 'description': 'Sand is painted rainbow and sand walls are painted black.' },
    { 'categories': ['droprate'], 'description': 'Extra gel can drop from slimes.' },
    { 'categories': ['armor', 'weapon'], 'description': 'Ash Wood items are weaker.' },
]);


addCombo([seedOr([seedAnd([theConstant,seedOr([drunk, forTheWorthy]), seedNot(celebrationMk10)]),graveyardBloodMoonStart]) ], [
    { 'categories': ['biome'], 'description': 'Graveyards spawn across the world.' },
]);

addCombo([graveyardBloodMoonStart], [
    { 'categories': ['environment'], 'description': 'The world starts in a Blood Moon.' },
]);

addCombo([startInHardmode], [
    { 'categories': ['environment'], 'description': 'The world starts in Hardmode.' },
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
    { 'categories': ['trap'], 'description': 'Wooden Spikes generate 3 layers deep instead of 2.' },
    { 'categories': ['biome', 'enemyspawning'], 'description': 'Enemies are more likely to spawn in Bee Hives. Bee Hives are larger and contain more Larvae.' },
    { 'categories': ['biome'], 'description': 'Marble and Granite biomes switch generation styles.' },
    { 'categories': ['biome'], 'description': 'Tunnels from the Jungle surface to the Underground Jungle do not spawn.' },
]);

addCombo([drunk, seedNot(skyblock), seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['loot'], 'description': 'Moon Lord Legs can spawn in chests.' },
]);

addCombo([theConstant], [
   { 'categories': ['player'], 'description': 'The player experiences hunger.' },
    { 'categories': ['player'], 'description': 'The player takes damage when in the dark.' },
    { 'categories': ['environment'], 'description': 'It will be pitch dark on the surface during normal nights. When a New Moon, a Full Moon, or a Blood Moon occurs, the player will be able to see things normally on the surface.' },
   { 'categories': ['background'], 'description': 'There is a sepia shader during world generation.' },
   { 'categories': ['droprate', 'weapon'], 'description': 'Don\'t Starve items are more likely to drop from enemies.' },
   { 'categories': ['shop'], 'description': 'The Travelling Merchant is more likely to sell the Don\'t Starve-theme paintings.' },
   { 'categories': ['loot'], 'description': 'Abigail\'s flower is twice as likely to try to grow.' },
]);

addCombo([seedOr([drunk, forTheWorthy]), seedNot(seedAnd([skyblock,seedNot(seedOr([extraLiquid, noInfection, surfaceIsDesert, worldIsFrozen, hallowOnTheSurface, worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees]))]))], [
    { 'categories': ['loot'], 'description': 'Red Potion can spawn in chests.' },
]);

addCombo([forTheWorthy], [
    { 'categories': ['player'], 'description': 'Red Potion has beneficial effects.' },
    { 'categories': ['environment'], 'description': 'Trees and cacti generally require fewer hits to destroy.' },
    { 'categories': ['player'], 'description': 'The player\'s light vision is reduced by 12% in the Jungle Temple and by 6% in the Dungeon' },
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

addCombo([seedOr([drunk, forTheWorthy]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The Jungle Temple is much larger.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy), seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
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
    { 'categories': ['enemyspawning'], 'description': 'The Dungeon Guardian won\'t spawn until 70 ft below the surface.' },
]);

addCombo([seedOr([drunk, celebrationMk10]), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Ocean caves always spawn.' },
]);

addCombo([remix, seedNot(drunk), seedNot(celebrationMk10), seedNot(skyblock), seedNot(roundLandmasses), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Ocean caves are more common.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock), seedNot(drunk), seedNot(celebrationMk10), seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'Most of the world is converted to Jungle and Hive.' },
]);

addCombo([notTheBees, seedOr([theConstant, drunk, celebrationMk10]), seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Most of the world is converted to Jungle, except for the middle portion of the world.' },
]);

addCombo([notTheBees, remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A rectangular strip of hive spawns near the top of the world, stretching across almost the entire world (except the oceans). A strip of Crispy Honey Block spawns underneath that.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10)], [
    { 'categories': ['biome'], 'description': 'One ocean is Honey, with its sand converted to Honey Blocks.' },
]);

addCombo([digExtraHoles, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Extra caves, mostly vertical, are generated throughout the world.' },
]);

addCombo([noSurface, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Meteorites are present at world generation, spawning throughout the world.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix)], [
    { 'categories': ['biome'], 'description': 'No normal Snow Biome spawns. Instead, snow and ice is placed underneath in large rectangles under the oceans, and can replace the stone around the Shimmer with snow..' },
]);

addCombo([notTheBees, noTraps, seedNot(remix)], [
    { 'categories': ['trap'], 'description': 'Dart traps are replaced with Jungle Temple traps and Spikes are replaced by Wooden Spikes. Jungle Temple traps can be mined without a picksaw.' },
]);

addCombo([seedOr([notTheBees, celebrationMk10]), noTraps, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'The amount of geysers from No Traps is reduced, but still higher than usual.' },
]);

addCombo([remix, drunk, forTheWorthy, seedOr([seedNot(skyblock), extraFloatingIslands])], [
    { 'categories': ['loot'], 'description': 'Both crimson and corruption sky islands spawn.' },
]);

addCombo([remix, drunk, seedNot(celebrationMk10), seedNot(forTheWorthy), seedOr([seedNot(skyblock), extraFloatingIslands])], [
    { 'categories': ['loot'], 'description': 'Both crimson and corruption sky islands spawn with flesh and lesion chests.' },
]);

addCombo([remix, seedNot(drunk), seedNot(forTheWorthy), seedNot(celebrationMk10),seedOr([seedNot(skyblock), extraFloatingIslands])], [
    { 'categories': ['biome', 'loot'], 'description': 'Sky islands are evil and have flesh or lesion chests.' },
]);

addCombo([forTheWorthy, seedNot(drunk), seedNot(notTheBees), seedOr([seedNot(skyblock), extraFloatingIslands])], [
    { 'categories': ['biome', 'loot'], 'description': 'Sky islands are evil.' },
]);

addCombo([forTheWorthy, seedOr([seedNot(skyblock), extraFloatingIslands])], [
    { 'categories': ['loot'], 'description': 'Sky islands have Locked Gold Chests.' },
]);

addCombo([noSurface, extraLivingTrees, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Despite the lack of surface, Living Trees still spawn, just a smaller amount.' },
]);

addCombo([seedNot(noSurface), extraLivingTrees, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A very large amount of extra living trees spawn. These trees can reach higher than usual, even into Space, and have larger root systems and tunnels.' },
]);

addCombo([extraLivingTrees, seedOr([secretSeedsCount(6,-1,extraLivingTrees), noSurface])], [
   { 'categories': ['biome'], 'description': 'The amount of extra Living Trees from the save the rainforest seed is reduced.' },
]);


addCombo([notTheBees, celebrationMk10, seedNot(drunk), seedNot(noSurface), seedNot(extraLivingTrees), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A very large number of living trees are added, and can spawn in places they usuall wouldn\'t.' },
]);

addCombo([seedOr([drunk, celebrationMk10, remix]), seedNot(noSurface), seedNot(extraLivingTrees), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'There are more Living Trees than usual.' },
]);

addCombo([notTheBees, seedNot(celebrationMk10), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Living Trees can spawn in the Jungle.' },
]);


addCombo([seedNot(skyblock), noTraps, seedOr([celebrationMk10, notTheBees])], [
    { 'categories': ['trap'], 'description': 'Three times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), seedNot(notTheBees)], [
    { 'categories': ['trap'], 'description': 'Fifteen times as many statues generate.' },
]);

addCombo([seedNot(skyblock), noTraps, seedNot(celebrationMk10), secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'A large number of TNT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), noTraps, celebrationMk10, secretSeedsCount(4,-1, actuallyNoTraps)], [
    { 'categories': ['trap'], 'description': 'A reduced amount of TnT barrels are spread across the world.' },
]);

addCombo([seedNot(skyblock), seedOr([seedNot(noSurface), errorWorld]), celebrationMk10], [
    { 'categories': ['biome'], 'description': 'The maximum number of Enchanted Sword Shrines is doubled, but the probability for one shrine to spawn is halved, except the first one which is guaranteed.' },
]);

addCombo([seedOr([notTheBees, remix]), seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Water chests can spawn in any liquid, including lava or honey.' },
]);

addCombo([seedNot(skyblock), notTheBees], [
    { 'categories': ['biome'], 'description': 'Gem caves do not spawn.' },
]);

addCombo([celebrationMk10, seedNot(skyblock), seedNot(notTheBees)], [
    { 'categories': ['biome'], 'description': '50% more gem caves spawn.' },
]);

addCombo([seedOr([drunk, celebrationMk10]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Gem Trees are much more common.' },
]);

addCombo([seedOr([worldIsFrozen, seedAnd([notTheBees, seedNot(remix), seedNot(theConstant)])]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves do not spawn.' },
]);

addCombo([seedNot(seedOr([skyblock, worldIsFrozen, seedAnd([notTheBees, seedNot(remix), seedNot(theConstant)])])), forTheWorthy], [
    { 'categories': ['biome'], 'description': 'Neon moss caves can be 50% larger.' },
]);

addCombo([remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves spawn in the middle 40% of the world, and are 50% more common.' },
    { 'categories': ['biome'], 'description': '3x as many altars spawn.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves can spawn slightly closer to the center of the world.' },
]);

addCombo([seedNot(remix), seedNot(celebrationMk10), seedNot(forTheWorthy), drunk, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves are not restricted to the inner or outer portions of the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Moss caves are allowed to spawn in the Jungle.' },
]);

addCombo([seedNot(remix), celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Half of all moss caves are Neon Moss, and twice as many moss caves spawn.' },
]);

addCombo([noTraps, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Twice as many Friendly Boulders can spawn.' },
    { 'categories': ['trap'], 'description': 'Spider Boulders, Ghoulders, and Lava Boulders are more common.' },
  { 'categories': ['trap'], 'description': 'Traps can spawn on the surface.' },
]);

addCombo([noTraps, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
   { 'categories': ['trap'], 'description': 'Gas Traps spawn in chests.' },
]);

addCombo([noTraps], [
  { 'categories': ['enemyspawning'], 'description': 'Dart Trap Slimes are more common.' },
]);

addCombo([seedOr([noTraps,forTheWorthy])], [
  { 'categories': ['enemyai'], 'description': 'Dart Trap Slimes can fire more rapidly.' },
]);

addCombo([seedOr([noTraps, celebrationMk10]), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'More Bouncy Boulders spawn.' },
]);

addCombo([seedOr([forTheWorthy, noTraps]), seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': '50% more explosive traps spawn.' },
]);

addCombo([notTheBees, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'No lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps), noTraps, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': '5 times as many lava traps spawn.' },
]);

addCombo([seedNot(notTheBees), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(noTraps), forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': '2 times as many lava traps spawn.' },
]);

addCombo([noTraps, seedNot(notTheBees), seedNot(celebrationMk10), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Traps that are broken by world generation are allowed to remain.' },
]);

addCombo([extraLiquid, seedNot(roundLandmasses), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is filled with liquid except for regions marked off with bubble blocks and for space.' },
]);

addCombo([extraLiquid, seedNot(roundLandmasses), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The round landmasses are filled with liquid, and the bottom part of the world is filled with lava.' },
]);


addCombo([extraLiquid, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Lava fills the Underworld.' },
]);

addCombo([extraLiquid, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'The Diving Helmet can spawn in Underwater Chests.' },
]);

addCombo([extraLiquid, remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The Underworld is clear of liquids except for normal amounts of Lava.' },
]);


addCombo([celebrationMk10, seedNot(forTheWorthy), seedNot(drunk), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Sky islands are converted to Hallow.' },
]);

addCombo([celebrationMk10, seedNot(notTheBees), seedNot(drunk), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple is painted with purple tiles and cyan walls.' },
]);

addCombo([seedNot(notTheBees), drunk, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple has lime green tiles.' },
]);

addCombo([drunk, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple has dark green walls.' },
]);


addCombo([notTheBees, seedOr([seedNot(theConstant), remix]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Slush blocks are converted to honey.' },
]);

addCombo([notTheBees, remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Water in the hive/crispy strips turns to honey except for the central portion of the hive strip.' },
]);

addCombo([remix, forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Liquids on the surface turn to lava.' },
]);

addCombo([notTheBees, remix, seedNot(forTheWorthy), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Water on the surface also turns to honey.' },
]);

addCombo([seedNot(notTheBees), remix, seedNot(forTheWorthy), drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Water on the surface on the Dungeon side turns into Shimmer.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(remix), seedNot(celebrationMk10), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Most water in the world turns in to Honey except for the middle 1/6 of the world and the outer 1/6s of the world.' },
]);

addCombo([notTheBees, theConstant, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Some water in the world is converted to Honey.' },
]);

addCombo([seedNot(notTheBees), remix, drunk, celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Some water throughout world is converted to Shimmer.' },
]);

addCombo([seedOr([forTheWorthy,seedNot(celebrationMk10)]), remix, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A dead living tree above the dungeon is painted in the color of the surrounding evil.' },
]);

addCombo([celebrationMk10, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'All trees are Yellow Willow Trees or Sakura Trees.' },
]);

addCombo([seedNot(celebrationMk10), seedNot(skyblock), seedOr([remix, drunk])], [
    { 'categories': ['biome'], 'description': 'Yellow Willow Trees and Sakura Trees are more common.' },
]);

addCombo([seedNot(notTheBees), seedNot(seedAnd([remix, drunk, celebrationMk10])), forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Some water throughout world is converted to Lava.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Every Underworld House is made of Crispy Honey Block.' },
]);

addCombo([notTheBees, forTheWorthy, seedNot(celebrationMk10), secretSeedsCount(4,-1, noSpiderNests), seedNot(skyblock)], [
    { 'categories': ['biome', 'enemyspawning'], 'description': 'Spider nests spawn across the Underworld. Spiders are 20% less likely to spawn in Underworld Spider Nests compared to regular ones.' },
]);

addCombo([theConstant, secretSeedsCount(4,-1, noSpiderNests), seedNot(skyblock), seedNot(noSurface)], [
    { 'categories': ['biome'], 'description': 'Spider caves generate on the surface.' },
]);

addCombo([notTheBees, seedOr([theConstant, noTraps]), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Spikes are replaced with Wooden Spikes.' },
]);

addCombo([notTheBees, seedOr([theConstant, remix]), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'A few Larvae are scattered around the world.' },
]);

addCombo([notTheBees, seedNot(theConstant), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'Living Trees are replace by Living Mahogany and Mahogany Leaf Blocks.' },
]);

addCombo([notTheBees, noTraps, seedNot(theConstant), seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['trap', 'townnpc'], 'description': 'Very many Larvae are scattered around the world.' },
]);

addCombo([seedNot(actuallyNoTraps), seedOr([seedAnd([skyblock,seedNot(seedOr([extraLiquid, noInfection, surfaceIsDesert, worldIsFrozen,hallowOnTheSurface, worldIsInfected,surfaceIsMushrooms, extraFloatingIslands, extraLivingTrees]))]),seedAnd([notTheBees, seedNot(noTraps), seedNot(remix)])]) ], [
    { 'categories': ['trap', 'townnpc'], 'description': 'Normal traps are removed, including most Dart Traps and Geysers, but some may spawn in special circumstances (i.e. in the Dungeon or as part of Dead Men\'s Chests).' },
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

addCombo([notTheBees, seedNot(remix), seedNot(skyblock)], [
    { 'categories': ['biome', 'paint'], 'description': 'The Dungeon is overgrown with Jungle grass and trees. Its walls are painted orange.' },
]);

addCombo([forTheWorthy, seedNot(drunk), seedNot(notTheBees), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'Dungeon tiles are painted with a random color.' },
]);

addCombo([remix, seedOr([seedNot(celebrationMk10), forTheWorthy]), seedNot(drunk), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Dungeon and Jungle Temple are painted the color of the evil biome of the world.' },
]);

addCombo([remix, seedOr([seedNot(celebrationMk10), forTheWorthy]), drunk, seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Dungeon and Jungle Temple are painted the color of the evil biome on its side of the world.' },
]);

addCombo([remix, celebrationMk10, forTheWorthy, seedNot(drunk), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'Pyramids, and Living trees are painted the color of the world evil.' },
]);

addCombo([remix, celebrationMk10, forTheWorthy, drunk, seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'Pyramids and Living trees are painted the color of the world evil corresponding to their side of the world.' },
]);

addCombo([seedNot(notTheBees), seedNot(remix), drunk, seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Dungeon is painted a somewhat random color dependent on the base color.' },
]);

addCombo([forTheWorthy, seedNot(notTheBees), seedNot(skyblock)], [
    { 'categories': ['paint'], 'description': 'The Jungle Temple is painted green.' },
]);

addCombo([notTheBees, seedNot(remix)], [
    { 'categories': ['shop'], 'description': 'The Merchant sells Jungle Torches.' },
]);

addCombo([vampirism, worldIsInfected], [
    { 'categories': ['shop'], 'description': 'The Dryad sells Corrupt or Crimson torches during pre-Hardmode.' },
]);

addCombo([vampirism, seedNot(worldIsInfected)], [
    { 'categories': ['shop'], 'description': 'The Zoologist sells torches.' },
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


addCombo([seedOr([forTheWorthy,remix])], [
   { 'categories': ['enemyai'], 'description': 'Eater of Worlds are 30% larger.' },
]);

addCombo([forTheWorthy,remix], [
   { 'categories': ['enemyai'], 'description': 'Mechdusa replaces the Mechanical bosses, and can spawn at night once an altar is broken.' },
]);

addCombo([forTheWorthy, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'All Obsidian Brick houses are replaced by Hellstone Brick houses.' },
 ]);

addCombo([forTheWorthy, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands])])], [
     { 'categories': ['loot'], 'description': 'All Chests, except Chests in the Dungeon, have a 1/15 (6.67%) chance to contain an Angel Statue instead of the first, usually most valuable item in the Chest.' },
]);

addCombo([celebrationMk10], [
    { 'categories': ['shop', 'weapon', 'accessory'], 'description': 'Princess sells the Slime Staff, Flask of Party, and Heart Lantern, as well as Sandstorm in a Bottle while in the Desert and Terragrim during Blood Moon. After pirates are defeated, she sells different pirate items during different moon phases.' },
    { 'categories': ['paint'], 'description': 'Any generated trees and mushrooms are painted random colors.' },
    { 'categories': ['enemyspawning'], 'description': 'Fairies are more likely to be pink.' },
    { 'categories': ['droprate'], 'description': 'Palm trees drop a bit of extra wood.' },
    { 'categories': ['enemyspawning'], 'description': 'Mimics are more common and Jungle Mimics may spawn in the Jungle.' },
    { 'categories': ['enemyspawning'], 'description': 'Golden slimes may spawn.' },
    { 'categories': ['environment'], 'description': 'Blood Moons and Birthday Parties are more common.' },
    { 'categories': ['enemyspawning'], 'description': 'Fireflies and butterflies are more likely.' },
    { 'categories': ['enemyai'], 'description': 'Many bosses are twice as small.' },
    { 'categories': ['armor'], 'description': 'The Wizard Hat provides an additional summon slot.' },
    { 'categories': ['droprate', 'armor'], 'description': 'Dev Armor sets are 2x as likely to drop.' },
    { 'categories': ['droprate'], 'description': 'Halloween- and Christmas-themed hearts and mana stars can drop all year round.' },
    { 'categories': ['environment', 'paint'], 'description': 'Fallen stars are painted pink.' },
    { 'categories': ['shop'], 'description': 'The Tax Collector gives twice as much money.' },
    { 'categories': ['droprate'], 'description': 'The Rod of Discord is more likely to drop.' },
    { 'categories': ['player'], 'description': 'The player bursts into confetti upon death.' },
    { 'categories': ['player'], 'description': 'Respawn time is cut in half.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy)], [
    { 'categories': ['enemyspawning'], 'description': 'Fairies are more likely to spawn underground.' },
]);

addCombo([celebrationMk10, seedNot(forTheWorthy), seedNot(skyblock)], [
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

addCombo([notTheBees, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Fallen Logs can generate on Jungle Grass.' },
]);

addCombo([worldIsFrozen, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Fallen Logs can generate on snow.' },
]);

addCombo([worldIsFrozen, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['loot'], 'description': 'Presents can generate in chests.' },
]);

addCombo([surfaceIsDesert, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Fallen Logs can generate on sand.' },
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

addCombo([seedOr([celebrationMk10, rainbowStuff]), seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['loot'], 'description': 'Rainbow glowsticks replace glowsticks in chests.' },
]);

addCombo([vampirism, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['loot', 'accessory'], 'description': 'Gold Chests in the underground or cavern layer have a 1/10 (10%) chance to contain either a Bat Hook or Moon Stone, have an additional 1/12 (8.33%) chance to contain either a Mean Goblin\'s Spikes, Crow\'s Beak, or Grim Old Barb, and generally contain more Torches than usual.' },
    { 'categories': ['droprate', 'loot'], 'description': 'Pots in the underground or cavern layer also contain more Torches than usual, and may drop wood.' },
]);

addCombo([vampirism, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms, extraFloatingIslands])])], [
   { 'categories': ['loot', 'accessory'], 'description': 'Naturally-generated chests can contain the Amulet of the Night, a transformation mount that turns the user into a bat with infinite flight.' },
   { 'categories': ['loot'], 'description': 'Monster vanity sets can spawn in chests.' },
]);
 

addCombo([rainbowStuff, seedOr([seedNot(skyblock), seedOr([extraLiquid,noInfection,surfaceIsDesert,worldIsFrozen,hallowOnTheSurface,worldIsInfected,surfaceIsMushrooms])])], [
    { 'categories': ['loot'], 'description': 'Rainbow glowsticks replace glowsticks in chests.' },
    { 'categories': ['loot'], 'description': 'All variations of Rainbow Dye (Normal, Intense, Living and Midnight) and Meowmere Minecarts can be found in Chests.' },
    { 'categories': ['trap'], 'description': 'Each Boulder has a 1/4 (25%) chance to be replaced with a Rainbow Boulder.' },
    { 'categories': ['biome'], 'description': 'Some Underground Cabins are made of Helium Moss Bricks.' },
    { 'categories': ['loot'], 'description': 'Rainbow Flares can be found in chests that contain a Flare Gun.' },
]);

addCombo([rainbowStuff, seedNot(skyblock), seedNot(noSurface)], [
    { 'categories': ['loot'], 'description': 'Rainbow Cursors can be found in Surface Chests.' },
]);

addCombo([rainbowStuff, seedNot(skyblock), seedOr([seedNot(notTheBees), remix])], [
    { 'categories': ['loot'], 'description': 'Rainbow Campfires replace normal campfires in Campsite structures. The Campfires on certain Dungeon designs remain unchanged.' },
]);

addCombo([rainbowStuff, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'Rainbow Torches replace the Demon Torches in Ruined Houses.' },
    { 'categories': ['biome'], 'description': 'Rainbow Bricks replace every block a waterfall flows over, making all waterfalls rainbow.' },	
    { 'categories': ['biome'], 'description': 'Caves and the Dungeon have Helium Moss and Disco Balls in them.' },	
    { 'categories': ['loot'], 'description': 'Rainbow Slime Banners replace all (decorative) banners in the world.' },	
   { 'categories': ['loot'], 'description': 'Each of the Biome Chests contain a Rainbow Gun in addition to their normal loot. The Hallowed Chest still contains a single Rainbow Gun.' },	
]);

addCombo([seedOr([celebrationMk10, theConstant], seedNot(noSurface)) ], [
    { 'categories': ['environment'], 'description': 'Rare clouds are more likely.' },
]);

addCombo([theConstant, seedNot(noSurface)], [
    { 'categories': ['environment'], 'description': 'Specifically, rare Don\'t Starve clouds are even more likely.' },
 ]);

addCombo([forTheWorthy, theConstant ], [
    { 'categories': ['player'], 'description': 'There is no warning before damage occurs in the darkness.' },
]);

addCombo([theConstant, seedNot(remix), seedNot(forTheWorthy), seedNot(notTheBees), seedNot(notTheBees), seedNot(noTraps)], [
    { 'categories': ['environment'], 'description': 'The world has a sepia shader that can be turned off via the Radio Thing.' },
]);

addCombo([notTheBees, celebrationMk10, seedNot(drunk)], [
    { 'categories': ['loot'], 'description': 'Beenades can drop from trees or pots.' },
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



addCombo([theConstant, remix], [
    { 'categories': ['player'], 'description': 'Players get extra time before starving.' },
]);

addCombo([theConstant, seedNot(remix)], [
    { 'categories': ['player'], 'description': 'The player makes Don\'t Starve sounds when hurt.' },
]);

addCombo([forTheWorthy, remix, seedNot(drunk)], [
    { 'categories': ['trap'], 'description': 'Mining snow and slush has a 50% chance of creating water.' },
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
    { 'categories': ['background'], 'description': 'Clouds during/after world generation will be replaced with Wilson, Willow, Maxwell and Charlie from Don\'t Starve.' },
]);

addCombo([remix], [
    { 'categories': ['background'], 'description': 'The logo flips upside down and rotates during world generation.' },
    { 'categories': ['loot', 'weapon'], 'description': 'The Remix weapon swap effects are in place.' },
    { 'categories': ['shop'], 'description': 'The Remix changes to Pylon placement are in effect.' },
    { 'categories': ['enemyspawning', 'enemyai'], 'description': 'Remix enemy spawn rate changes and stat changes are in effect.' },
    { 'categories': ['loot'], 'description': 'Slimes can spawn holding Fallen Stars.' },
    { 'categories': ['loot'], 'description': 'Shaking Ash Trees in the Underworld can cause Fallen Stars to spawn.' },
    { 'categories': ['biome', 'environment'], 'description': 'Flesh and Lesion blocks count when determining if an Evil biome is present.' },
    { 'categories': ['environment'], 'description': 'Lava now does 200 base contact damage to players, and the duration of the On Fire! debuff is increased to 10.5 / 21 / 26.25 seconds. Additionally, enemies will not take direct contact damage from lava, and will only suffer from the On Fire! debuff for 3 seconds.' },
 ]);

addCombo([remix, seedNot(noSurface)], [
    { 'categories': ['environment'], 'description': 'Surface gravity is weaker.' },
   { 'categories': ['environment'], 'description': 'The player can die by going off the top of the map.' },
 ]);

addCombo([noSurface, seedNot(skyblock), seedOr([seedNot(remix),seedNot(randomSpawn)])], [
    { 'categories': ['location'], 'description': 'Spawn is random and torches are placed around spawn.' },
]);

addCombo([remix, seedNot(randomSpawn), seedNot(skyblock)], [
    { 'categories': ['location'], 'description': 'The player spawns in the Underworld.' },
]);

addCombo([randomSpawn, seedNot(skyblock)], [
    { 'categories': ['location'], 'description': 'The player spawns in a random location surrounded by torches.' },
]);

addCombo([teamBasedSpawns], [
    { 'categories': ['location'], 'description': 'There are six spawn points in the world, one for each team. Single players may change teams, and changing teams teleports the player to that team\'s spawn point.' },
]);

addCombo([worldIsInfected, teamBasedSpawns], [
    { 'categories': ['enemyspawning'], 'description': 'Devourer and World Feeder enemies cannot spawn.' },
]);

addCombo([worldIsInfected, seedNot(teamBasedSpawns)], [
    { 'categories': ['enemyspawning'], 'description': 'Devourer and World Feeder cannot spawn near the player\'s World spawn point.' },
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
addCombo([seedNot(skyblock), seedOr([roundLandmasses, noSurface, notTheBees]), seedNot(theConstant)], [
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

addCombo([drunk, seedOr([seedNot(celebrationMk10), remix, notTheBees]), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'A living tree painted brown will spawn over the dungeon, which is now buried.' },
]);

addCombo([seedOr([notTheBees, noTraps, pooEverywhere]), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Poo boulders may spawn.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Boulder piles may spawn.' },
]);

addCombo([errorWorld, secretSeedsCount(4,-1, actuallyNoTraps), seedNot(skyblock)], [
    { 'categories': ['trap'], 'description': 'Boulder piles may be invisible.' },
]);

addCombo([seedOr([noTraps, errorWorld]), secretSeedsCount(4,-1, actuallyNoTraps), celebrationMk10, seedNot(skyblock)], [
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
    { 'categories': ['biome'], 'description': 'The outer edges of the world are corrupted.' },
    { 'categories': ['biome'], 'description': 'Attempts to generate herbs during world generation are more frequent.' },
    { 'categories': ['biome'], 'description': 'The middle portion of the Underworld is an ash platform, with the outer edges of the world having ruined houses.' },
    { 'categories': ['biome'], 'description': 'Sand patches are less common.' },
    { 'categories': ['loot'], 'description': 'Remix weapon swapping effects are in effect.' },
   { 'categories': ['loot'], 'description': 'Pots can contain a Slime holding a Fallen Star.' },
   { 'categories': ['loot'], 'description': 'Rope and Fallen Stars can drop from pots.' },
]);

addCombo([remix, seedNot(skyblock), seedNot(dualDungeons)], [
    { 'categories': ['biome'], 'description': 'In Hardmode, one of the outer Corruption portions of the world is converted to Hallow.' },]);



addCombo([remix, seedNot(noSurface), seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is reversed, with the layers using the Remix rules for determining the Surface, Underground, Cavern and Ocean biomes. A Glowing Mushroom layer spawns above the Underworld. The Jungle Temple is on the Surface.' },
    { 'categories': ['biome'], 'description': '50% more surface tunnels spawn.' },
]);

addCombo([remix, noSurface, seedNot(skyblock)], [
    { 'categories': ['biome'], 'description': 'The world is reversed, with the layers using the Remix rules for determining the Surface, Underground, Cavern and Ocean biomes. A Glowing Mushroom layer spawns above the Underworld. The Jungle Temple spawns normally, since there is no true surface.' },
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

addCombo([seedNot(forTheWorthy), celebrationMk10, remix, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'The surface of the world is Hallow.' },
]);

addCombo([seedNot(forTheWorthy), seedNot(celebrationMk10), remix, seedNot(skyblock)], [
    { 'categories': ['loot'], 'description': 'The surface of the world is completely corrupted.' },
]);

addCombo([skyblock, errorWorld], [
    { 'categories': ['biome'], 'description': 'The amount of changes incurred by Error world are halved by skyblock.' },
]);

addCombo([skyblock], [
    { 'categories': ['enemyspawning'], 'description': 'Enemy spawn rates are doubled by Skyblock.' },
    { 'categories': ['enemyspawning', 'townnpc'], 'description': 'At least two Town NPCs must be present to decrease enemy spawns.' },
    { 'categories': ['enemyspawning'], 'description': 'Mimics can spawn in the Cavern layer in PreHardmode. They will be Frost Mimics if they spawn in the Ice Biome.' },
    { 'categories': ['enemyspawning'], 'description': 'Slimes and Torch Zombies are more common pre-Boss (outside of Graveyards).' },
    { 'categories': ['enemyspawning'], 'description': 'Spiked Ice Slimes, Jungle Slimes and Black Slimes keep their pre-Hardmode spawn frequency even in Hardmode.' },
    { 'categories': ['enemyspawning'], 'description': 'Holiday Slimes are much less likely.' },
    { 'categories': ['enemyspawning'], 'description': 'Gnomes are less likely to spawn, and are especially unlikely to appear in groups.' },
    { 'categories': ['enemyai'], 'description': 'The Eater of Worlds is not as restricted to ground tiles and doesn\'t make burrowing noises.' },
     { 'categories': ['enemyai', 'enemyspawning', 'loot', 'accessory', 'droprate'], 'description': 'Slimes are more likely to contain items. If Skeletron is defeated, Slimes can spawn containing Hellstone. Ice Slimes and Spiked Ice Slimes have a chance to contain Snow or Slush. If Fossil is not present, Sand Slimes have a chance to contain Fossil. If no life crystals are in the world, slimes may spawn containing Life Crystals. Slimes may drop voice-changing items. Slimes may contain Grass, Jungle, and Mushroom Grass seeds. In Hardmode, slimes may contain Harmode ores. Slimes are more likely to contain ropes or torches and less likely to contain bombs or high-value coins. Lava Slimes drop lava even in Classic mode, and the amount of lava is increased.' },
   { 'categories': ['loot', 'droprate'], 'description': 'Zombies can drop Sickles and Wood.' },
   { 'categories': ['townnpc'], 'description': 'Town NPCs gain a 50% damage increase and their attack speed may increase.' },
   { 'categories': ['loot'], 'description': 'Bosses drop certain types of loot if it is not already present int the world. The Eye of Cthulhu drops an altar; the Eater of Worlds or Brain of Cthulhu drop Dungeon bricks and unsafe Dungeon walls. Skeletron drops a Hellforge. Plantera drops Lihzahrd bricks, Lihzahrd walls, and a Picksaw. Golem drops Jungle Traps.' },
   { 'categories': ['environment'], 'description': 'Defeating the Brain of Cthulhu or the Eater of Worlds has the same effect as smashing a Shadow Orb (for instance, the Goblin Army can arrive and the Travelling Merchant can sell the Revolver).' },
   { 'categories': ['enemyspawning'], 'description': 'Many bosses that are usually coded to spawn in solid tiles can spawn in midair, including Queen Bee, The Twins, Skeletron Prime, the Brain of Cthulhu and Betsy.' },
  { 'categories': ['enemyspawning'], 'description': 'The Mechanical Bosses and the Pirate invasion can occur even if an altar hasn\'t been smashed. Slime Rain is 5x more likely if King Slime has not been defeated. The Eye of Cthulhu spawns more rarely, and can continue to spawn if there are no altars.' },
  { 'categories': ['enemyspawning'], 'description': 'Meteor showers replace meteors.' },
   { 'categories': ['enemyspawning'], 'description': 'The Old Man and the Cultists can spawn on any Dungeon tiles in the Surface.' },
 { 'categories': ['biome'], 'description': 'Snow and Desert biomes only need 300 tiles instead of 1500.' },
]);

addCombo([remix], [
    { 'categories': ['enemyspawning'], 'description': 'Gnomes are twice as likely to spawn, but can only spawn in the Cavern layer above the Glowing Mushroom layer.' },
]);
