import '@testing-library/jest-dom';

// Configuración global para testing-library
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-testid',
});