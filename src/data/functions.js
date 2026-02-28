const ALLSEEDS = [];

const combinationEffects = [];

function addSeed(name, codes, special, feature, description) {
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