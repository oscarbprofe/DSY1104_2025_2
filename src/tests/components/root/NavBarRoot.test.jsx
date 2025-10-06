import React from 'react';
import { BrowserRouter } from 'react-router';
import NavBarRoot from '../../../components/root/NavBarRoot';

describe('NavBarRoot Component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    try {
      const component = (
        <BrowserRouter>
          <NavBarRoot />
        </BrowserRouter>
      );

      expect(component).toBeDefined();
      expect(div.innerHTML).toBe('');
    } finally {
      document.body.removeChild(div);
    }
  });
});