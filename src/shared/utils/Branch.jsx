export function Branch({ condition, slotIf, slotElse }) {
  return condition ? slotIf : slotElse;
}
