function init(root) {
    initIndex();
    insertSeeds(root, ALLSEEDS);
    root.find('.search').on('input', () => search(root));
    initCategories(root);
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
    if(seed.special) {
        applyButtonEffect(card, 'lightgreen', 'green', () => selectSeed(root, seed));
    } else {
        applyButtonEffect(card, 'white', 'lightgrey', () => selectSeed(root, seed));
    }
    card.css({
        'margin': '10px',
        'background-color': seed.special ? 'lightgreen' : 'white'
    })
    nameNode.css({
        'font-weight': 'bold'
    })
    return card;
}

function initCategories(root) {
    let allCat = $(`<div>All</div>`);
    allCat.css({
        'margin': '5px'
    });
    applyButtonEffect(allCat, 'white', 'lightgrey', () => changeCategory(root, 'all', 'all'));
    root.find('.effects-categories').append(allCat);
    for(let entry in EFFECTS_CATEGORIES) {
        let category = $(`<div name="${entry}">${EFFECTS_CATEGORIES_NAMES[entry]}</div>`);
        applyButtonEffect(category, 'white', 'lightgrey', () => changeCategory(root, entry, 'all'));
        category.css({
            'margin': '5px'
        });
        root.find('.effects-categories').append(category);
    }
    
    let subcategoriesElement = root.find('.effects-subcategories');
    for(let entry in EFFECTS_CATEGORIES) {
        let container = $(`<div name="${entry}"></div>`);
        container.css({
            'border': 'black solid 1px',
            'display': 'flex',
            'flex-flow': 'wrap'
        });
        
        let allSubCat = $(`<div>All</div>`);
        allSubCat.css({
            'margin': '5px'
        });
        applyButtonEffect(allSubCat, 'white', 'lightgrey', () => changeCategory(root, entry, 'all'));
        container.append(allSubCat);

        for(let subentry of EFFECTS_CATEGORIES[entry]) {
            let subcategory = $(`<div>${EFFECTS_CATEGORIES_NAMES[subentry]}</div>`);
            subcategory.css({
                'margin': '5px'
            });
            applyButtonEffect(subcategory, 'white', 'lightgrey', () => changeCategory(root, entry, subentry));
            container.append(subcategory);
        }
        subcategoriesElement.append(container);
    }
}

function selectSeed(root, seed) {
    let selectedSeeds = root.find('.selected-seeds');
    if(selectedSeeds.children().is(`[name="${seed.name}"]`)) return;
    let node = $(`<div name="${seed.name}">${seed.name}</div>`);
    node.css({
        'margin': '5px'
    })
    applyButtonEffect(node, 'white', 'lightgrey', () => unselectSeed(root, seed));
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

function changeCategory(root, category, subcategory) {
    root.find(`.effects-subcategories > div`).css({
        'display': 'none'
    });
    root.find(`.effects-subcategories div[name="${category}"]`).css({
        'display': 'flex'
    });
    updateEffectsWithCategory(root, category, subcategory);
}

function updateEffects(root) {
    changeCategory(root, 'all', 'all');
}

function updateEffectsWithCategory(root, category, subcategory) {
    let effectsNode = root.find('.effects');
    effectsNode.children().remove();
    let seeds = root.find('.selected-seeds').children().map((i, e) => $(e).attr('name')).get();
    let effects = findEffects(seeds);
    let i = 0;
    for(let effect of effects) {
        if(category === 'all'
            || (category === EFFECTS_REVERSE_CATEGORIES[effect.categories]
                && (subcategory === 'all' || effect.categories.includes(subcategory)))) {
            effectsNode.append(`<li>${effect.description}</li>`);
            i++;
        }
    }
    root.find('.effects-title').text(`Effects: ${i} / ${effects.length}`);
}

function applyButtonEffect(element, lightcolor, color, fun) {
    element
        .on('mouseenter', () => element.css({ 'background': color }))
        .on('mouseleave', () => element.css({ 'background': lightcolor }))
        .on('click', fun);
}
