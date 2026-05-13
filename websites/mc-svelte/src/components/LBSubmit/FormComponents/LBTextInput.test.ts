import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import LBTextField from './LBTextInput.svelte';

describe(`test LBNumberField", check if the value is displayed with props`, () => {
  test("says 'render LBNumberField'", async () => {
    render(LBTextField, {
      props: {
        value: '10',
        classes: '',
        readOnly: true,
        onChange: () => {}
      }
    });

    const item = screen.getByTestId('test_id_text_field');
    expect(item).toHaveDisplayValue('10');
  });
});
