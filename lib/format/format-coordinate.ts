export function formatCoordination(
  value: number | string | undefined,
  min: number,
  max: number,
): number | null {
  const coordinate = Number(value);

  return Number.isFinite(coordinate) && coordinate >= min && coordinate <= max
    ? coordinate
    : null;
}
