function findEffects(seedsText) {
    let effects = [];
    for(let combi of combinationEffects) {
        if(seedsCorrespond(seedsText, combi.seeds)) {
            effects.push(...combi.effects);
        }
    }
    return effects;
}
function seedsCorrespond(seedsText, conditions) {
    for(let condition of conditions) {
        switch (condition.kind) {
            case 'SEED':
                if(!seedsText.includes(condition.name)) return false;
                break;
            case 'OR':
                let match = false;
                for(let seed of condition.seeds) {
                    if(seedsCorrespond(seedsText, [seed])) {
                        match = true;
                        break;
                    }
                }
                if(!match) return false;
                break;
            case 'AND':
                if(!seedsCorrespond(seedsText, condition.seeds)) return false;
                break;
            case 'NOT':
                if(seedsCorrespond(seedsText, [condition.seed])) return false;
                break;
            case 'COUNT':
                let checkCount = true;
                if(condition.seed && !seedsCorrespond(seedsText, [condition.seed])) {
                    checkCount = false;
                }
                if(checkCount) {
                    let l = seedsText.length;
                    if(l < condition.min || (condition.max != -1 && l > condition.max)) return false;
                }
                break;
            default:
                throw 'Invalid kind: ' + condition.kind;
        }
    }
    return true;
}