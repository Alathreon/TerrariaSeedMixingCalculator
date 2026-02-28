const index = new Map();

function initIndex() {
    for(let seed of ALLSEEDS) {
        index.set(seed.name.toLowerCase(), seed);
        for(let code of seed.codes) {
            index.set(code.toLowerCase(), seed);
        }
    }
}

function search(root) {
    let text = root.find('.search').val().trim().toLowerCase();
    let extracts = extractFiltersAndSorts(text);
    text = extracts.text.trim();

    let names = index.keys()
        .filter(e => e.includes(text))
        .map(e => index.get(e).name)
        .toArray();

    let seeds = [...ALLSEEDS];
    for(let i = 0; i < seeds.length; i++) {
        let seed = seeds[i];
        if(!names.includes(seed.name)) {
            seeds.splice(i, 1);
            i--;
        } else {
            for(let filter of extracts.filters) {
                if(!matchFilter(filter, seed)) {
                    seeds.splice(i, 1);
                    i--;
                }
            }
        }
    }

    if(extracts.plusSort.includes('+name')) {
        seeds.sort((a, b) => a.name.localeCompare(b.name));
    } else if(extracts.minusSort.includes('-name')) {
        seeds.sort((a, b) => -a.name.localeCompare(b.name));
    } else if(extracts.plusSort.includes('+code')) {
        seeds.sort((a, b) => a.codes[0].localeCompare(b.codes[0]));
    } else if(extracts.minusSort.includes('-code')) {
        seeds.sort((a, b) => -a.codes[0].localeCompare(b.codes[0]));
    } else if(extracts.plusSort.includes('+description')) {
        seeds.sort((a, b) => a.description.localeCompare(b.description));
    } else if(extracts.minusSort.includes('-description')) {
        seeds.sort((a, b) => -a.description.localeCompare(b.description));
    }

    insertSeeds(root, seeds)
}

function matchFilter(filter, seed) {
    switch(filter) {
        case ':special':
            return seed.special;
        case ':secret':
            return !seed.special;
        case ':paint':
            return seed.feature === 'paint';
        case ':worldgen':
            return seed.feature === 'worldgen';
        case ':biome':
            return seed.feature === 'biome';
        case ':structure':
            return seed.feature === 'structure';
        case ':passive':
            return seed.feature === 'passive';
        case ':spawn':
            return seed.feature === 'spawn';
        case ':other':
            return seed.feature === 'other';
        default:
            return true;
    }
}

function extractFiltersAndSorts(text) {
    let extracted = {
        'text': text
    };
    extract(':', 'filters', extracted);
    extract('+', 'plusSort', extracted);
    extract('-', 'minusSort', extracted);
    return extracted;
}

function extract(symbol, field, extracted) {
    let text = extracted.text;
    if(text.trim().length == 0) {
        extracted[field] = [];
    }
    let elements = [];
    while(true) {
        let start = text.indexOf(symbol);
        if(start == -1) {
            extracted['text'] = text;
            extracted[field] = elements;
            return;
        }
        let end = text.indexOf(' ', start);
        if(end == -1) {
            end = text.length;
        }
        elements.push(text.substring(start, end));
        text = text.substring(0, start) + text.substring(end);
    }
}