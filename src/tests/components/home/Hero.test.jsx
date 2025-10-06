import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from '../../../components/home/Hero.jsx';

describe('Hero Component', () => {
    let container = null;
    let root = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    afterEach(() => {
        if (root) {
            root.unmount();
        }
        container.remove();
        container = null;
        root = null;
    });

    function renderComponent(message = "Test message") {
        return new Promise(resolve => {
            root.render(<Hero message={message} />);
            // Dar más tiempo para que React actualice el DOM
            setTimeout(resolve, 100);
        });
    }

    it('debería renderizarse sin errores', (done) => {
        renderComponent().then(() => {
            expect(container.querySelector('.hero')).toBeTruthy();
            done();
        });
    });

    it('debería mostrar el título correcto', (done) => {
        renderComponent().then(() => {
            const heading = container.querySelector('h1');
            expect(heading.textContent).toBe('Tu Destino Gaming Definitivo');
            done();
        });
    });

    it('debería mostrar el mensaje pasado como prop', (done) => {
        const testMessage = 'Mensaje de prueba';
        renderComponent(testMessage).then(() => {
            const paragraph = container.querySelector('.lead');
            expect(paragraph.textContent).toBe(testMessage);
            done();
        });
    });

    it('debería tener los botones de CTA con los enlaces correctos', (done) => {
        renderComponent().then(() => {
            const buttonContainer = container.querySelector('.cta-buttons');
            expect(buttonContainer).toBeTruthy();

            if (buttonContainer) {
                const buttons = buttonContainer.querySelectorAll('a');
                expect(buttons.length).toBe(2);

                const hrefs = Array.from(buttons).map(button => button.getAttribute('href'));
                expect(hrefs[0]).toBe('./productos.html');
                expect(hrefs[1]).toBe('./productos.html?cat=OF');
            }
            done();
        });
    });

    it('debería tener una imagen con atributos correctos', (done) => {
        renderComponent().then(() => {
            const imageContainer = container.querySelector('.hero-visual');
            expect(imageContainer).toBeTruthy();

            if (imageContainer) {
                const image = imageContainer.querySelector('img');
                expect(image).toBeTruthy();
                expect(image.alt).toContain('Interior de tienda gaming');
                expect(image.width).toBe(700);
                expect(image.height).toBe(467);
            }
            done();
        });
    });
});