import { shallow } from "enzyme";
import ReviewCardList from "../ReviewCardList/ReviewCardList";
import ReviewCard from "../ReviewCard/ReviewCard";

describe("ReviewCardList", () => {
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

  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem("allReviews", JSON.stringify(reviews));
    window.localStorage.setItem("review", JSON.stringify(reviews[0]));
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<ReviewCardList reviews={reviews} />);
    expect(wrapper).toBeTruthy();
  });

  it("renders a ReviewCard for each review", () => {
    const wrapper = shallow(<ReviewCardList reviews={reviews} />);
    expect(wrapper.find(ReviewCard)).toHaveLength(reviews.length);
  });

  it("renders a StarRating for each review", () => {
    const wrapper = shallow(<ReviewCardList reviews={reviews} />);
    expect(wrapper.containsMatchingElement(<ReviewCard />)).toEqual(true);
  });

  it("renders review card details when clicked", () => {
    const wrapper = shallow(<ReviewCardList reviews={reviews} />);
    const review = reviews[0];
    wrapper.find(ReviewCard).at(0).simulate("click");
    expect(wrapper.find(ReviewCard).at(0).props().review).toEqual(review);
  });

  it("throws error when nothing is rendered", () => {
    const wrapper = shallow(<ReviewCardList reviews={[]} />);
    expect(wrapper.find(ReviewCard)).toHaveLength(0);
  });
});
