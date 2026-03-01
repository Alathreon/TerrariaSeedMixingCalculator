const ALLSEEDS = [];

const combinationEffects = [];

const EFFECTS_CATEGORIES = {
    'worldgen': [ 'biome', 'paint', 'loot', 'trap' ],
    'spawning': [ 'location', 'townnpc' ],
    'passive': [ 'player', 'environment' ],
    'balance': [ 'enemyai', 'enemyspawning', 'droprate', 'armor', 'accessory', 'equipment', 'weapon', 'shop' ],
    'generating': [ 'background', 'moon', 'music', 'progressbar', 'text', 'minigame' ]
}

const EFFECTS_REVERSE_CATEGORIES = new Map(Object.keys(EFFECTS_CATEGORIES).flatMap(e => EFFECTS_CATEGORIES[e].map(s => [s, e])));

const EFFECTS_CATEGORIES_NAMES = {
    'worldgen': 'World Generation',
    'spawning': 'Spawning',
    'passive': 'Passive Effects',
    'balance': 'Balance Changes',
    'generating': 'While Generating',
    'surface': 'Surface',

    'biome': 'Biome',
    'paint': 'Paint',
    'loot': 'Loot',
    'trap': 'Trap',

    'location': 'Locations',
    'townnpc': 'Town NPCs',

    'player': 'Player',
    'environment': 'Environment',

    'enemyai': 'Enemy AI',
    'enemyspawning': 'Enemey Spawning',
    'droprate': 'Drop Rates',
    'armor': 'Armors',
    'accessory': 'Accessories',
    'equipment': 'Equipments',
    'weapon': 'Weapons',
    'shop': 'Shops',

    'background': 'Background',
    'moon': 'Moon',
    'music': 'Music',
    'progressbar': 'Progress Bar',
    'text': 'Text',
    'minigame': 'Minigame',
}

function addSeed(name, codes, special, feature, image, description) {
    const theSeed = {
        'kind': 'SEED',
        'name': name,
        'codes': codes,
        'realCodes': codes.map(c => c.toLowerCase().replaceAll('[^0-9a-z]', '')),
        'description': description,
        'special': special,
        'feature': feature
    }
    ALLSEEDS.push(theSeed);
    return theSeed;
}

function addCombo(seeds, effects) {
    for(let effect of effects) {
        if(effect.categories.length == 0) throw `Effect "${effect.description}" has no category`;
        for(let category of effect.categories) {
            if(!EFFECTS_REVERSE_CATEGORIES.has(category)) {
                throw `Invalid category "${category}" in effect "${effect.description}"`;
            }
        }
    }
    combinationEffects.push({
        'seeds': seeds,
        'effects': effects
    })
}

function secretSeedsCount(min, max, seed) {
    if(!seed['kind']) throw 'Missing field "kind"';
    return {
        'kind': 'COUNT',
        'min': min,
        'max': max,
        'seed': seed ? seed : null
    }
}

function seedOr(seeds) {
    if(!Array.isArray(seeds)) throw '"seeds" isn\'t an array"';
    return {
        'kind': 'OR',
        'seeds': seeds
    }
}

function seedAnd(seeds) {
    if(!Array.isArray(seeds)) throw '"seeds" isn\'t an array"';
    return {
        'kind': 'AND',
        'seeds': seeds
    }
}

function seedNot(seed) {
    if(!seed['kind']) throw 'Missing field "kind"';
    return {
        'kind': 'NOT',
        'seed': seed
    }

}
