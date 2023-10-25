import { act, fireEvent, render, screen } from '@testing-library/react';
import WeatherToday from '../../src/components/weatherToday';
import { weatherContextProvider } from '../../src/context';
import { mockContextProvider } from '../mock.data';

describe('WeatherToday component', () => {
  it('renders correctly', () => {
    render(
      <weatherContextProvider.Provider value={mockContextProvider}>
        <WeatherToday />
      </weatherContextProvider.Provider>
    );
    expect(screen.getByText('Results for: Test City, Test Country')).toBeDefined();
    expect(screen.getByText('Precipitation: 10%')).toBeDefined();
    expect(screen.getByText('24th Oct')).toBeDefined();
    expect(screen.getByText('20 ºC')).toBeDefined();
    expect(screen.getByText('Sunny')).toBeDefined();
    expect(screen.getByText('Humidity: 60%')).toBeDefined();
    expect(screen.getByText('Wind Speed: 5mph')).toBeDefined();
    });

    test('handles temperature toggle button click', async () => {
      render(
        <weatherContextProvider.Provider value={mockContextProvider}>
        <WeatherToday />
      </weatherContextProvider.Provider>
      );
  
      const toggleButton = screen.getByText('Fahrenheit');
      act(() => {
      fireEvent.click(toggleButton);}
      )

      expect(screen.findAllByDisplayValue(/68 ºF/));
      expect(mockContextProvider.temperatureUnits).toHaveBeenCalledWith(true);
  
      const temperatureElement = await screen.getByRole('button', {name: 'Fahrenheit'});
      expect(temperatureElement).toBeDefined();
    });
});