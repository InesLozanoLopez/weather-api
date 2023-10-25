import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import FutureDay from '../src/components/futureDay';
import { weatherContextProvider } from '../src/context';
import { mockContextProvider, mockWeatherDay } from '../mock.data';
import WeatherToday from '../src/components/weatherToday';

describe('FutureDay component', () => {
  it('renders correctly', () => {
    render(<FutureDay weatherDay={mockWeatherDay} />);
    expect(screen.getByText(/Wednesday/)).toBeDefined();
    expect(screen.findByAltText('Weather icon')).toBeDefined();
    expect(screen.getByText('20 ºC')).toBeDefined();
  });

  it('displays temperature in Fahrenheit when toggle is off', async () => {
    render(
      <weatherContextProvider.Provider value={mockContextProvider}>
        <WeatherToday />
        <FutureDay weatherDay={mockWeatherDay} />
      </weatherContextProvider.Provider>,
    );

    const toggleButton = screen.getByText('Fahrenheit');
    const toggleButton2 = screen.getByText('Celcius');
    await waitFor(() => {
      act(() => {
        fireEvent.click(toggleButton);
        fireEvent.click(toggleButton2);
      });
    });
    await waitFor(() => {
      act(() => {
        expect(screen.findAllByDisplayValue(/68 ºF/));
      });
    });
  });
});
