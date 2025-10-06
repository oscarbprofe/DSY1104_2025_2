import { render, screen } from '@testing-library/react';
import Hero from '../../../components/home/Hero';

describe('Hero Component', () => {
  test('renders hero section with correct content', () => {
    const testMessage = 'Test message';
    render(<Hero message={testMessage} />);
    
    // Verificar el título
    expect(screen.getByText('Tu Destino Gaming Definitivo')).toBeInTheDocument();
    
    // Verificar el mensaje
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    
    // Verificar los botones
    expect(screen.getByText('Explorar Productos')).toBeInTheDocument();
    expect(screen.getByText('Ver Ofertas')).toBeInTheDocument();
    
    // Verificar la imagen
    const heroImage = screen.getByRole('img');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', 'Interior de tienda gaming con luces LED y equipos gaming');
  });

  test('hero links have correct href attributes', () => {
    render(<Hero message="Test" />);
    
    const exploreLink = screen.getByText('Explorar Productos');
    const offersLink = screen.getByText('Ver Ofertas');
    
    expect(exploreLink).toHaveAttribute('href', './productos.html');
    expect(offersLink).toHaveAttribute('href', './productos.html?cat=OF');
  });
});