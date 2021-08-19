import './App.css';
import ReviewCardList from './components/ReviewCardList/ReviewCardList';
import ReviewsHeader from './components/ReviewsHeader/ReviewsHeader';

function App() {
  return (
    <div>
      <ReviewsHeader />
      <ReviewCardList />
    </div>
  );
}

export default App;
