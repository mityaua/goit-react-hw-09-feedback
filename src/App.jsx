import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

// Компонент приложения
export default function App() {
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>

      <Section title="Statistics">
        <Statistics />
      </Section>
    </Container>
  );
}
