import { render, screen, cleanup } from '@testing-library/react';
import ReviewCardList from '../ReviewCardList/ReviewCardList';

const fakeLocalStorage = (function () {
  let store = {
    'allReviews': [
    {
      id: "5d707203b65083001e956f0a",
      author: "Weeks Duran",
      place: "Big Johns Burgers",
      published_at: "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
      rating: 5,
      content:
        "Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure.\r\n",
    },
  ]
  }

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe('ReviewCardList', () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  test("should render ReviewCardList component", () => {
    expect(window.localStorage.getItem("allReviews")).toEqual(fakeLocalStorage.store.allReviews);
  });
});
