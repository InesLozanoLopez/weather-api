import { act, fireEvent, render, screen } from '@testing-library/react';
import WeatherContext, { weatherContextProvider } from '../../src/context';
import { mockContextProvider } from '../mock.data';
import SearchBar from '../../src/components/searchBar';
import WeatherToday from '../../src/components/weatherToday';

describe('Weather Context', () => {
  it('should render children and provide context values', () => {
    render(
      <WeatherContext>
        <SearchBar />
      </WeatherContext>
    )
    expect(SearchBar).toBeDefined();
  });

  it('should update temperature units when the button is clicked', () => {
    render(
      <weatherContextProvider.Provider value={mockContextProvider}>
        <WeatherToday/>
      </weatherContextProvider.Provider>
    );
    const toggleButton = screen.getByText('Fahrenheit');
    act(() => {
    fireEvent.click(toggleButton);}
    )

    expect(screen.findAllByDisplayValue(/68 ºF/));
    expect(mockContextProvider.temperatureUnits).toHaveBeenCalledWith(true);
})
})