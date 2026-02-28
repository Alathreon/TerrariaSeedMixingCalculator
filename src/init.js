function init(root) {
    initIndex();
    insertSeeds(root, ALLSEEDS);
    root.find('.search').on('input', () => search(root));
    updateEffects(root);
}

function insertSeeds(root, seeds) {
    let seedList = root.find('.seed-list');
    seedList.children().remove();
    for(let seed of seeds) {
        seedList.append(createSeedCard(root, seed));
    }
}

function createSeedCard(root, seed) {
    let nameNode = $(`<div>${seed.name} (${seed.codes[0]})</div>`);
    let descriptionNode = $(`<div>${seed.description}</div></div>`)
    let card = $(`<div name="${seed.name}"></div>`);
    card.append(nameNode);
    card.append(descriptionNode);
    card.on('mouseenter', () => card.css({ 'background': seed.special ? 'green' : 'lightgrey' }))
        .on('mouseleave', () => card.css({ 'background': seed.special ? 'lightgreen' : 'white' }))
        .on('click', () => selectSeed(root, seed));
    card.css({
        'margin': '10px',
        'background-color': seed.special ? 'lightgreen' : 'white'
    })
    nameNode.css({
        'font-weight': 'bold'
    })
    return card;
}

function selectSeed(root, seed) {
    let selectedSeeds = root.find('.selected-seeds');
    if(selectedSeeds.children().is(`[name="${seed.name}"]`)) return;
    let node = $(`<div name="${seed.name}">${seed.name}</div>`);
    node.css({
        'margin': '5px'
    })
    node.on('mouseenter', () => node.css({ 'background': 'lightgrey'}))
        .on('mouseleave', () => node.css({ 'background': 'white'}))
        .on('click', () => unselectSeed(root, seed));
    selectedSeeds.append(node);
    if(seed.name === 'Zenith') {
        ALLSEEDS.filter(s => s.special && s.name !== 'Skyblock').forEach(s => selectSeed(root, s));
    }
    updateEffects(root);
}

function unselectSeed(root, seed) {
    let selectedSeeds = root.find('.selected-seeds');
    if(!selectedSeeds.children().is(`[name="${seed.name}"]`)) return;
    selectedSeeds.children().filter(`[name="${seed.name}"]`).remove();
    updateEffects(root);
}

function updateEffects(root) {
    let effectsNode = root.find('.effects');
    effectsNode.children().remove();
    let seeds = root.find('.selected-seeds').children().map((i, e) => $(e).attr('name')).get();
    let effects = findEffects(seeds);
    for(let effect of effects) {
        effectsNode.append(`<li>${effect}</li>`)
    }
}