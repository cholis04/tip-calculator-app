import { render, cleanup, fireEvent } from '@testing-library/react';
import Home from '../pages';

afterEach(cleanup)

describe('Homepage', () => {
  it('render a heading level 1 splitter', () => {
    const {getByRole} = render(<Home />);

    const heading = getByRole('heading', {
      level:1
    }).textContent;

    expect(heading).toBe("SPLITTER");
  });

  it('input text bill then enable reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const inputBill = getByLabelText('Bill');
    const resetButton = getByText(/reset/i);

    fireEvent.change(inputBill, {target: {value: '10'}})
    expect(resetButton.disabled).toBe(false);

  })

  it('input text num of people then enable reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const resetButton = getByText(/reset/i);

    fireEvent.change(inputNumPeople, {target: {value: '2'}})
    expect(resetButton.disabled).toBe(false);

  })

  it('checked tip percentage then enable reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const labelRadio5Persen = getByLabelText('5%');
    const resetButton = getByText(/reset/i);

    expect(labelRadio5Persen.checked).toEqual(false);

    fireEvent.click(labelRadio5Persen);
    expect(labelRadio5Persen.checked).toEqual(true);
    expect(resetButton.disabled).toBe(false);
  })

  it('split billing calculation I', () => {
    const {getByLabelText, getByTitle} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio25Persen = getByLabelText('25%');

    const AmountTip = getByTitle('Tip Amount / person');
    const AmountBill = getByTitle('Total Bill / person');

    fireEvent.change(inputBill, {target: {value: '250'}})
    fireEvent.click(labelRadio25Persen);
    fireEvent.change(inputNumPeople, {target: {value: '3'}})

    expect(AmountTip.textContent).toBe('$20.83');
    expect(AmountBill.textContent).toBe('$104.17')

  })

  it('split billing calculation II', () => {
    const {getByLabelText, getByTitle} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio5Persen = getByLabelText('5%');

    const AmountTip = getByTitle('Tip Amount / person');
    const AmountBill = getByTitle('Total Bill / person');

    fireEvent.change(inputBill, {target: {value: '10'}})
    fireEvent.click(labelRadio5Persen);
    fireEvent.change(inputNumPeople, {target: {value: '2'}})

    expect(AmountTip.textContent).toBe('$0.25');
    expect(AmountBill.textContent).toBe('$5.25')

  })

  it('reset all input value and disabled reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio5Persen = getByLabelText('5%');
    const resetButton = getByText(/reset/i);


    fireEvent.change(inputBill, {target: {value: '10'}})
    fireEvent.click(labelRadio5Persen);
    fireEvent.change(inputNumPeople, {target: {value: '2'}})
    fireEvent.click(resetButton);

    expect(inputBill.value).toBe('')
    expect(inputNumPeople.value).toBe('')
    expect(labelRadio5Persen.checked).toEqual(false);
    expect(resetButton.disabled).toBe(true);

  })
});

