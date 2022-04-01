export function validateFrequency (frequency) {
    if(frequency === '') {
        return false
    }

    return true
}

export function validateInputs(inputs) {
    if(inputs === '') {
        return false
    }

    return true
}

export function validateTopologyName(topologyName) {
    if(topologyName.match("[a-zA-Z-]+")) {
        return true
    }

    return false
}

export function validateTags(tags) {
    if(tags.match("[a-zA-Z0-9,? ?]+")) {
        return true
    }

    return false
}
