import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react';

import Home from '..';

afterEach(cleanup)

describe('Home Page', () => {
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
    expect(resetButton).toBeEnabled();

  })

  it('input bill with < 0 value display error message', () => {
    const {getByLabelText, getByRole} = render(<Home />);
    const inputBill = getByLabelText('Bill');
    
    fireEvent.change(inputBill, {target: {value: '-10'}})

    const alertMessage = getByRole("alert");

    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage).toHaveTextContent("Can't be zero")

  })

  it('input text num of people then enable reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const resetButton = getByText(/reset/i);

    fireEvent.change(inputNumPeople, {target: {value: '2'}})
    expect(resetButton).toBeEnabled();

  })

  it('input num of people with < 0 value display error message', () => {
    const {getByLabelText, getByRole} = render(<Home />);
    const inputNumPeople = getByLabelText('Number Of People');
    
    fireEvent.change(inputNumPeople, {target: {value: '-10'}})
    
    const alertMessage = getByRole("alert");

    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage).toHaveTextContent("Can't be zero")

  })

  it('checked tip percentage then enable reset button', () => {
    const {getByLabelText, getByText} = render(<Home />);

    const labelRadio5Persen = getByLabelText('5%');
    const resetButton = getByText(/reset/i);

    expect(labelRadio5Persen).not.toBeChecked();

    fireEvent.click(labelRadio5Persen);
    expect(labelRadio5Persen).toBeChecked();
    expect(resetButton).toBeEnabled();
  })

  it('split billing calculation I', () => {
    const {getByLabelText, getByTitle} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio25Persen = getByLabelText('25%');

    const AmountTip = getByTitle('Tip Amount / person');
    const AmountBill = getByTitle('Total / person');

    fireEvent.change(inputBill, {target: {value: '250'}});
    fireEvent.click(labelRadio25Persen);
    fireEvent.change(inputNumPeople, {target: {value: '3'}});

    expect(AmountTip.textContent).toBe('$20.83');
    expect(AmountBill.textContent).toBe('$104.17');

  })

  it('split billing calculation II', () => {
    const {getByLabelText, getByTitle} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio5Persen = getByLabelText('5%');

    const AmountTip = getByTitle('Tip Amount / person');
    const AmountBill = getByTitle('Total / person');

    fireEvent.change(inputBill, {target: {value: '10'}})
    fireEvent.click(labelRadio5Persen);
    fireEvent.change(inputNumPeople, {target: {value: '2'}})

    expect(AmountTip.textContent).toBe('$0.25');
    expect(AmountBill.textContent).toBe('$5.25');

  })

  it('split billing calculation III', () => {
    const {getByLabelText, getByTitle} = render(<Home />);

    const inputNumPeople = getByLabelText('Number Of People');
    const inputBill = getByLabelText('Bill');
    const labelRadio15Persen = getByLabelText('15%');

    const AmountTip = getByTitle('Tip Amount / person');
    const AmountBill = getByTitle('Total / person');

    fireEvent.change(inputBill, {target: {value: '142.55'}})
    fireEvent.click(labelRadio15Persen);
    fireEvent.change(inputNumPeople, {target: {value: '5'}})

    expect(AmountTip.textContent).toBe('$4.28');
    expect(AmountBill.textContent).toBe('$32.79');

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

    expect(inputBill).not.toHaveValue();
    expect(inputNumPeople).not.toHaveValue();
    expect(labelRadio5Persen).not.toBeChecked();
    expect(resetButton).toBeDisabled();

  })
});

