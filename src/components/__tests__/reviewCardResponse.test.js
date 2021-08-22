import { render, screen, cleanup } from "@testing-library/react";
import ReviewCardList from "../ReviewCardList/ReviewCardList";
import ReviewCard from "../ReviewCard/ReviewCard";
import StarRating from "../StarRating/StarRating";
import App from "../../App";
import ReviewCardResponse from "../ReviewCardResponse/ReviewCardResponse";
import ReviewCardDetails from "../ReviewCardDetails/ReviewCardDetails";

jest.mock('../ReviewCardDetails/ReviewCardDetails', () => () => <div data-testid="review-card-details" />)

const reviews = [
  {
    id: "5d707203b65083001e956f0a",
    author: "Weeks Duran",
    place: "Big Johns Burgers",
    published_at: "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
    rating: 5,
    content:
      "Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure.\r\n",
  },
  {
    id: "5d707203f1c60da307b00335",
    author: "Everett Bender",
    place: "Soup du Jour",
    published_at: "Wed Apr 09 2003 01:15:36 GMT-0500 (Central Daylight Time)",
    rating: 2,
    content:
      "Occaecat ea est nulla dolore labore do cupidatat dolor laborum deserunt qui. Labore duis nisi sint in aliqua enim pariatur est nisi aliqua ullamco consequat id magna. Magna aliqua culpa sunt fugiat laboris enim aute sit. Sit nostrud quis Lorem culpa eu cupidatat est aliqua. Laboris voluptate exercitation proident aliquip ad voluptate do consectetur irure et. Eiusmod enim nostrud reprehenderit nulla cupidatat elit duis.\r\n",
  },
];

describe('ReviewCardResponse', () => {
  // test('should render ReviewCardResponse component', () => {
  //   const { getByText } = render(
  //     <App>
  //       <ReviewCardResponse review={reviews[0]} response={"Good stuff!"} />
  //     </App>
  //   );

  //   expect(getByText('Good stuff!')).toBeInTheDocument();
  // })
  
  test('should render ReviewCardResponse component', () => {
    // const { getByText } = render(
    //   <App>
    //     <ReviewCardResponse review={reviews[0]} response={"Good stuff!"} />
    //   </App>
    // );

    // expect(getByText('Good stuff!')).toBeInTheDocument();
  });

  test('should render ReviewCardResponse component with review', () => {
    // reviews[0].response = "Good stuff!";
    // const { getByText } = render(
    //   <App>
    //     <ReviewCardDetails>
    //       <ReviewCardResponse review={reviews[0]} response={"Good stuff!"} />
    //     </ReviewCardDetails>
    //   </App>
    // );
    // console.log(getByText('Good stuff!'))
  }
);
})
