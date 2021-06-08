export default function getFullDate() {
    const d = new Date
    return `${d.toLocaleDateString()} в ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export function getLocationId() {
    const search = window.location.search.replace('?id=', '')
    return +search
}

export function getLocalStorageItem(name = '') {
    return JSON.parse(localStorage.getItem(name))
}

export function concatLocalStorageItem(name, data) {
    if (getLocalStorageItem(name)) {
        localStorage.setItem(name, JSON.stringify(getLocalStorageItem(name).concat(data)))
    } else {
        localStorage.setItem(name, JSON.stringify(data))
    }
}

export function setLocalStorageItem(name, id, data) {
    if (getLocalStorageItem(name)) {
        const item = getLocalStorageItem(name)
        const index = item.findIndex(i => i.id === id)
        item[index] = data
        localStorage.setItem(name, JSON.stringify(item))
    } else {
        localStorage.setItem(name, JSON.stringify(data))
    }
}