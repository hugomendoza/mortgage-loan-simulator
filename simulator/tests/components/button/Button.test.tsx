import { describe, expect, vi, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../../../src/components/button/Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeDefined();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
