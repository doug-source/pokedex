export function equalizeListSizes<T, W>(firstList: T[], lastList: W[]) {
    const lowerSize = Math.min(firstList.length, lastList.length);
    if (firstList.length > lowerSize) {
        return [firstList.slice(0, lastList.length), lastList] as const;
    }
    if (lastList.length > lowerSize) {
        return [firstList, lastList.slice(0, firstList.length)] as const;
    }
    return [firstList, lastList] as const;
}
