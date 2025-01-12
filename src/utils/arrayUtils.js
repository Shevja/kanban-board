export const reorder = (list, index, afterIndex) => {
    const result = Array.from(list)
    const [item] = result.splice(index, 1)
    result.splice(afterIndex, 0, item)

    return result
}

export const move = (sourceList, destinationList, index, afterIndex) => {
    const newSrcList = Array.from(sourceList)
    const newDistList = Array.from(destinationList)

    const [item] = newSrcList.splice(index, 1)
    newDistList.splice(afterIndex, 0, item)

    return { newSrcList, newDistList }
}