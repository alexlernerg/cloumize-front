import '../Account.scss';
import CardSection from './CardSection';

export default function CardForm(handleSubmit, stripe) {
  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe} className="Card__button">
        Save Card
      </button>
    </form>
  );
}
