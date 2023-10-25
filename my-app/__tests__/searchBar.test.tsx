import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import SearchBar from '../src/components/searchBar';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
    info: jest.fn(),
  },
}));

describe('SearchBar component', () => {
  it('renders correctly', () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText('City...');
    expect(searchBar).toBeDefined();
  });

  it('displays a warning for an invalid city', async () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('City...');

    act(() => {
      fireEvent.change(input, { target: { value: '{{(788)}}' } });
      fireEvent.submit(input);
    });

    await waitFor(() => {
      act(() => {
        expect(toast.warning('Only letters allowed'));
      });
    });
  });

  it('submits the form with a valid city and displays loading toast', async () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('City...');

    act(() => {
      fireEvent.change(input, { target: { value: 'New York' } });
      fireEvent.submit(input);
    });
    await waitFor(() => {
      act(() => {
        expect(toast.info('Loading forecast...'));
      });
    });
  });
});
