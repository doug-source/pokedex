const tableRuler = {
    mm: 1000,
    cm: 100,
    dm: 10,
    m: 1,
    km: 0.001,
    mile: (3.6 / 3.937) * 1.76,
};

const tableMass = {
    miligrams: 1000,
    centigrams: 100,
    decigrams: 10,
    grams: 1,
    decagrams: 0.1,
    hectograms: 0.01,
    kilograms: 0.001,
};

const formater = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const convertMeasure = <T extends Record<W, number>, W extends keyof T>(
    value: number,
    table: T,
    from: keyof T,
    to: keyof T
) => {
    const output = (value * table[to]) / table[from];
    return formater.format(output);
};

type mass = keyof typeof tableMass;

export const convertWeight = (value: number, from: mass, to: mass) => {
    return convertMeasure(value, tableMass, from, to);
};

type metric = keyof typeof tableRuler;

export const convertMetric = (value: number, from: metric, to: metric) => {
    return convertMeasure(value, tableRuler, from, to);
};

/**
 *  Object.fromEntries
 */
export const typeSafeObjectFromEntries = <
    const T extends ReadonlyArray<readonly [PropertyKey, unknown]>
>(
    entries: T
): { [K in T[number] as K[0]]: K[1] } => {
    return Object.fromEntries(entries) as { [K in T[number] as K[0]]: K[1] };
};

/**
 *  Object.entries
 */
export const typeSafeObjectEntries = <T extends Record<PropertyKey, unknown>>(
    obj: T
): { [K in keyof T]: [K, T[K]] }[keyof T][] => {
    return Object.entries(obj) as { [K in keyof T]: [K, T[K]] }[keyof T][];
};
