interface IModifierProvider {
    getAdditiveModifiers(stat: Stat): number;
    getPercentageModifiers(stat: Stat): number;
}