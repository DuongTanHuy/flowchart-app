export function getValueRuleset(rpaValue, variableMap, child) {
  if (rpaValue !== null && rpaValue !== undefined) {
    if (child.name === 'Range') {
      return {
        defaultMin: rpaValue.min,
        defaultMax: rpaValue.max,
      };
    }
    return {
      defaultValue: rpaValue,
    };
  }

  switch (child.name) {
    case 'Select':
      return {
        defaultValue: child?.config?.options.some(
          (option) => option.value === variableMap[child?.config?.variable?.id],
        )
          ? variableMap[child?.config?.variable?.id]
          : child?.config?.defaultValue || '',
      };

    case 'Range':
      return {
        defaultMin: variableMap[child?.config?.variable?.id]?.min,
        defaultMax: variableMap[child?.config?.variable?.id]?.max,
        ...(!variableMap[child?.config?.variable?.id]?.max &&
          !variableMap[child?.config?.variable?.id]?.min && {
            defaultMin: child?.config?.defaultMin,
            defaultMax: child?.config?.defaultMax,
          }),
      };

    default:
      return {
        defaultValue:
          variableMap[child?.config?.variable?.id] ??
          child?.config?.defaultValue,
      };
  }
}
