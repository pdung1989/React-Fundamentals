import React from 'react'
import App from './App';
import TodoTable from './TodoTable';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

//test text in todoTable
test('renders todotable', () => {
  const row = [
    { description: 'Go to coffee', date: '24.11.2020' }
  ]

  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent('Go to coffee');
})

//test input and button click
test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(<App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } })

  const button = getByText('Add');
  fireEvent.click(button);

  const buttonClear = getByText('Clear');
  fireEvent.click(buttonClear);

  expect(container).not.toHaveTextContent('');
})
