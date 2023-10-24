export function celciusToFahrenheit(celcius: number): number {
    const fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

export const temperatureToggle = ({tempCelsius, temperature} : {tempCelsius: boolean, temperature: number}): number =>{
  return tempCelsius ?
  temperature :
  celciusToFahrenheit(temperature);
} 