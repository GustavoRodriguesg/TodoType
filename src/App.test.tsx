import { render, screen } from '@testing-library/react'; // Importe a função render corretamente
import App from './App'; // Importe o componente App corretamente

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Lista de Tarefas/i);
  expect(headerElement).toBeInTheDocument();
});
