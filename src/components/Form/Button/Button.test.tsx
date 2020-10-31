import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render component', () => {
    const { getByTestId } = render(<Button>Click me</Button>);
    expect(getByTestId('button')).toBeInTheDocument();
  });

  test('should render a text "Delete"', () => {
    const { getByText } = render(<Button>Save</Button>);
    expect(getByText('Save')).toBeInTheDocument();
  });

  test('should render Button with default props color', () => {
    const { getByTestId } = render(<Button>Button</Button>);
    expect(getByTestId('button')).toHaveStyle('color: #ffffff');
  });

  test('should render Button with props color "#2e2d3a"', () => {
    const { getByTestId } = render(<Button color="#2e2d3a">Button</Button>);
    expect(getByTestId('button')).toHaveStyle('color: #2e2d3a');
  });

  test('should render Button with default props bgColor', () => {
    const { getByTestId } = render(<Button>Button</Button>);
    expect(getByTestId('button')).toHaveStyle('background-color: #34495e');
  });

  test('should render Button with props bgColor "#2e2d3a"', () => {
    const { getByTestId } = render(<Button bgColor="#2e2d3a">Button</Button>);
    expect(getByTestId('button')).toHaveStyle('background-color: #2e2d3a');
  });
});
