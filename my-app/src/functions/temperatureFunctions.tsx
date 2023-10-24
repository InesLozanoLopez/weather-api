export function celciusToFahrenheit(celcius: number): number {
  const fahrenheit = (celcius * 9) / 5 + 32;
  return Number(fahrenheit.toFixed(1))
}

export const temperatureToggle = ({
  tempCelsius,
  temperature,
}: {
  tempCelsius: boolean;
  temperature: number;
}): number => {
  return tempCelsius ? temperature : celciusToFahrenheit(temperature);
};
